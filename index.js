const Moralis = require("moralis").default;
const { ethers } = require("ethers");
const { EvmChain } = require("@moralisweb3/common-evm-utils");
const { ThirdwebSDK } = require("@thirdweb-dev/sdk");

const MORALIS_API_KEY = "tGVJWE6jNqj51oLlm6L0x2uyO9IuSpickrReaKsRzgUSIhNbGAnVimrRjdTWwIhv"

const runApp = async () => {
    
    const privateKey = "0x8C96012dEEb2224fF9254cA00D1Cb696835CDa35";
    const sdk = ThirdwebSDK.fromPrivateKey(privateKey, "goerli");

    const contract = await sdk.getContract("0x5209A9A17e0A54615D3C24C92570fB5b9B14AB1b", "token");
    const toAddress = "0x8C96012dEEb2224fF9254cA00D1Cb696835CDa35";
    const amount = 0.1;
    await contract.transfer(toAddress, amount);

    await Moralis.start({
        apiKey: MORALIS_API_KEY,
    });

    const contact_address = '0x5209a9a17e0a54615d3c24c92570fb5b9b14ab1b';

    const chain = EvmChain.GOERLI;

    const response = await Moralis.EvmApi.token.getTokenTransfers({
        address: contact_address,
        chain,
    });
    
    console.log(response.toJSON());
}

runApp();