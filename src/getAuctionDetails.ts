import { ethers } from 'ethers';
import { AuctionDetails } from './types.js';

export default async (
  contract: ethers.Contract,
  nftContractAddress: string,
  tokenId: number
): Promise<AuctionDetails> => {
  return await contract.auctionForNFT(nftContractAddress, tokenId);
};
