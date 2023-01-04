import * as React from 'react'
import NftImages from './NftImages'
import AlertScan from './AlertScan'
import Spinner from './Spinner'
// import Image from 'next/image'
import { SERVER } from '../constants'
import { resolveLink } from '../utils/general'
import FormWallet from './FormWallet.js'
import SideOutNft from './SideOutNft'

export default function WalletScanNft() {
  const [nftObject, setNftObject] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [IsOpenSideOut, setIsOpenSideOut] = React.useState(false)
  const [nft, setNft] = React.useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsError(false)

    getNftsForOwner(event.target.wallet.value, event.target.notification.value)
  }

  //onclick function to open modal
  const handleNftClick = (e) => {
    setNft(e)
    setIsOpenSideOut(true)
  }

  const handleCloseSideOut = () => {
    setIsOpenSideOut(false)
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
      // console.log('nfts', nfts)

      const NFTsResponseInterface = nfts.map((item) => ({
        tokenId: item.tokenId,
        contractAddress: item.contract.address,
        symbol: item.contract.symbol,
        totalMinted: item.contract.totalSupply,

        description: item.description,
        name: item.rawMetadata.name,
        openSea: item.contract.openSea,
        attributes: item.rawMetadata.attributes,
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
      <div className=" relative  mx-auto max-w-7xl py-1 px-6 sm:py-1 lg:px-8 lg:py-1">
        <FormWallet handleSubmit={handleSubmit} title="Nft Wallet Scan" description="" />
        {isError ? <AlertScan /> : null}
        {nftObject ? <NftImages nftList={nftObject} handleNftClick={handleNftClick} /> : null}
        {isLoading ? <Spinner /> : null}
        {IsOpenSideOut ? <SideOutNft handleCloseSideOut={handleCloseSideOut} nftObject={nft} /> : null}
      </div>
    </>
  )
}
