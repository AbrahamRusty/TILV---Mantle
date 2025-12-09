import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  // Deploy InvoiceNFT
  const InvoiceNFT = await ethers.getContractFactory("InvoiceNFT");
  const invoiceNFT = await InvoiceNFT.deploy();
  await invoiceNFT.deployed();
  console.log("InvoiceNFT deployed to:", invoiceNFT.address);

  // Deploy RiskEngine
  const RiskEngine = await ethers.getContractFactory("RiskEngine");
  const riskEngine = await RiskEngine.deploy(deployer.address, deployer.address);
  await riskEngine.deployed();
  console.log("RiskEngine deployed to:", riskEngine.address);

  // Deploy VaultManager
  const VaultManager = await ethers.getContractFactory("VaultManager");
  const vaultManager = await VaultManager.deploy(
    "0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE", // Testnet USDT
    invoiceNFT.address
  );
  await vaultManager.deployed();
  console.log("VaultManager deployed to:", vaultManager.address);

  // Set up roles
  await invoiceNFT.grantRole(await invoiceNFT.VALIDATOR_ROLE(), vaultManager.address);
  console.log("Roles configured");

  // Save addresses
  const addresses = {
    invoiceNFT: invoiceNFT.address,
    riskEngine: riskEngine.address,
    vaultManager: vaultManager.address,
    network: "mantleTestnet"
  };

  console.log("\n=== Deployment Complete ===");
  console.log(JSON.stringify(addresses, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
