import { ethers } from 'ethers';

export type Artifact = {
  contractName: string;
  sourceName: string;
  abi: any;
  bytecode: string;
  deployedBytecode: string;
  linkReferences: object;
  deployedLinkReferences: object;
};

export type txConfig = {
  gasLimit: number;
  maxFeePerGas: ethers.BigNumber;
  maxPriorityFeePerGas: ethers.BigNumber;
};

export type AuctionDetails = {
  seller: string;
  reservePrice: number;
  sellerFundsRecipient: string;
  highestBid: number;
  highestBidder: number;
  duration: number;
  startTime: number;
  firstBidTime: number;
};
