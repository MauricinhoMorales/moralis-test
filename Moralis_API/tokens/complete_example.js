
const express = require('express')
// Import Moralis
const Moralis = require('moralis').default

// Import the EvmChain dataType
const { EvmChain, EvmAddress } = require("@moralisweb3/common-evm-utils")

const app = express()
const port = 3000

// Add a variable for the api key, address and chain
const MORALIS_API_KEY = "tGVJWE6jNqj51oLlm6L0x2uyO9IuSpickrReaKsRzgUSIhNbGAnVimrRjdTWwIhv"
const address = '0xa74476443119a942de498590fe1f2454d7d4ac0d'
const chain = EvmChain.ETHEREUM

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Add this a startServer function that initialises Moralis
const startServer = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

// Call startServer()
startServer()

app.get("/demo", async (req, res) => {
    try {
        // Get and return the crypto data
        const data = await getDemoData()
        res.status(200)
        res.json(data)
    } catch (error) {
        // Handle errors
        console.error(error)
        res.status(500)
        res.json({ error: error.message })
    }
})

async function getDemoData() {
    const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
      address,
      chain,
    })
    const native = nativeBalance.result.balance.ether
  
    const tokenBalances = await Moralis.EvmApi.token.getWalletTokenBalances({
      address,
      chain,
    })
    const tokens = tokenBalances.result.map((token) => token.display())
    
    // Get the nfts
    const nftsBalances = await Moralis.EvmApi.nft.getWalletNFTs({
      address,
      chain,
      limit: 10,
    })
  
    // Format the output to return name, amount and metadata
    const nfts = nftsBalances.result.map((nft) => ({
      name: nft.result.name,
      amount: nft.result.amount,
      metadata: nft.result.metadata,
    }))
    
    // Add nfts to the output
    return { native, tokens, nfts }
  }