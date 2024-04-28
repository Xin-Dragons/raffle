export type Raffle = {
  "version": "0.1.0",
  "name": "raffle",
  "instructions": [
    {
      "name": "initProgramConfig",
      "accounts": [
        {
          "name": "programConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "raffleFee",
          "type": "u64"
        },
        {
          "name": "proceedsShare",
          "type": "u16"
        }
      ]
    },
    {
      "name": "updateProgramConfig",
      "accounts": [
        {
          "name": "programConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "raffleFee",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "proceedsShare",
          "type": {
            "option": "u16"
          }
        }
      ]
    },
    {
      "name": "init",
      "accounts": [
        {
          "name": "programConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffler",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "slug",
          "type": "string"
        },
        {
          "name": "logo",
          "type": {
            "option": "string"
          }
        },
        {
          "name": "bg",
          "type": {
            "option": "string"
          }
        }
      ]
    },
    {
      "name": "initRaffle",
      "accounts": [
        {
          "name": "raffler",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "feesWallet",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "feesWalletToken",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "entryCollectionMint",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "treasuryTokenAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "prize",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "prizeToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "prizeCustody",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "prizeType",
          "type": {
            "defined": "PrizeType"
          }
        },
        {
          "name": "numTickets",
          "type": {
            "option": "u32"
          }
        },
        {
          "name": "entryType",
          "type": {
            "defined": "EntryType"
          }
        },
        {
          "name": "ticketPrice",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "startTime",
          "type": {
            "option": "i64"
          }
        },
        {
          "name": "duration",
          "type": "i64"
        },
        {
          "name": "isGated",
          "type": "bool"
        },
        {
          "name": "maxEntrantsPct",
          "type": {
            "option": "u16"
          }
        }
      ]
    },
    {
      "name": "deleteRaffle",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "buyTicketsToken",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffler",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "tokenSource",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "tokenDestination",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "gatedNftMint",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "gatedNftMetadata",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "gatedNftToken",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "entrant",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u32"
        }
      ]
    },
    {
      "name": "buyTicketSendNft",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffler",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "nftSource",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "nftDestination",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "nftEdition",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "ownerTokenRecord",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "destinationTokenRecord",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "gatedNftMint",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "gatedNftMetadata",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "gatedNftToken",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "entrant",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authRules",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "authRulesProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        }
      ],
      "args": []
    },
    {
      "name": "buyTicketBurnNft",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffler",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "nftSource",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "nativeMint",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "tokenDestination",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "nftEdition",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "nftMasterEdition",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "nftCollection",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "nftCollectionMetadata",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "ownerTokenRecord",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "destinationTokenRecord",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "gatedNftMint",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "gatedNftMetadata",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "gatedNftToken",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "entrant",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authRules",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "authRulesProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        }
      ],
      "args": []
    },
    {
      "name": "drawWinner",
      "accounts": [
        {
          "name": "randomnessService",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The Solana Randomness Service program."
          ]
        },
        {
          "name": "randomnessRequest",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "The account that will be created on-chain to hold the randomness request.",
            "Used by the off-chain oracle to pickup the request and fulfill it."
          ]
        },
        {
          "name": "randomnessEscrow",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The TokenAccount that will store the funds for the randomness request."
          ]
        },
        {
          "name": "randomnessState",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The randomness service's state account. Responsible for storing the",
            "reward escrow and the cost per random byte."
          ]
        },
        {
          "name": "randomnessMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The token mint to use for paying for randomness requests."
          ]
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "The account that will pay for the randomness request."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The Solana System program. Used to allocate space on-chain for the randomness_request account."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The Solana Token program. Used to transfer funds to the randomness escrow."
          ]
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The Solana Associated Token program. Used to create the TokenAccount for the randomness escrow."
          ]
        }
      ],
      "args": [
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "priorityFee",
          "type": {
            "option": "u64"
          }
        }
      ]
    },
    {
      "name": "consumeRandomness",
      "accounts": [
        {
          "name": "randomnessState",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "request",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "result",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "claimPrize",
      "accounts": [
        {
          "name": "programConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raffler",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feesWallet",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "feesWalletToken",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "proceedsMint",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "proceedsSource",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "proceedsDestination",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "prize",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "prizeCustody",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "prizeDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "winner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authRules",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "authRulesProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        }
      ],
      "args": [
        {
          "name": "ticketIndex",
          "type": "u32"
        }
      ]
    },
    {
      "name": "setSlugs",
      "accounts": [
        {
          "name": "programConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "slugs",
          "type": {
            "vec": "string"
          }
        }
      ]
    },
    {
      "name": "collectNft",
      "accounts": [
        {
          "name": "raffler",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftEdition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sourceTokenRecord",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "destinationTokenRecord",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authRules",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "authRulesProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        }
      ],
      "args": []
    },
    {
      "name": "recoverNft",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftEdition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sourceTokenRecord",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "destinationTokenRecord",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "destination",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authRules",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "authRulesProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        }
      ],
      "args": []
    },
    {
      "name": "setEntrantsUri",
      "accounts": [
        {
          "name": "raffler",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "uri",
          "type": "string"
        }
      ]
    },
    {
      "name": "deleteRaffler",
      "accounts": [
        {
          "name": "programConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffler",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "forceSettle",
      "accounts": [
        {
          "name": "raffler",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recentBlockhashes",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "uri",
          "type": {
            "option": "string"
          }
        }
      ]
    },
    {
      "name": "updateRaffler",
      "accounts": [
        {
          "name": "raffler",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "staker",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        }
      ],
      "args": [
        {
          "name": "name",
          "type": {
            "option": "string"
          }
        },
        {
          "name": "logo",
          "type": {
            "option": "string"
          }
        },
        {
          "name": "bg",
          "type": {
            "option": "string"
          }
        },
        {
          "name": "unlinkStaker",
          "type": "bool"
        }
      ]
    },
    {
      "name": "toggleActive",
      "accounts": [
        {
          "name": "raffler",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "isActive",
          "type": "bool"
        }
      ]
    },
    {
      "name": "withdrawRent",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffler",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "claimer",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "entrants",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "total",
            "docs": [
              "the current number of entrants"
            ],
            "type": "u32"
          },
          {
            "name": "max",
            "docs": [
              "the max nuber of entrants"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "programConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "raffleFee",
            "docs": [
              "the amount in sol to set up a raffle (8)"
            ],
            "type": "u64"
          },
          {
            "name": "proceedsShare",
            "docs": [
              "the percentage in basis points of proceeds share (2)"
            ],
            "type": "u16"
          },
          {
            "name": "slugs",
            "docs": [
              "a vector storing all slugs (4)"
            ],
            "type": {
              "vec": "string"
            }
          },
          {
            "name": "bump",
            "docs": [
              "the bump of the program_config account (1)"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "raffle",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "raffler",
            "docs": [
              "raffler account that owns this raffle (32)"
            ],
            "type": "publicKey"
          },
          {
            "name": "entrants",
            "docs": [
              "the account the holds the entrants array (32)"
            ],
            "type": "publicKey"
          },
          {
            "name": "prize",
            "docs": [
              "mint address of the prize 32"
            ],
            "type": "publicKey"
          },
          {
            "name": "prizeType",
            "docs": [
              "type of prize (1 + 8)"
            ],
            "type": {
              "defined": "PrizeType"
            }
          },
          {
            "name": "randomness",
            "docs": [
              "randomness from VRF (1 + 32)"
            ],
            "type": {
              "option": {
                "array": [
                  "u8",
                  32
                ]
              }
            }
          },
          {
            "name": "entryType",
            "docs": [
              "type of entry - Token or NFT (1 + 8)"
            ],
            "type": {
              "defined": "EntryType"
            }
          },
          {
            "name": "paymentType",
            "docs": [
              "how do entrants pay for entries (1 + 32 + 8)"
            ],
            "type": {
              "defined": "PaymentType"
            }
          },
          {
            "name": "gatedCollection",
            "docs": [
              "gate to only holders of a specific collection (1 + 32)"
            ],
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "startTime",
            "docs": [
              "timestamp of raffle start (8)"
            ],
            "type": "i64"
          },
          {
            "name": "endTime",
            "docs": [
              "timestamp of raffle end (8)"
            ],
            "type": "i64"
          },
          {
            "name": "claimed",
            "docs": [
              "has the prize been claimed? (1)"
            ],
            "type": "bool"
          },
          {
            "name": "maxEntrantPct",
            "docs": [
              "basis points of the maximum amount of tickets a single user can buy (2)"
            ],
            "type": "u16"
          },
          {
            "name": "uri",
            "docs": [
              "uri link to offchain entrants log (4 + 63)"
            ],
            "type": "string"
          },
          {
            "name": "bump",
            "docs": [
              "bump for the raffle PDA (1)"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "raffler",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "The authority of the raffler (32)"
            ],
            "type": "publicKey"
          },
          {
            "name": "slug",
            "docs": [
              "slug, max 50 chars (4 + 50)"
            ],
            "type": "string"
          },
          {
            "name": "name",
            "docs": [
              "name of the project, max 50 chars (4 + 50)"
            ],
            "type": "string"
          },
          {
            "name": "treasury",
            "docs": [
              "receives the raffle proceeds (32)"
            ],
            "type": "publicKey"
          },
          {
            "name": "customDomain",
            "docs": [
              "optional custom domain, max 50 chars (1 + 4 + 50),"
            ],
            "type": {
              "option": "string"
            }
          },
          {
            "name": "isActive",
            "docs": [
              "Raffle status (1)"
            ],
            "type": "bool"
          },
          {
            "name": "logo",
            "docs": [
              "optional logo (1 + 4 + 52)"
            ],
            "type": {
              "option": "string"
            }
          },
          {
            "name": "bg",
            "docs": [
              "optional bg (1 + 4 + 52)"
            ],
            "type": {
              "option": "string"
            }
          },
          {
            "name": "staker",
            "docs": [
              "pubkey of linked staker app (1 + 32)"
            ],
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "bump",
            "docs": [
              "bump (1)"
            ],
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "EntryType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Spend"
          },
          {
            "name": "Burn",
            "fields": [
              {
                "name": "witholdBurnProceeds",
                "type": "bool"
              }
            ]
          },
          {
            "name": "Stake",
            "fields": [
              {
                "name": "minimumPeriod",
                "type": "i64"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "PaymentType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Token",
            "fields": [
              {
                "name": "tokenMint",
                "type": "publicKey"
              },
              {
                "name": "ticketPrice",
                "type": "u64"
              }
            ]
          },
          {
            "name": "Nft",
            "fields": [
              {
                "name": "collection",
                "type": "publicKey"
              }
            ]
          },
          {
            "name": "Cnft",
            "fields": [
              {
                "name": "collection",
                "type": "publicKey"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "PrizeType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Nft"
          },
          {
            "name": "Token",
            "fields": [
              {
                "name": "amount",
                "type": "u64"
              }
            ]
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unauthorized",
      "msg": "The signer is not permitted to perform this action"
    },
    {
      "code": 6001,
      "name": "TokenNotNFT",
      "msg": "The provided token is not an NFT"
    },
    {
      "code": 6002,
      "name": "RaffleTooLong",
      "msg": "The max duration for a raffle is 30 days"
    },
    {
      "code": 6003,
      "name": "RaffleTooShort",
      "msg": "The min duration for a raffle is 5 minutes"
    },
    {
      "code": 6004,
      "name": "InvalidStartTime",
      "msg": "Start date must be in the future, or leave blank for now"
    },
    {
      "code": 6005,
      "name": "TooManyTickets",
      "msg": "The max tickets for a raffle is 65,535"
    },
    {
      "code": 6006,
      "name": "SoldOut",
      "msg": "No tickets left for this raffle!"
    },
    {
      "code": 6007,
      "name": "NotStarted",
      "msg": "Raffle has not started yet"
    },
    {
      "code": 6008,
      "name": "Ended",
      "msg": "Raffle has ended"
    },
    {
      "code": 6009,
      "name": "ProgramAddError",
      "msg": "Error adding numbers"
    },
    {
      "code": 6010,
      "name": "ProgramSubError",
      "msg": "Error subtracting numbers"
    },
    {
      "code": 6011,
      "name": "ProgramMulError",
      "msg": "Error multiplying numbers"
    },
    {
      "code": 6012,
      "name": "InvalidTokenMint",
      "msg": "Invalid token mint provided for this raffle"
    },
    {
      "code": 6013,
      "name": "TokenMintUnexpected",
      "msg": "Unexpected token_mint account"
    },
    {
      "code": 6014,
      "name": "NftUnexpected",
      "msg": "Unexpected NFT mint account"
    },
    {
      "code": 6015,
      "name": "TokenUnexpected",
      "msg": "Unexpected token mint account"
    },
    {
      "code": 6016,
      "name": "AdminOnly",
      "msg": "This is an admin only function"
    },
    {
      "code": 6017,
      "name": "InvalidAccountData",
      "msg": "Invalid account data"
    },
    {
      "code": 6018,
      "name": "SlugTooLong",
      "msg": "Slug can only be a maximum of 50 chars"
    },
    {
      "code": 6019,
      "name": "SlugRequired",
      "msg": "Slug is required"
    },
    {
      "code": 6020,
      "name": "NameTooLong",
      "msg": "Project name can only be a maximum of 50 chars"
    },
    {
      "code": 6021,
      "name": "NameRequired",
      "msg": "Project name is required"
    },
    {
      "code": 6022,
      "name": "InvalidSlug",
      "msg": "Slug can only contain valid URL slug chars"
    },
    {
      "code": 6023,
      "name": "SlugExists",
      "msg": "Slug already exists"
    },
    {
      "code": 6024,
      "name": "WinnerAlreadyDrawn",
      "msg": "Winner already drawn"
    },
    {
      "code": 6025,
      "name": "WinnerNotDrawn",
      "msg": "Winner not drawn"
    },
    {
      "code": 6026,
      "name": "OnlyAdminCanClaim",
      "msg": "Only the raffle admin can claim prize from raffle with no entries"
    },
    {
      "code": 6027,
      "name": "NotWinner",
      "msg": "Only the winner can claim"
    },
    {
      "code": 6028,
      "name": "TicketNotWinner",
      "msg": "This ticket is not the winning ticket"
    },
    {
      "code": 6029,
      "name": "AlreadyClaimed",
      "msg": "This prize has already been claimed"
    },
    {
      "code": 6030,
      "name": "InvalidCollection",
      "msg": "Invalid collection. Only MCC can be used"
    },
    {
      "code": 6031,
      "name": "OnlyWinnerOrAdminCanSettle",
      "msg": "Only the winner or raffle admin can settle the raffle"
    },
    {
      "code": 6032,
      "name": "TreasuryTokenAccountNeeded",
      "msg": "Treasury token accout must be provided"
    },
    {
      "code": 6033,
      "name": "NftInstruction",
      "msg": "This instruction can only be used with NFT payment type raffles"
    },
    {
      "code": 6034,
      "name": "TokenInstruction",
      "msg": "This instruction can only be used with token payment type raffles"
    },
    {
      "code": 6035,
      "name": "RaffleNotEnded",
      "msg": "This raffle has not ended yet"
    },
    {
      "code": 6036,
      "name": "NotDrawn",
      "msg": "This raffle has not been drawn yet"
    },
    {
      "code": 6037,
      "name": "GatedRaffle",
      "msg": "Entrant doesn't hold a required NFT to enter this raffle"
    },
    {
      "code": 6038,
      "name": "TicketPriceRequired",
      "msg": "Ticket price required for token raffle"
    },
    {
      "code": 6039,
      "name": "UnexpectedEntryCollectionMint",
      "msg": "Unexpected entry collection mint for token raffle"
    },
    {
      "code": 6040,
      "name": "ExpectedEntryCollectionMint",
      "msg": "Expected entry collection mint for NFT raffle"
    },
    {
      "code": 6041,
      "name": "UnexpectedTicketPrice",
      "msg": "Unexpected ticket price for NFT raffle"
    },
    {
      "code": 6042,
      "name": "InvalidInstruction",
      "msg": "This instruction cannot be used for this raffle"
    },
    {
      "code": 6043,
      "name": "BurnProceedsToken",
      "msg": "Cannot withold burn proceeds for a token raffle"
    },
    {
      "code": 6044,
      "name": "BurnProceedsNotBurn",
      "msg": "Cannot withold burn proceeds is not set to burn"
    },
    {
      "code": 6045,
      "name": "WitholdBurnTokenVaultNeeded",
      "msg": "token_vault required if witholding burn proceeds"
    },
    {
      "code": 6046,
      "name": "CannotBurnSOL",
      "msg": "cannot set up a burn raffle with SOL"
    },
    {
      "code": 6047,
      "name": "UriRequired",
      "msg": "URI to offchain log is required when concluding a raffle"
    },
    {
      "code": 6048,
      "name": "UnexpectedStakerAccount",
      "msg": "Staker account unexpected when unlinking"
    },
    {
      "code": 6049,
      "name": "LogoTooLong",
      "msg": "Logo URI max length 63"
    },
    {
      "code": 6050,
      "name": "BgTooLong",
      "msg": "Bg URI max length 63"
    },
    {
      "code": 6051,
      "name": "AdminOrSystemAdmin",
      "msg": "Only the raffle admin or system admin can perform this action"
    },
    {
      "code": 6052,
      "name": "EntrantsNotStored",
      "msg": "Cannot be force drawn before being drawn"
    },
    {
      "code": 6053,
      "name": "RaffleEnded",
      "msg": "This raffle has ended"
    }
  ]
};

export const IDL: Raffle = {
  "version": "0.1.0",
  "name": "raffle",
  "instructions": [
    {
      "name": "initProgramConfig",
      "accounts": [
        {
          "name": "programConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "raffleFee",
          "type": "u64"
        },
        {
          "name": "proceedsShare",
          "type": "u16"
        }
      ]
    },
    {
      "name": "updateProgramConfig",
      "accounts": [
        {
          "name": "programConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "raffleFee",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "proceedsShare",
          "type": {
            "option": "u16"
          }
        }
      ]
    },
    {
      "name": "init",
      "accounts": [
        {
          "name": "programConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffler",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "staker",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "slug",
          "type": "string"
        },
        {
          "name": "logo",
          "type": {
            "option": "string"
          }
        },
        {
          "name": "bg",
          "type": {
            "option": "string"
          }
        }
      ]
    },
    {
      "name": "initRaffle",
      "accounts": [
        {
          "name": "raffler",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "feesWallet",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "feesWalletToken",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "entryCollectionMint",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "treasuryTokenAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "prize",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "prizeToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "prizeCustody",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "prizeType",
          "type": {
            "defined": "PrizeType"
          }
        },
        {
          "name": "numTickets",
          "type": {
            "option": "u32"
          }
        },
        {
          "name": "entryType",
          "type": {
            "defined": "EntryType"
          }
        },
        {
          "name": "ticketPrice",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "startTime",
          "type": {
            "option": "i64"
          }
        },
        {
          "name": "duration",
          "type": "i64"
        },
        {
          "name": "isGated",
          "type": "bool"
        },
        {
          "name": "maxEntrantsPct",
          "type": {
            "option": "u16"
          }
        }
      ]
    },
    {
      "name": "deleteRaffle",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "buyTicketsToken",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffler",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "tokenSource",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "tokenDestination",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "gatedNftMint",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "gatedNftMetadata",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "gatedNftToken",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "entrant",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u32"
        }
      ]
    },
    {
      "name": "buyTicketSendNft",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffler",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "nftSource",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "nftDestination",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "nftEdition",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "ownerTokenRecord",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "destinationTokenRecord",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "gatedNftMint",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "gatedNftMetadata",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "gatedNftToken",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "entrant",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authRules",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "authRulesProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        }
      ],
      "args": []
    },
    {
      "name": "buyTicketBurnNft",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffler",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "nftSource",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "nativeMint",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "tokenDestination",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "nftEdition",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "nftMasterEdition",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "nftCollection",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "nftCollectionMetadata",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "ownerTokenRecord",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "destinationTokenRecord",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "gatedNftMint",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "gatedNftMetadata",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "gatedNftToken",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "entrant",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authRules",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "authRulesProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        }
      ],
      "args": []
    },
    {
      "name": "drawWinner",
      "accounts": [
        {
          "name": "randomnessService",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The Solana Randomness Service program."
          ]
        },
        {
          "name": "randomnessRequest",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "The account that will be created on-chain to hold the randomness request.",
            "Used by the off-chain oracle to pickup the request and fulfill it."
          ]
        },
        {
          "name": "randomnessEscrow",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The TokenAccount that will store the funds for the randomness request."
          ]
        },
        {
          "name": "randomnessState",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The randomness service's state account. Responsible for storing the",
            "reward escrow and the cost per random byte."
          ]
        },
        {
          "name": "randomnessMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The token mint to use for paying for randomness requests."
          ]
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "The account that will pay for the randomness request."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The Solana System program. Used to allocate space on-chain for the randomness_request account."
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The Solana Token program. Used to transfer funds to the randomness escrow."
          ]
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The Solana Associated Token program. Used to create the TokenAccount for the randomness escrow."
          ]
        }
      ],
      "args": [
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "priorityFee",
          "type": {
            "option": "u64"
          }
        }
      ]
    },
    {
      "name": "consumeRandomness",
      "accounts": [
        {
          "name": "randomnessState",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "request",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "result",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "claimPrize",
      "accounts": [
        {
          "name": "programConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raffler",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feesWallet",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "feesWalletToken",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "proceedsMint",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "proceedsSource",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "proceedsDestination",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "prize",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "prizeCustody",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "prizeDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "winner",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authRules",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "authRulesProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        }
      ],
      "args": [
        {
          "name": "ticketIndex",
          "type": "u32"
        }
      ]
    },
    {
      "name": "setSlugs",
      "accounts": [
        {
          "name": "programConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "slugs",
          "type": {
            "vec": "string"
          }
        }
      ]
    },
    {
      "name": "collectNft",
      "accounts": [
        {
          "name": "raffler",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftEdition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sourceTokenRecord",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "destinationTokenRecord",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authRules",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "authRulesProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        }
      ],
      "args": []
    },
    {
      "name": "recoverNft",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftSource",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftEdition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sourceTokenRecord",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "destinationTokenRecord",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "destination",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarInstructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authRules",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "authRulesProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        }
      ],
      "args": []
    },
    {
      "name": "setEntrantsUri",
      "accounts": [
        {
          "name": "raffler",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "uri",
          "type": "string"
        }
      ]
    },
    {
      "name": "deleteRaffler",
      "accounts": [
        {
          "name": "programConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffler",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "forceSettle",
      "accounts": [
        {
          "name": "raffler",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recentBlockhashes",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "uri",
          "type": {
            "option": "string"
          }
        }
      ]
    },
    {
      "name": "updateRaffler",
      "accounts": [
        {
          "name": "raffler",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "staker",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        }
      ],
      "args": [
        {
          "name": "name",
          "type": {
            "option": "string"
          }
        },
        {
          "name": "logo",
          "type": {
            "option": "string"
          }
        },
        {
          "name": "bg",
          "type": {
            "option": "string"
          }
        },
        {
          "name": "unlinkStaker",
          "type": "bool"
        }
      ]
    },
    {
      "name": "toggleActive",
      "accounts": [
        {
          "name": "raffler",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "isActive",
          "type": "bool"
        }
      ]
    },
    {
      "name": "withdrawRent",
      "accounts": [
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffler",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "entrants",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "claimer",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "entrants",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "total",
            "docs": [
              "the current number of entrants"
            ],
            "type": "u32"
          },
          {
            "name": "max",
            "docs": [
              "the max nuber of entrants"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "programConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "raffleFee",
            "docs": [
              "the amount in sol to set up a raffle (8)"
            ],
            "type": "u64"
          },
          {
            "name": "proceedsShare",
            "docs": [
              "the percentage in basis points of proceeds share (2)"
            ],
            "type": "u16"
          },
          {
            "name": "slugs",
            "docs": [
              "a vector storing all slugs (4)"
            ],
            "type": {
              "vec": "string"
            }
          },
          {
            "name": "bump",
            "docs": [
              "the bump of the program_config account (1)"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "raffle",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "raffler",
            "docs": [
              "raffler account that owns this raffle (32)"
            ],
            "type": "publicKey"
          },
          {
            "name": "entrants",
            "docs": [
              "the account the holds the entrants array (32)"
            ],
            "type": "publicKey"
          },
          {
            "name": "prize",
            "docs": [
              "mint address of the prize 32"
            ],
            "type": "publicKey"
          },
          {
            "name": "prizeType",
            "docs": [
              "type of prize (1 + 8)"
            ],
            "type": {
              "defined": "PrizeType"
            }
          },
          {
            "name": "randomness",
            "docs": [
              "randomness from VRF (1 + 32)"
            ],
            "type": {
              "option": {
                "array": [
                  "u8",
                  32
                ]
              }
            }
          },
          {
            "name": "entryType",
            "docs": [
              "type of entry - Token or NFT (1 + 8)"
            ],
            "type": {
              "defined": "EntryType"
            }
          },
          {
            "name": "paymentType",
            "docs": [
              "how do entrants pay for entries (1 + 32 + 8)"
            ],
            "type": {
              "defined": "PaymentType"
            }
          },
          {
            "name": "gatedCollection",
            "docs": [
              "gate to only holders of a specific collection (1 + 32)"
            ],
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "startTime",
            "docs": [
              "timestamp of raffle start (8)"
            ],
            "type": "i64"
          },
          {
            "name": "endTime",
            "docs": [
              "timestamp of raffle end (8)"
            ],
            "type": "i64"
          },
          {
            "name": "claimed",
            "docs": [
              "has the prize been claimed? (1)"
            ],
            "type": "bool"
          },
          {
            "name": "maxEntrantPct",
            "docs": [
              "basis points of the maximum amount of tickets a single user can buy (2)"
            ],
            "type": "u16"
          },
          {
            "name": "uri",
            "docs": [
              "uri link to offchain entrants log (4 + 63)"
            ],
            "type": "string"
          },
          {
            "name": "bump",
            "docs": [
              "bump for the raffle PDA (1)"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "raffler",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "The authority of the raffler (32)"
            ],
            "type": "publicKey"
          },
          {
            "name": "slug",
            "docs": [
              "slug, max 50 chars (4 + 50)"
            ],
            "type": "string"
          },
          {
            "name": "name",
            "docs": [
              "name of the project, max 50 chars (4 + 50)"
            ],
            "type": "string"
          },
          {
            "name": "treasury",
            "docs": [
              "receives the raffle proceeds (32)"
            ],
            "type": "publicKey"
          },
          {
            "name": "customDomain",
            "docs": [
              "optional custom domain, max 50 chars (1 + 4 + 50),"
            ],
            "type": {
              "option": "string"
            }
          },
          {
            "name": "isActive",
            "docs": [
              "Raffle status (1)"
            ],
            "type": "bool"
          },
          {
            "name": "logo",
            "docs": [
              "optional logo (1 + 4 + 52)"
            ],
            "type": {
              "option": "string"
            }
          },
          {
            "name": "bg",
            "docs": [
              "optional bg (1 + 4 + 52)"
            ],
            "type": {
              "option": "string"
            }
          },
          {
            "name": "staker",
            "docs": [
              "pubkey of linked staker app (1 + 32)"
            ],
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "bump",
            "docs": [
              "bump (1)"
            ],
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "EntryType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Spend"
          },
          {
            "name": "Burn",
            "fields": [
              {
                "name": "witholdBurnProceeds",
                "type": "bool"
              }
            ]
          },
          {
            "name": "Stake",
            "fields": [
              {
                "name": "minimumPeriod",
                "type": "i64"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "PaymentType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Token",
            "fields": [
              {
                "name": "tokenMint",
                "type": "publicKey"
              },
              {
                "name": "ticketPrice",
                "type": "u64"
              }
            ]
          },
          {
            "name": "Nft",
            "fields": [
              {
                "name": "collection",
                "type": "publicKey"
              }
            ]
          },
          {
            "name": "Cnft",
            "fields": [
              {
                "name": "collection",
                "type": "publicKey"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "PrizeType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Nft"
          },
          {
            "name": "Token",
            "fields": [
              {
                "name": "amount",
                "type": "u64"
              }
            ]
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unauthorized",
      "msg": "The signer is not permitted to perform this action"
    },
    {
      "code": 6001,
      "name": "TokenNotNFT",
      "msg": "The provided token is not an NFT"
    },
    {
      "code": 6002,
      "name": "RaffleTooLong",
      "msg": "The max duration for a raffle is 30 days"
    },
    {
      "code": 6003,
      "name": "RaffleTooShort",
      "msg": "The min duration for a raffle is 5 minutes"
    },
    {
      "code": 6004,
      "name": "InvalidStartTime",
      "msg": "Start date must be in the future, or leave blank for now"
    },
    {
      "code": 6005,
      "name": "TooManyTickets",
      "msg": "The max tickets for a raffle is 65,535"
    },
    {
      "code": 6006,
      "name": "SoldOut",
      "msg": "No tickets left for this raffle!"
    },
    {
      "code": 6007,
      "name": "NotStarted",
      "msg": "Raffle has not started yet"
    },
    {
      "code": 6008,
      "name": "Ended",
      "msg": "Raffle has ended"
    },
    {
      "code": 6009,
      "name": "ProgramAddError",
      "msg": "Error adding numbers"
    },
    {
      "code": 6010,
      "name": "ProgramSubError",
      "msg": "Error subtracting numbers"
    },
    {
      "code": 6011,
      "name": "ProgramMulError",
      "msg": "Error multiplying numbers"
    },
    {
      "code": 6012,
      "name": "InvalidTokenMint",
      "msg": "Invalid token mint provided for this raffle"
    },
    {
      "code": 6013,
      "name": "TokenMintUnexpected",
      "msg": "Unexpected token_mint account"
    },
    {
      "code": 6014,
      "name": "NftUnexpected",
      "msg": "Unexpected NFT mint account"
    },
    {
      "code": 6015,
      "name": "TokenUnexpected",
      "msg": "Unexpected token mint account"
    },
    {
      "code": 6016,
      "name": "AdminOnly",
      "msg": "This is an admin only function"
    },
    {
      "code": 6017,
      "name": "InvalidAccountData",
      "msg": "Invalid account data"
    },
    {
      "code": 6018,
      "name": "SlugTooLong",
      "msg": "Slug can only be a maximum of 50 chars"
    },
    {
      "code": 6019,
      "name": "SlugRequired",
      "msg": "Slug is required"
    },
    {
      "code": 6020,
      "name": "NameTooLong",
      "msg": "Project name can only be a maximum of 50 chars"
    },
    {
      "code": 6021,
      "name": "NameRequired",
      "msg": "Project name is required"
    },
    {
      "code": 6022,
      "name": "InvalidSlug",
      "msg": "Slug can only contain valid URL slug chars"
    },
    {
      "code": 6023,
      "name": "SlugExists",
      "msg": "Slug already exists"
    },
    {
      "code": 6024,
      "name": "WinnerAlreadyDrawn",
      "msg": "Winner already drawn"
    },
    {
      "code": 6025,
      "name": "WinnerNotDrawn",
      "msg": "Winner not drawn"
    },
    {
      "code": 6026,
      "name": "OnlyAdminCanClaim",
      "msg": "Only the raffle admin can claim prize from raffle with no entries"
    },
    {
      "code": 6027,
      "name": "NotWinner",
      "msg": "Only the winner can claim"
    },
    {
      "code": 6028,
      "name": "TicketNotWinner",
      "msg": "This ticket is not the winning ticket"
    },
    {
      "code": 6029,
      "name": "AlreadyClaimed",
      "msg": "This prize has already been claimed"
    },
    {
      "code": 6030,
      "name": "InvalidCollection",
      "msg": "Invalid collection. Only MCC can be used"
    },
    {
      "code": 6031,
      "name": "OnlyWinnerOrAdminCanSettle",
      "msg": "Only the winner or raffle admin can settle the raffle"
    },
    {
      "code": 6032,
      "name": "TreasuryTokenAccountNeeded",
      "msg": "Treasury token accout must be provided"
    },
    {
      "code": 6033,
      "name": "NftInstruction",
      "msg": "This instruction can only be used with NFT payment type raffles"
    },
    {
      "code": 6034,
      "name": "TokenInstruction",
      "msg": "This instruction can only be used with token payment type raffles"
    },
    {
      "code": 6035,
      "name": "RaffleNotEnded",
      "msg": "This raffle has not ended yet"
    },
    {
      "code": 6036,
      "name": "NotDrawn",
      "msg": "This raffle has not been drawn yet"
    },
    {
      "code": 6037,
      "name": "GatedRaffle",
      "msg": "Entrant doesn't hold a required NFT to enter this raffle"
    },
    {
      "code": 6038,
      "name": "TicketPriceRequired",
      "msg": "Ticket price required for token raffle"
    },
    {
      "code": 6039,
      "name": "UnexpectedEntryCollectionMint",
      "msg": "Unexpected entry collection mint for token raffle"
    },
    {
      "code": 6040,
      "name": "ExpectedEntryCollectionMint",
      "msg": "Expected entry collection mint for NFT raffle"
    },
    {
      "code": 6041,
      "name": "UnexpectedTicketPrice",
      "msg": "Unexpected ticket price for NFT raffle"
    },
    {
      "code": 6042,
      "name": "InvalidInstruction",
      "msg": "This instruction cannot be used for this raffle"
    },
    {
      "code": 6043,
      "name": "BurnProceedsToken",
      "msg": "Cannot withold burn proceeds for a token raffle"
    },
    {
      "code": 6044,
      "name": "BurnProceedsNotBurn",
      "msg": "Cannot withold burn proceeds is not set to burn"
    },
    {
      "code": 6045,
      "name": "WitholdBurnTokenVaultNeeded",
      "msg": "token_vault required if witholding burn proceeds"
    },
    {
      "code": 6046,
      "name": "CannotBurnSOL",
      "msg": "cannot set up a burn raffle with SOL"
    },
    {
      "code": 6047,
      "name": "UriRequired",
      "msg": "URI to offchain log is required when concluding a raffle"
    },
    {
      "code": 6048,
      "name": "UnexpectedStakerAccount",
      "msg": "Staker account unexpected when unlinking"
    },
    {
      "code": 6049,
      "name": "LogoTooLong",
      "msg": "Logo URI max length 63"
    },
    {
      "code": 6050,
      "name": "BgTooLong",
      "msg": "Bg URI max length 63"
    },
    {
      "code": 6051,
      "name": "AdminOrSystemAdmin",
      "msg": "Only the raffle admin or system admin can perform this action"
    },
    {
      "code": 6052,
      "name": "EntrantsNotStored",
      "msg": "Cannot be force drawn before being drawn"
    },
    {
      "code": 6053,
      "name": "RaffleEnded",
      "msg": "This raffle has ended"
    }
  ]
};
