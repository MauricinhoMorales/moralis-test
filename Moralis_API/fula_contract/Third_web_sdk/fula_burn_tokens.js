const Moralis = require("moralis").default;
const { ThirdwebSDK } = require("@thirdweb-dev/sdk");

const MORALIS_API_KEY = "tGVJWE6jNqj51oLlm6L0x2uyO9IuSpickrReaKsRzgUSIhNbGAnVimrRjdTWwIhv"

const runApp = async () => {
    
    // PrivateKey of the test account
    const privateKey = "a0554bccb5a4cbd6e2f74754f66deee5410b67806361e629d1a71299abc8f6db";

    //Created a SDK with signed transactions
    const sdk = ThirdwebSDK.fromPrivateKey(privateKey, "goerli");

    // //Created a sdk without signed transactions
    // const sdk = new ThirdwebSDK("goerli");

    // Get the contract given the address
    const contract = await sdk.getContract("0x5209A9A17e0A54615D3C24C92570fB5b9B14AB1b", "token");

    // Address of the wallet you want to burn the tokens to
    const holderAddress = "0x768e02d0b50fcBc97163CBe70285236e97Ff3001";

    // The amount of this token you want to burn
    const amount = 200;

    await contract.setAllowance(holderAddress, amount);

    // Function to burn 
    await contract.burnFrom(holderAddress,amount);

}

runApp();
