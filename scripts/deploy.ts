import { ethers } from "hardhat";
import { Contract, ContractFactory } from "ethers";

async function main(): Promise<void> {
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  const Token: ContractFactory = await ethers.getContractFactory("Token");
  const token: Contract = await Token.deploy();
  
  await token.deployed();

  console.log("Contract deployed to: ", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });