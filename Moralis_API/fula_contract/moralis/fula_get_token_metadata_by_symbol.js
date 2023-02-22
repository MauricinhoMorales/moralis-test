const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const MORALIS_API_KEY =
  "tGVJWE6jNqj51oLlm6L0x2uyO9IuSpickrReaKsRzgUSIhNbGAnVimrRjdTWwIhv";

const runApp = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
  });

  const symbols = ["Fula"];

  const chain = EvmChain.GOERLI;

  const response = await Moralis.EvmApi.token.getTokenMetadataBySymbol({
    symbols,
    chain,
  });

  console.log(response.toJSON());
};

runApp();
