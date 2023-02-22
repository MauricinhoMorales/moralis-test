const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const MORALIS_API_KEY =
  "tGVJWE6jNqj51oLlm6L0x2uyO9IuSpickrReaKsRzgUSIhNbGAnVimrRjdTWwIhv";

const runApp = async () => {
  try {
    await Moralis.start({
      apiKey: MORALIS_API_KEY,
    });

    const contract_address = "0x5209a9a17e0a54615d3c24c92570fb5b9b14ab1b";

    const chain = EvmChain.GOERLI;

    const response = await Moralis.EvmApi.token.getTokenPrice({
      address: contract_address,
      chain,
    });

    console.log(response?.result);
  } catch (e) {
    console.error(e);
  }
};

runApp();
