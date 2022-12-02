import { txConfig } from './types.js';
import { ethers } from 'ethers';

export default async (
  contract: ethers.Contract,
  wallet: ethers.Wallet,
  txConfig: txConfig,
  nftContractAddress: string,
  tokenId: number
): Promise<ethers.Transaction> => {
  return await contract
    .connect(wallet)
    .createAuction(
      nftContractAddress,
      tokenId,
      10,
      10,
      nftContractAddress,
      10,
      txConfig
    );
};
