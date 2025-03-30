const { ethers } = require("hardhat");

async function main() {
  // Get the contract factory
  const EnergyExchange = await ethers.getContractFactory("EnergyExchange");

  // Deploy the contract
  const energyExchange = await EnergyExchange.deploy();

  // Wait for the deployment to complete
  await energyExchange.deployed();

  console.log("EnergyExchange deployed to:", energyExchange.address);
}

// Run the script
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});