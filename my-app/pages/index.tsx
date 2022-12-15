import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {
  // useContractEvent,
  usePrepareContractWrite,
  useContractWrite,
} from 'wagmi';
import { contractAbi } from './ReserveAuctionCoreEth';
import { vrgdaABI } from './vrgda';
import { ensAbi } from './ens';
import { Profile } from './profile';
import { BigNumber } from 'ethers';

export default function Home() {
  // useContractEvent({
  //   address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  //   abi: ensAbi,
  //   eventName: 'NewOwner',
  //   listener(node, label, owner) {
  //     console.log(node, label, owner);
  //   },
  // });

  const { config } = usePrepareContractWrite({
    address: '0x9A283c74A05Cdb60482B6EFf7a7CCCb301fD8B44',
    abi: [
      {
        name: 'settleAuction',
        type: 'function',
        stateMutability: 'payable',
        inputs: [
          {
            internalType: 'uint256',
            name: 'expectedNounId',
            type: 'uint256',
          },
          {
            internalType: 'bytes32',
            name: 'expectedParentBlockhash',
            type: 'bytes32',
          },
        ],
        outputs: [],
      },
    ],
    functionName: 'settleAuction',
    args: [
      BigNumber.from(2),
      `0x59ad4e2e68cdf7f69fa9a5cbf575e41b8ceeed269acbf21db941768824d9c3ec`,
    ],
  });
  // const { config } = usePrepareContractWrite({
  //   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  //   abi: [
  //     {
  //       name: 'mint',
  //       type: 'function',
  //       stateMutability: 'nonpayable',
  //       inputs: [],
  //       outputs: [],
  //     },
  //   ],
  //   functionName: 'mint',
  //   enabled: true,
  // });
  const { write } = useContractWrite(config);
  console.log(write);
  return (
    <div>
      <Profile></Profile>
      <button disabled={!write} onClick={() => write?.()}>
        Mint
      </button>
    </div>
  );
}
