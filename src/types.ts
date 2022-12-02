import { ethers } from 'ethers';

export interface Artifact {
  contractName: string;
  sourceName: string;
  abi: any;
  bytecode: string;
  deployedBytecode: string;
  linkReferences: object;
  deployedLinkReferences: object;
}

export interface txConfig {
  gasLimit: number;
  maxFeePerGas: ethers.BigNumber;
  maxPriorityFeePerGas: ethers.BigNumber;
}
