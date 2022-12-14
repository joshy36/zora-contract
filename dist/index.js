import abi from './ReserveAuctionCoreEth.json' assert { type: 'json' };
import { ethers, Wallet } from 'ethers';
import { auctionDetails } from './utils.js';
import * as dotenv from 'dotenv';
dotenv.config();
const { PRIVATE_KEY, ALCHEMY_API_KEY } = process.env;
const sellerFundsRecipient = '0xBE0943a2B71fFf61CB885018A95ee55f7Ae361b0';
const contractAddress = '0x2506D9F5A2b0E1A2619bCCe01CD3e7C289A13163';
const nftContractAddress = '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2';
const provider = new ethers.providers.JsonRpcProvider(`https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`);
const wallet = new Wallet(PRIVATE_KEY, provider);
const contractAbi = abi;
const contract = new ethers.Contract(contractAddress, contractAbi.abi, provider);
const txConfig = {
    value: ethers.utils.parseUnits('0', 'gwei'),
    gasLimit: 5000000,
    maxFeePerGas: ethers.utils.parseUnits('2', 'gwei'),
    maxPriorityFeePerGas: ethers.utils.parseUnits('2', 'gwei'),
};
// const tx = await create(
//   contract,
//   wallet,
//   txConfig,
//   nftContractAddress,
//   11,
//   sellerFundsRecipient
// );
// console.log(tx.hash);
// const bid = await createBid(
//   contract,
//   wallet,
//   txConfig,
//   nftContractAddress,
//   11,
//   '0.021'
// );
const details = await auctionDetails(contract, nftContractAddress, 11);
// // const block = await provider.getBlock(blockNumberOrHash);
// // const timeRemaining = details.firstBidTime + details.duration - block.timestamp;
console.log(details);
//# sourceMappingURL=index.js.map