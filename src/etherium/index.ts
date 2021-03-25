import { ethers } from "ethers";
import { abi as CasinoABI } from "./contracts/Casino.json";
import { abi as GameABI } from "./contracts/Game.json";
import { abi as GamblerABI } from "./contracts/Gambler.json";

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS as string;

const { ethereum } = window as any;

export const provider = new ethers.providers.Web3Provider(ethereum, 'any');
export const signer = provider.getSigner();
export const casino = new ethers.Contract(contractAddress, CasinoABI, signer);

export function getGameContract(address: string) {
  return new ethers.Contract(address, GameABI, signer);
}

export function getGamblerContract(address: string) {
  return new ethers.Contract(address, GamblerABI, signer);
}

export function ethersConnectWallet() {
  return ethereum
    .request({ method: 'eth_requestAccounts' })
}
