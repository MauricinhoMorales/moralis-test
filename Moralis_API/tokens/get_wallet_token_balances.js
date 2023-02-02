const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-utils');

const MORALIS_API_KEY = "tGVJWE6jNqj51oLlm6L0x2uyO9IuSpickrReaKsRzgUSIhNbGAnVimrRjdTWwIhv"

const runApp = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,

  });
  
  const address = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.token.getWalletTokenBalances({
    address,
    chain,
  });
  
  console.log(response.toJSON());
}

runApp();