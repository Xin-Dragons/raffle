use anchor_lang::prelude::*;
use anchor_spl::{
    associated_token::AssociatedToken,
    metadata::{
        mpl_token_metadata::instructions::TransferV1CpiBuilder, MasterEditionAccount, Metadata,
        MetadataAccount, TokenRecordAccount,
    },
    token::{Mint, Token, TokenAccount},
};

use crate::{
    state::{Entrants, EntryType, PaymentType, Raffle, Raffler},
    utils::add_entrants,
    RaffleError,
};

#[derive(Accounts)]
pub struct BuyTicketSendNft<'info> {
    #[account(
        mut,
        seeds = [
            b"RAFFLE",
            entrants.key().as_ref(),
            b"raffle"
        ],
        bump = raffle.bump,
        has_one = raffler,
        has_one = entrants,
        constraint = Clock::get().unwrap().unix_timestamp >= raffle.start_time @ RaffleError::NotStarted,
        constraint = Clock::get().unwrap().unix_timestamp < raffle.end_time @ RaffleError::Ended,
    )]
    pub raffle: Box<Account<'info, Raffle>>,

    #[account(
        seeds = [
            b"RAFFLE",
            raffler.authority.as_ref(),
            b"raffler"
        ],
        bump = raffler.bump
    )]
    pub raffler: Box<Account<'info, Raffler>>,

    #[account(mut)]
    pub entrants: Box<Account<'info, Entrants>>,

    #[account(
        mint::decimals = 0,
        constraint = nft_mint.supply == 1 @ RaffleError::TokenNotNFT
    )]
    pub nft_mint: Option<Box<Account<'info, Mint>>>,

    #[account(
        init_if_needed,
        payer = entrant,
        associated_token::mint = nft_mint,
        associated_token::authority = entrant
    )]
    pub nft_source: Option<Box<Account<'info, TokenAccount>>>,

    #[account(
        init_if_needed,
        payer = entrant,
        associated_token::mint = nft_mint,
        associated_token::authority = raffle
    )]
    pub nft_destination: Option<Box<Account<'info, TokenAccount>>>,

    #[account(
        mut,
        seeds = [
            b"metadata",
            Metadata::id().as_ref(),
            nft_mint.as_ref().expect("nft_mint expected if metadata provided").key().as_ref()
        ],
        seeds::program = Metadata::id(),
        bump,
        constraint = nft_metadata.collection.as_ref().unwrap().verified && nft_metadata.collection.as_ref().unwrap().key == match raffle.payment_type {
            PaymentType::Nft { collection } => collection,
            _ => return err!(RaffleError::InvalidCollection)
        } @ RaffleError::InvalidCollection
    )]
    pub nft_metadata: Option<Box<Account<'info, MetadataAccount>>>,
    pub nft_edition: Option<Box<Account<'info, MasterEditionAccount>>>,

    #[account(mut)]
    pub owner_token_record: Option<Box<Account<'info, TokenRecordAccount>>>,
    /// CHECK: this account is initialized in the CPI call
    #[account(mut)]
    pub destination_token_record: Option<AccountInfo<'info>>,

    pub gated_nft_mint: Option<Box<Account<'info, Mint>>>,

    #[account(
        seeds = [
            b"metadata",
            Metadata::id().as_ref(),
            gated_nft_mint.as_ref().unwrap().key().as_ref()
        ],
        seeds::program = Metadata::id(),
        bump,
        constraint = match raffle.gated_collection {
            Option::Some(val) => {
                let coll = gated_nft_metadata.collection.as_ref().expect("Gated NFT collection not included");
                val == coll.key && coll.verified
            },
            Option::None => true
        }
    )]
    pub gated_nft_metadata: Option<Box<Account<'info, MetadataAccount>>>,

    #[account(
        associated_token::mint = gated_nft_mint,
        associated_token::authority = entrant,
        constraint = gated_nft_token.amount == 1 @ RaffleError::GatedRaffle
    )]
    pub gated_nft_token: Option<Box<Account<'info, TokenAccount>>>,

    #[account(mut)]
    pub entrant: Signer<'info>,

    pub token_program: Program<'info, Token>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub system_program: Program<'info, System>,
    pub metadata_program: Program<'info, Metadata>,

    /// CHECK: account checked in CPI
    pub sysvar_instructions: AccountInfo<'info>,
    /// CHECK: account checked in CPI
    pub auth_rules: Option<AccountInfo<'info>>,
    /// CHECK: account checked in CPI
    pub auth_rules_program: Option<AccountInfo<'info>>,
}

