import * as React from 'react'
import NftImages from './NftImages'
import AlertScan from './AlertScan'
import Spinner from './Spinner'
// import Image from 'next/image'
import { SERVER } from '../constants'
// import { LockClosedIcon } from '@heroicons/react/20/solid'
import { resolveLink } from '../utils/general'
import FormWallet from './FormWallet.js'

// import HackerLogo from '../public/hacker.png'

// const notificationMethods = [
//   { id: 'ETH', title: 'Ethereum' },
//   { id: 'MATIC', title: 'Polygon' },
// ]

export default function WalletScanNft() {
  // const [wallet, setWallet] = React.useState()

  const [nftObject, setNftObject] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = (event) => {
    console.log(event.target.wallet.value)
    console.log(event.target.notification.value)
    event.preventDefault()
    setIsError(false)

    getNftsForOwner(event.target.wallet.value, event.target.notification.value)
  }

  const getNftsForOwner = async (address, chain) => {
    const endpoint = `${SERVER}/api/getNftsForOwner`
    const data = { address: address, chain: chain }

    setIsError(false)
    setIsLoading(true)
    setNftObject(null)

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const nfts = await response.json()
      console.log('nfts', nfts)
      // let [gateway] = nfts.tokenUri
      // console.log('gateway', gateway)
      const NFTsResponseInterface = nfts.map((item) => ({
        tokenId: item.tokenId,
        description: item.description,
        name: item.rawMetadata.name,
        image: resolveLink(item.rawMetadata.image),
      }))
      if (NFTsResponseInterface.length === 0) {
        setIsError(true)
      }

      setNftObject(NFTsResponseInterface)
    } catch (error) {
      setIsError(true)
    }
    setIsLoading(false)
  }

  return (
    <>
      {/* <div className="container mx-auto sm:px-6 lg:px-8"> */}
      <div className=" relative mx-auto max-w-7xl py-1 px-6 sm:py-1 lg:px-8 lg:py-1">
        <FormWallet
          handleSubmit={handleSubmit}
          title="Nft Wallet Scan"
          description=""
        />
        {isError ? <AlertScan /> : null}
        {nftObject ? <NftImages nftList={nftObject} /> : null}
        {isLoading ? <Spinner /> : null}
      </div>
    </>
  )
}
