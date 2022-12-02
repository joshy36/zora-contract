import abi from './ReserveAuctionCoreEth.json' assert { type: 'json' };
import { Artifact, txConfig } from './types.js';
import { ethers, Wallet } from 'ethers';

import * as dotenv from 'dotenv';
dotenv.config();

const { PRIVATE_KEY, ALCHEMY_API_KEY } = process.env;

const contractAddress = '0x2506D9F5A2b0E1A2619bCCe01CD3e7C289A13163';
const provider = new ethers.providers.JsonRpcProvider(
  `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`
);
const wallet = new Wallet(PRIVATE_KEY, provider);
const contractAbi = abi as unknown as Artifact;

const contract = new ethers.Contract(
  contractAddress,
  contractAbi.abi,
  provider
);

const txConfig: txConfig = {
  gasLimit: 5000000,
  maxFeePerGas: ethers.utils.parseUnits('2', 'gwei'),
  maxPriorityFeePerGas: ethers.utils.parseUnits('2', 'gwei'),
};

const tx = await contract
  .connect(wallet)
  .createAuction(
    '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
    11,
    10,
    10,
    '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
    10,
    txConfig
  );

console.log(tx.hash);

// const bid = await contract.connect(wallet).createAuction(
//   '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
//   11,
//   {
//     value: ethers.utils.parseUnits('0.01', 'eth'),
//   },
//   txConfig
// );

// console.log(bid.hash);
