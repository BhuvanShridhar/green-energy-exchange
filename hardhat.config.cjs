require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28", // Match the contract's pragma version
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545", // Local Hardhat network
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Use the private key from .env
    },
  },
};