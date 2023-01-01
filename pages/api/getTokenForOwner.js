// import alchemyETH from '../../utils/alchemyETH'
// import alchemyMATIC from '../../utils/alchemyMATIC'
// import alchemyMUMBAI from '../../utils/alchemyMUMBAI'
import { alchemyETH, alchemyMATIC, alchemyMUMBAI } from '../../utils/alchemyAPI'

export default async function handler(req, res) {
  const { method } = req
  let alchemy = alchemyETH
  let tokenObject = []

  const chain = req.body.chain

  if (chain === 'MATIC') {
    alchemy = alchemyMATIC
  }

  if (chain === 'MUMBAI') {
    alchemy = alchemyMUMBAI
  }

  if (method == 'POST') {
    const { address } = req.body

    // console.log('addressPost', address)
    if (address) {
      const balances = await alchemy.core.getTokenBalances(address)
      // Get token balances
      console.log("balances", balances)

      // Remove tokens with zero balance
      const nonZeroBalances = balances.tokenBalances.filter((token) => {
        return token.tokenBalance !== '0'
      })

      // Loop through all tokens with non-zero balance
      for (let token of nonZeroBalances) {
        // Get balance of token
        let balance = token.tokenBalance

        // Get metadata of token
        const metadata = await alchemy.core.getTokenMetadata(
          token.contractAddress
        )
        let i = 1
        // Compute token balance in human-readable format
        balance = balance / Math.pow(10, metadata.decimals)
        balance = balance.toFixed(2)

        // Print name, balance, and symbol of token
        // console.log(`${i++}. ${metadata.name}: ${balance} ${metadata.symbol}`)

        // console.log(`Token balances of ${address} \n`)
        tokenObject.push({
          logo: metadata.logo,
          name: metadata.name,
          symbol: metadata.symbol,
          balance: balance,
          chain: chain,
          address: token.contractAddress,
        })
      }

      res.status(200).json(tokenObject)
    } else {
      res.status(500).json({ error: 'Missing contract address' })
    }

    return
  }

  res.status(400).json({ error: 'Request not supported' })
  return
}
