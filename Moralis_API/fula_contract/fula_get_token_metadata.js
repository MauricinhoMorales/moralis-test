const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const MORALIS_API_KEY = "tGVJWE6jNqj51oLlm6L0x2uyO9IuSpickrReaKsRzgUSIhNbGAnVimrRjdTWwIhv"

const runApp = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
  });
  
  const addresses = ['0x5209A9A17e0A54615D3C24C92570fB5b9B14AB1b'];

  const chain = EvmChain.GOERLI;

  const response = await Moralis.EvmApi.token.getTokenMetadata({
        addresses,
        chain,
    });
  
  console.log(response.toJSON());
}

runApp();