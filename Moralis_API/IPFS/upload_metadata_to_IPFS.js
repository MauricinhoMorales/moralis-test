const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-utils');

const MORALIS_API_KEY = "tGVJWE6jNqj51oLlm6L0x2uyO9IuSpickrReaKsRzgUSIhNbGAnVimrRjdTWwIhv"

const runApp = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
  });
  
    const abi = [
    {
        path: "metadata.json",
        content: {
        name: "NFT Name",
        description: "This will be the NFT description.",
        image: "ipfs://bafybeihewi4brhhmjqvquwdqnlzhnamfh26txwmw2fe4nfswfckpthowna/brandResoursesMage2.svg",
        attributes: [
          {
            "trait_type": "Base", 
            value: "Starfish"
          }, 
          {
            "trait_type": "Eyes", 
            value: "Big"
          }, 
          {
            "trait_type": "Mouth", 
            value: "Surprised"
          }
        ]
      },
    },
    ];

  const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });
  
  console.log(response.toJSON());
}

runApp();