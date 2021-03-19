// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { Contract, ContractFactory } from "ethers";

async function main(): Promise<void> {
  // Hardhat always runs the compile task when running scripts through it.
  // If this runs in a standalone fashion you may want to call compile manually
  // to make sure everything is compiled
  // await run("compile");

  const INITIAL_MINTER = "0x9D1040827fD85ccd3B59Ab96FD8CAf0dbFcAC44e"; //Ganache address

  // We get the contract to deploy
  const Token: ContractFactory = await ethers.getContractFactory("ContractName");
  console.log(`Start deploying ERC20 with initial minter: ${INITIAL_MINTER}`);
  const token: Contract = await Token.deploy(INITIAL_MINTER);
  await token.deployed();

  console.log("Token deployed to: ", token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
