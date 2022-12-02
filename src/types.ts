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
  value: ethers.BigNumber;
  gasLimit: number;
  maxFeePerGas: ethers.BigNumber;
  maxPriorityFeePerGas: ethers.BigNumber;
};

export type AuctionDetails = {
  seller: string;
  reservePrice: ethers.BigNumber;
  sellerFundsRecipient: string;
  highestBid: ethers.BigNumber;
  highestBidder: number;
  duration: number;
  startTime: number;
  firstBidTime: number;
};
