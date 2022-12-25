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

// const endpoint = 'api/getNftsForOwner'
// const data = { address: '0x6773dbde750df65520379760a3ede6027e273d9e' }
// const add = '0xa642366A8FD8B1Cb69D131C0C4A4e5b09369B571'
//const add = '0xCE3f08e664693ca792caCE4af1364D5e220827B2'
//BNB 0x7a97911117e874cC6D553669C9F5Ca0d7b6943d1
//EggBaby 0xbAD426dbA3febe13abb33A070bEc4Ff39a168d17
//nOmral 0xa642366A8FD8B1Cb69D131C0C4A4e5b09369B571
//presale 0x6142a757fB267bb9387F08E21103274FD5E7cf51

// //Metamask 0x7a97911117e874cC6D553669C9F5Ca0d7b6943d1

// const notificationMethods = [
//   { id: 'ETH', title: 'Ethereum' },
//   { id: 'MATIC', title: 'Polygon' },
// ]

export default function WalletScanNft() {
  // const [wallet, setWallet] = React.useState()
  console.log('WalletScanNft')
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
