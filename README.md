
# Introduction 
This is a solidity project done using the solidity programming language and (https://remix.ethereum.org) . This was one of the project's to be done in the metacrafter's platform . 
We have used hardhat and other libraries to make a simple token of our choice, where the owner will be able to mint new token's and also transfer them and burn them . 
Anyone can burn and transfer tokens that they have but only the contract owner can mint new tokens respectively . He can also transfer the ownership to any one else 
# Description 
We created a token called 'ODIN' and we use solidity programming language to do that. 
# Getting started 
* Clone the repository
* ```
  npm i
  ```
* ```
  npx hardhat compile
  ```
* ```
  npx hardhat run scripts/deploy.js --network hardhat
  ```
* Copy the Contract address:
* ```
    npx hardhat node
  ```
This command will start an RPC server at some port and you will have a bunch of address's and public keys available to you .
# Remix
* Open remix editor
* Paste the code from the OdinToken.sol file
* Compile your OdinToken.sol file
* Under deploy and run transactions , select the hardhat dev in the environment menu:
* Paste the contract address in the Ataddress box and click on atAddress
* Contract will be deployed .

  Play around with the contract and check if you are able to perform all the action. Also keep a check on the console you started by running npx hardhat node .
  It may surprise you ...
# License
This project is licensed under MIT license.
