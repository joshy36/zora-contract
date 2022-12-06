export const contractAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_erc721TransferHelper',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_royaltyEngine',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_protocolFeeSettings',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_weth',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenContract',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'firstBid',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'extended',
        type: 'bool',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'seller',
            type: 'address',
          },
          {
            internalType: 'uint96',
            name: 'reservePrice',
            type: 'uint96',
          },
          {
            internalType: 'address',
            name: 'sellerFundsRecipient',
            type: 'address',
          },
          {
            internalType: 'uint96',
            name: 'highestBid',
            type: 'uint96',
          },
          {
            internalType: 'address',
            name: 'highestBidder',
            type: 'address',
          },
          {
            internalType: 'uint32',
            name: 'duration',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'startTime',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'firstBidTime',
            type: 'uint32',
          },
        ],
        indexed: false,
        internalType: 'struct ReserveAuctionCoreEth.Auction',
        name: 'auction',
        type: 'tuple',
      },
    ],
    name: 'AuctionBid',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenContract',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'seller',
            type: 'address',
          },
          {
            internalType: 'uint96',
            name: 'reservePrice',
            type: 'uint96',
          },
          {
            internalType: 'address',
            name: 'sellerFundsRecipient',
            type: 'address',
          },
          {
            internalType: 'uint96',
            name: 'highestBid',
            type: 'uint96',
          },
          {
            internalType: 'address',
            name: 'highestBidder',
            type: 'address',
          },
          {
            internalType: 'uint32',
            name: 'duration',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'startTime',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'firstBidTime',
            type: 'uint32',
          },
        ],
        indexed: false,
        internalType: 'struct ReserveAuctionCoreEth.Auction',
        name: 'auction',
        type: 'tuple',
      },
    ],
    name: 'AuctionCanceled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenContract',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'seller',
            type: 'address',
          },
          {
            internalType: 'uint96',
            name: 'reservePrice',
            type: 'uint96',
          },
          {
            internalType: 'address',
            name: 'sellerFundsRecipient',
            type: 'address',
          },
          {
            internalType: 'uint96',
            name: 'highestBid',
            type: 'uint96',
          },
          {
            internalType: 'address',
            name: 'highestBidder',
            type: 'address',
          },
          {
            internalType: 'uint32',
            name: 'duration',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'startTime',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'firstBidTime',
            type: 'uint32',
          },
        ],
        indexed: false,
        internalType: 'struct ReserveAuctionCoreEth.Auction',
        name: 'auction',
        type: 'tuple',
      },
    ],
    name: 'AuctionCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenContract',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'seller',
            type: 'address',
          },
          {
            internalType: 'uint96',
            name: 'reservePrice',
            type: 'uint96',
          },
          {
            internalType: 'address',
            name: 'sellerFundsRecipient',
            type: 'address',
          },
          {
            internalType: 'uint96',
            name: 'highestBid',
            type: 'uint96',
          },
          {
            internalType: 'address',
            name: 'highestBidder',
            type: 'address',
          },
          {
            internalType: 'uint32',
            name: 'duration',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'startTime',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'firstBidTime',
            type: 'uint32',
          },
        ],
        indexed: false,
        internalType: 'struct ReserveAuctionCoreEth.Auction',
        name: 'auction',
        type: 'tuple',
      },
    ],
    name: 'AuctionEnded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenContract',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'seller',
            type: 'address',
          },
          {
            internalType: 'uint96',
            name: 'reservePrice',
            type: 'uint96',
          },
          {
            internalType: 'address',
            name: 'sellerFundsRecipient',
            type: 'address',
          },
          {
            internalType: 'uint96',
            name: 'highestBid',
            type: 'uint96',
          },
          {
            internalType: 'address',
            name: 'highestBidder',
            type: 'address',
          },
          {
            internalType: 'uint32',
            name: 'duration',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'startTime',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'firstBidTime',
            type: 'uint32',
          },
        ],
        indexed: false,
        internalType: 'struct ReserveAuctionCoreEth.Auction',
        name: 'auction',
        type: 'tuple',
      },
    ],
    name: 'AuctionReservePriceUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenContract',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'RoyaltyPayout',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenContract',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_payoutCurrency',
        type: 'address',
      },
    ],
    name: '_handleRoyaltyEnginePayout',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'auctionForNFT',
    outputs: [
      {
        internalType: 'address',
        name: 'seller',
        type: 'address',
      },
      {
        internalType: 'uint96',
        name: 'reservePrice',
        type: 'uint96',
      },
      {
        internalType: 'address',
        name: 'sellerFundsRecipient',
        type: 'address',
      },
      {
        internalType: 'uint96',
        name: 'highestBid',
        type: 'uint96',
      },
      {
        internalType: 'address',
        name: 'highestBidder',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'duration',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'startTime',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'firstBidTime',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenContract',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'cancelAuction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenContract',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_duration',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_reservePrice',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_sellerFundsRecipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_startTime',
        type: 'uint256',
      },
    ],
    name: 'createAuction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenContract',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'createBid',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'erc721TransferHelper',
    outputs: [
      {
        internalType: 'contract ERC721TransferHelper',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'registrar',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenContract',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_reservePrice',
        type: 'uint256',
      },
    ],
    name: 'setAuctionReservePrice',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_royaltyEngine',
        type: 'address',
      },
    ],
    name: 'setRoyaltyEngineAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenContract',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'settleAuction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: '_interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
];
