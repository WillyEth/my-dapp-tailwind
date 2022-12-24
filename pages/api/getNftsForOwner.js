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

// const endpoint = 'api/getNftsForOwner'
// const data = { address: '0x6773dbde750df65520379760a3ede6027e273d9e' }

// fetch(endpoint, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((nfts) => {
//     // do something with the array of NFTs
//     console.log(nfts)
//   })
//   .catch((error) => {
//     // handle error
//   })
