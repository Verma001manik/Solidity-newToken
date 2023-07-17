const hre = require("hardhat");

async function main() {

const deployedContract = await hre.ethers.deployContract("OdinToken");

await deployedContract.waitForDeployment();
// const OdinToken = await hre.ethers.getContractFactory("OdinToken");

//   // Step 2: Deploy the contract
//   const deployedContract = await OdinToken.deploy();

//   // Step 3: Wait for the contract deployment to be confirmed
//   await deployedContract.deployed();



console.log("CONTRACT ADDRESS:", await deployedContract.getAddress());

}
// Hardhat recommends this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 