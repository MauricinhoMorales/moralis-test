const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const MORALIS_API_KEY = "tGVJWE6jNqj51oLlm6L0x2uyO9IuSpickrReaKsRzgUSIhNbGAnVimrRjdTWwIhv"

const runApp = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
  });

  const addresses = ["0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"];

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.token.getTokenMetadata({
    addresses,
    chain,
  });

  console.log(response.toJSON());
};

runApp();