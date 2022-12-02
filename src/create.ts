import { ethers } from 'ethers';

export default async (
  contract: ethers.Contract,
  wallet: ethers.Wallet,
  txConfig,
  contractAddress: string,
  tokenId: number
): Promise<any> => {
  const tx = await contract
    .connect(wallet)
    .createAuction(
      contractAddress,
      tokenId,
      10,
      10,
      contractAddress,
      10,
      txConfig
    );
};
