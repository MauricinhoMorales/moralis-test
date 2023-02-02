const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const MORALIS_API_KEY = "tGVJWE6jNqj51oLlm6L0x2uyO9IuSpickrReaKsRzgUSIhNbGAnVimrRjdTWwIhv"

const runApp = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
  });

  // address of ERC20 token vault, e.g. WETH token address
  const address = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.balance.getNativeBalance({
    address,
    chain,
  });

  console.log(response.toJSON());
}

runApp();