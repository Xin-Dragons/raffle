import * as anchor from "@coral-xyz/anchor"
import { DigitalAsset } from "@metaplex-foundation/mpl-token-metadata"
import { KeypairSigner, PublicKey, generateSigner, sol, publicKey, tokenAmount } from "@metaplex-foundation/umi"
import { assert } from "chai"
import _, { chunk } from "lodash"
import { randomnessService, adminProgram, createNewUser } from "../helper"
import {
  createRaffle,
  buyTicketsToken,
  settleRaffle,
  claimPrize,
  createRaffloor,
  forceSettleRaffle,
} from "../helpers/instructions"
import { findRafflePda, nativeMint, getTokenAccount } from "../helpers/pdas"
import { umi } from "../helpers/umi"
import { TX_FEE, expectFail, assertErrorCode, getTokenAmount, FEES_WALLET, getWinner } from "../helpers/utils"
import { createNft } from "../helpers/create-nft"
import { createToken } from "../helpers/create-token"
import { fromWeb3JsPublicKey } from "@metaplex-foundation/umi-web3js-adapters"

describe("SOL Token raffle", () => {
  let entrants: KeypairSigner
  let raffle: PublicKey
  let authority: KeypairSigner
  let raffler: PublicKey
  let user: KeypairSigner
  let prizeToken: PublicKey
  before(async () => {
    user = await createNewUser()
    ;[authority, raffler] = await createRaffloor("SOL Token Raffle", "sol_token_raffle")
    prizeToken = await createToken(umi, tokenAmount(100, "token", 6).basisPoints, 6, undefined, authority.publicKey)
    entrants = generateSigner(umi)
    raffle = findRafflePda(entrants.publicKey)
  })

  it("can create a new raffle", async () => {
    await createRaffle({
      prizeType: { token: { amount: new anchor.BN(tokenAmount(100, "token", 6).basisPoints.toString()) } },
      authority,
      raffler,
      entrants,
      numTickets: 101,
      tokenMint: nativeMint,
      entryType: {
        spend: {},
      },
      ticketPrice: sol(0.1).basisPoints,
      duration: 60 * 60 * 24,
      prize: prizeToken,
    })

    const acc = await umi.rpc.getBalance(entrants.publicKey)
    console.log(Number(acc.basisPoints) / anchor.web3.LAMPORTS_PER_SOL)
  })

  it("can buy a ticket", async () => {
    const balanceBefore = await umi.rpc.getBalance(user.publicKey)

    await buyTicketsToken(user, raffle, 1)
    const balanceAfter = await umi.rpc.getBalance(user.publicKey)

    const parsedAcc = await adminProgram.account.entrants.fetch(entrants.publicKey)
    const acc = await umi.rpc.getAccount(entrants.publicKey)
    const dataSlice = acc.exists && acc.data.slice(8 + 4 + 4)
    const pks = _.chunk(dataSlice, 32)
      .slice(0, parsedAcc.total)
      .map((pk) => publicKey(new Uint8Array(pk)))

    assert.equal(pks.length, 1, "Expected 1 ticket to have been bought")
    assert.equal(pks[0], user.publicKey, "Expected user wallet to be included in entrants")

    assert.equal(
      balanceAfter.basisPoints,
      balanceBefore.basisPoints - sol(0.1).basisPoints - TX_FEE,
      "Expected to have paid 0.1 sol plus tx fee"
    )
  })

  it("can buy another 100 tickets, totalling 101", async () => {
    const balanceBefore = await umi.rpc.getBalance(user.publicKey)
    await buyTicketsToken(user, raffle, 100)

    const balanceAfter = await umi.rpc.getBalance(user.publicKey)

    const parsedAcc = await adminProgram.account.entrants.fetch(entrants.publicKey)
    const acc = await umi.rpc.getAccount(entrants.publicKey)
    const dataSlice = acc.exists && acc.data.slice(8 + 4 + 4)
    const pks = chunk(dataSlice, 32)
      .slice(0, parsedAcc.total)
      .map((pk) => publicKey(new Uint8Array(pk)))

    assert.equal(pks.length, 101, "Expected 101 tickets to have been bought")

    assert.equal(
      balanceAfter.basisPoints,
      balanceBefore.basisPoints - 100n * sol(0.1).basisPoints - TX_FEE,
      "Expected to have paid for 100 tickets, and paid 1 tx fee"
    )
  })

  it.skip("can settle the raffle", async () => {
    const balanceBefore = await umi.rpc.getBalance(umi.identity.publicKey)
    await settleRaffle(randomnessService, raffle)

    const balanceAfter = await umi.rpc.getBalance(umi.identity.publicKey)

    console.log(
      "cost:",
      Number(balanceBefore.basisPoints - balanceAfter.basisPoints - TX_FEE * 2n) / anchor.web3.LAMPORTS_PER_SOL
    )

    const raffleAcc = await adminProgram.account.raffle.fetch(raffle)

    assert.ok(raffleAcc.randomness, "Expected randomness to be set")
  })

  it("can force settle the raffle", async () => {
    const balanceBefore = await umi.rpc.getBalance(umi.identity.publicKey)
    await forceSettleRaffle(authority, raffle)

    const balanceAfter = await umi.rpc.getBalance(umi.identity.publicKey)

    console.log(
      "cost:",
      Number(balanceBefore.basisPoints - balanceAfter.basisPoints - TX_FEE * 2n) / anchor.web3.LAMPORTS_PER_SOL
    )

    const raffleAcc = await adminProgram.account.raffle.fetch(raffle)

    assert.ok(raffleAcc.randomness, "Expected randomness to be set")
  })

  it("cannot claim with a non winning ticket", async () => {
    const raffleAcc = await adminProgram.account.raffle.fetch(raffle)

    await expectFail(
      () => claimPrize(user, raffle, 1),
      (err) => assertErrorCode(err, "TicketNotWinner")
    )
  })

  it("cannot claim with a winning ticket, if not the winner", async () => {
    const user3 = await createNewUser()
    await expectFail(
      () => claimPrize(user3, raffle),
      (err) => assertErrorCode(err, "OnlyWinnerOrAdminCanSettle")
    )
  })

  it("can claim the prize as the winner", async () => {
    const entrantsAccBal = await umi.rpc.getBalance(entrants.publicKey)
    const tokenAccountSize = (await umi.rpc.getBalance(getTokenAccount(prizeToken, raffle))).basisPoints
    const authBalBefore = await umi.rpc.getBalance(authority.publicKey)
    const feesBalBefore = await umi.rpc.getBalance(FEES_WALLET)
    const payerBalBefore = await umi.rpc.getBalance(user.publicKey)
    const proceeds = await getTokenAmount(nativeMint, raffle)
    const authProceedsBefore = await getTokenAmount(nativeMint, authority.publicKey)
    const feesProceedsBefore = await getTokenAmount(nativeMint, FEES_WALLET)

    await claimPrize(user, raffle)

    const payerBalAfter = await umi.rpc.getBalance(user.publicKey)

    const authBalAfter = await umi.rpc.getBalance(authority.publicKey)
    const feesBalAfter = await umi.rpc.getBalance(FEES_WALLET)
    const tokenBalance = await getTokenAmount(prizeToken, user.publicKey)
    const authProceedsAfter = await getTokenAmount(nativeMint, authority.publicKey)
    const feesProceedsAfter = await getTokenAmount(nativeMint, FEES_WALLET)

    assert.equal(tokenBalance, tokenAmount(100, "token", 6).basisPoints, "Expected winner to have claimed token")

    const raffleAcc = await adminProgram.account.raffle.fetch(raffle)
    assert.ok(raffleAcc.claimed, "Expected prize to be marked as claimed")

    assert.equal(
      authBalAfter.basisPoints - authBalBefore.basisPoints,
      tokenAccountSize * 2n,
      "Expected rent prize custody to be transferred to authority"
    )

    assert.equal(
      feesBalAfter.basisPoints - feesBalBefore.basisPoints,
      entrantsAccBal.basisPoints,
      "Expected entrants rent to be transferred to fees wallet"
    )

    assert.equal(
      authProceedsAfter - authProceedsBefore,
      (proceeds * 9500n) / 10000n,
      "Expected 95% of proceeds to be paid to auth"
    )

    assert.equal(
      feesProceedsAfter - feesProceedsBefore,
      (proceeds * 500n) / 10000n,
      "Expected 5% of proceeds to be paid to auth"
    )

    assert.equal(
      payerBalBefore.basisPoints - payerBalAfter.basisPoints,
      TX_FEE + tokenAccountSize,
      "Expected payer to pay for tx and opening a prize account"
    )
  })
})
