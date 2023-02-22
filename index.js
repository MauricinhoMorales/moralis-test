const { ThirdwebSDK } = require("@thirdweb-dev/sdk");

const sdk = new ThirdwebSDK("goerli");

const runApp = async () => {
  const contract = await sdk.getContract(
    "0x5209A9A17e0A54615D3C24C92570fB5b9B14AB1b",
    "token"
  );
  const balance = await contract.totalSupply();

  console.log(balance);
};

runApp();
