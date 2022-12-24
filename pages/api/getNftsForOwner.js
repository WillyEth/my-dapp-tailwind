// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import alchemyETH from '../../utils/alchemyETH'
import alchemyMATIC from '../../utils/alchemyMATIC'

export default async function handler(req, res) {
  const { method } = req
  let alchemy = alchemyETH

  const chain = req.body.chain

  if (chain === 'MATIC') {
    alchemy = alchemyMATIC
  }

  if (method == 'POST') {
    const { address } = req.body
    console.log('addressPost', address)
    if (address) {
      const nfts = await alchemy.nft
        .getNftsForOwner(address)
        .then((data) => data.ownedNfts)
      res.status(200).json(nfts)
    } else {
      res.status(500).json({ error: 'Missing contract address' })
    }

    return
  }

  res.status(400).json({ error: 'Request not supported' })
  return
}

