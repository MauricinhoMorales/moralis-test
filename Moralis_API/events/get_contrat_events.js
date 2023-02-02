const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const MORALIS_API_KEY = "tGVJWE6jNqj51oLlm6L0x2uyO9IuSpickrReaKsRzgUSIhNbGAnVimrRjdTWwIhv"

const runApp = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
  });

  const address = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";

  const chain = EvmChain.ETHEREUM;

  const topic =
    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";

  const abi = {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  };

  const response = await Moralis.EvmApi.events.getContractEvents({
    address,
    chain,
    topic,
    abi,
  });

  console.log(response.toJSON());
};

runApp();