impl<'info> BuyTicketSendNft<'info> {
    pub fn transfer_nft(&self) -> Result<()> {
        let metadata_program = &self.metadata_program;
        let token = &self.nft_source.as_ref().unwrap().to_account_info();
        let token_owner = &self.entrant.to_account_info();
        let destination_token = self.nft_destination.as_ref().unwrap().to_account_info();
        let destination_owner = &self.raffle.to_account_info();
        let mint = &self.nft_mint.as_ref().unwrap().to_account_info();
        let metadata = &self.nft_metadata.as_ref().unwrap().to_account_info();
        let edition = &self.nft_edition.as_ref().unwrap().to_account_info();
        let system_program = &self.system_program.to_account_info();
        let sysvar_instructions = &self.sysvar_instructions.to_account_info();
        let spl_token_program = &&self.token_program.to_account_info();
        let spl_ata_program = &self.associated_token_program.to_account_info();
        let auth_rules_program = self.auth_rules_program.as_ref();
        let auth_rules = self.auth_rules.as_ref();
        let token_record = &self
            .owner_token_record
            .as_ref()
            .map(|token_record| token_record.to_account_info());
        let destination_token_record = self.destination_token_record.as_ref();

        let mut cpi_transfer = TransferV1CpiBuilder::new(&metadata_program);

        cpi_transfer
            .token(token)
            .token_owner(token_owner)
            .destination_token(&destination_token)
            .destination_owner(destination_owner)
            .mint(mint)
            .metadata(metadata)
            .edition(Some(edition))
            .authority(token_owner)
            .payer(token_owner)
            .system_program(system_program)
            .sysvar_instructions(sysvar_instructions)
            .spl_token_program(spl_token_program)
            .spl_ata_program(spl_ata_program)
            .authorization_rules_program(auth_rules_program)
            .authorization_rules(auth_rules)
            .token_record(token_record.as_ref())
            .destination_token_record(destination_token_record)
            .amount(1);

        // performs the CPI
        cpi_transfer.invoke()?;
        Ok(())
    }
}

pub fn buy_ticket_send_nft_handler(ctx: Context<BuyTicketSendNft>) -> Result<()> {
    let raffle = &ctx.accounts.raffle;

    if raffle.gated_collection.is_some() {
        require!(
            ctx.accounts.gated_nft_metadata.is_some(),
            RaffleError::GatedRaffle
        )
    }

    require!(raffle.uri.len() == 0, RaffleError::RaffleEnded);
    require!(raffle.randomness.is_none(), RaffleError::RaffleEnded);

    match raffle.payment_type {
        PaymentType::Token {
            token_mint: _,
            ticket_price: _,
        } => {
            return err!(RaffleError::NftInstruction);
        }
        PaymentType::Nft { collection: _ } => {
            if matches!(
                raffle.entry_type,
                EntryType::Burn {
                    withold_burn_proceeds: _
                }
            ) {
                return err!(RaffleError::InvalidInstruction);
            } else {
                ctx.accounts.transfer_nft()?;
            }
        }
        _ => return err!(RaffleError::InvalidInstruction),
    }

    add_entrants(
        &mut ctx.accounts.entrants,
        ctx.accounts.entrant.to_account_info(),
        ctx.accounts.system_program.to_account_info(),
        1,
    )?;

    Ok(())
}
