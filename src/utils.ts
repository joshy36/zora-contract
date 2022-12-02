import { AuctionDetails, txConfig } from './types.js';
import { ethers } from 'ethers';

export async function create(
  contract: ethers.Contract,
  wallet: ethers.Wallet,
  txConfig: txConfig,
  nftContractAddress: string,
  tokenId: number,
  duration: number,
  reservePrice: ethers.BigNumber,
  sellerFundsRecipient: string
): Promise<ethers.Transaction> {
  return await contract
    .connect(wallet)
    .createAuction(
      nftContractAddress,
      tokenId,
      duration,
      reservePrice,
      sellerFundsRecipient,
      10,
      txConfig
    );
}

export async function createBid(
  contract: ethers.Contract,
  wallet: ethers.Wallet,
  txConfig: txConfig,
  nftContractAddress: string,
  tokenId: number,
  bidAmount: string
): Promise<ethers.Transaction> {
  txConfig.value = ethers.utils.parseEther(bidAmount);
  return await contract
    .connect(wallet)
    .createBid(nftContractAddress, tokenId, txConfig);
}

export async function auctionDetails(
  contract: ethers.Contract,
  nftContractAddress: string,
  tokenId: number
): Promise<AuctionDetails> {
  return await contract.auctionForNFT(nftContractAddress, tokenId);
}
