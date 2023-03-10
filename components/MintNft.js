import * as React from 'react'

import { Disclosure, Tab } from '@headlessui/react'
import { MinusIcon, PlusIcon, WalletIcon } from '@heroicons/react/24/outline'
import poweredByWhite from '../public/poweredbyWhite.svg'
import Image from 'next/image'
import primaryToken from '../public/primaryToken.svg'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { BTLYAbi } from '../utils/butterflyABI'
import { BTLYAddr, product } from '../constants'
import clsx from 'clsx'
import { ethers } from 'ethers'
import ButterflyNft from '../public/ButterflyNFTlab.gif'
import Link from 'next/link'

//  import ButterflyNft from '../public/n.mp4'

import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'

const contractConfig = {
  address: BTLYAddr,
  abi: BTLYAbi,
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const payment = ethers.utils.parseEther('1')

export default function MintNft() {
  const [mounted, setMounted] = React.useState(false)
  const [totalMinted, setTotalMinted] = React.useState(0)
  const [isWatch, setIsWatch] = React.useState(false)

  const [mintingState, setMintingState] = React.useState({ approval: false, minting: false, minted: false })

  const { isConnected } = useAccount()
  React.useEffect(() => {
    setMounted(true)
  }, [])

  //PREPARE
  const { config: contractWriteConfig } = usePrepareContractWrite({
    ...contractConfig,
    functionName: 'mint',

    overrides: {
      value: payment,
    },
  })

  //WRITE
  const {
    data: mintData,
    write: mint,
    isIdle: isMintIdle,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,

    error: mintError,
  } = useContractWrite({
    ...contractWriteConfig,

    onError(mintError) {
      setMintingState({ approval: false, minting: false, minted: false })
      alert('Minting failed. Please try again.')
    },
    onSettled(data, error) {},
    onSuccess(data) {
      setMintingState({ approval: false, minting: true, minted: false })
    },
  })

  //WAIT FOR TX
  const {
    data: txData,
    isSuccess: txSuccess,
    error: txError,
    isFetching: isFetching,
  } = useWaitForTransaction({
    confirmations: 2,
    hash: mintData?.hash,
    onSuccess(data) {
      setMintingState({ approval: false, minting: false, minted: true })
    },
    onError(error) {
      setMintingState({ approval: false, minting: false, minted: false })
      setIsWatch(false)
      alert('Minting failed. Please try again.')
    },
  })

  React.useEffect(() => {
    if (mintingState.minted) {
      setIsWatch(true)
      setTimeout(() => {
        setMintingState({ approval: false, minting: false, minted: false })
        setIsWatch(false)
      }, 5000)
    }
  }, [mintingState.minted])

  //READ

  const { data: totalSupplyData } = useContractRead({
    ...contractConfig,
    functionName: 'totalSupply',
    watch: isWatch,
  })

  React.useEffect(() => {
    if (totalSupplyData) {
      setTotalMinted(totalSupplyData.toNumber())
    }
  }, [totalSupplyData])

  //code handleclick
  const handleClick = () => {
    if (isConnected) {
      setMintingState({ approval: true, minting: false, minted: false })
      mint?.()
    }
  }
  return (
    <div className=" relative mx-auto max-w-7xl py-1 px-6 sm:py-1 lg:px-10 lg:py-1">
      <div>
        <div className="sm:py-15 mx-auto max-w-2xl py-8 px-4 sm:px-6 lg:max-w-6xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Image gallery */}
            <Tab.Group as="div" className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                {/* <Tab.List className="grid grid-cols-4 gap-6"> */}
                <Tab.List className="grid place-items-center">
                  {/* {product.images.map((image, index) => ( */}
                  {/* <Tab
                    // key={index}
                    className="relative flex h-40 w-40  cursor-pointer items-center justify-center rounded-md bg-poly2 text-sm font-medium uppercase text-poly5 hover:bg-poly4 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">ButterfyLfy NFT</span>
                        <span className="absolute  inset-0 overflow-hidden rounded-md">
                          <Image
                            src={ButterflyNft}
                            // width={600}
                            // height={600}
                            alt="Nft Image"
                            className="h-full w-full  object-cover object-center"
                          />
                        </span>
                        <span
                          className={classNames(
                            selected ? 'ring-poly5' : 'ring-transparent',
                            'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab> */}
                  {/* // ))} */}
                </Tab.List>
              </div>

              <Tab.Panels className="w-full transform cursor-pointer transition duration-500 ease-in-out hover:scale-105">
                {/* {product.images.map((image) => ( */}
                <Tab.Panel key="1">
                  <Image
                    src={ButterflyNft}
                    alt="ButterflyNft"
                    // width={600}
                    // height={600}
                    priority={true}
                    unoptimized={true}
                    // blurDataURL="/blur.png"
                    // placeholder="blur"
                    className="h-full w-full object-cover object-center sm:rounded-lg"
                  />
                </Tab.Panel>
                {/* ))} */}
              </Tab.Panels>
            </Tab.Group>

            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <div className="flex justify-between  drop-shadow-xl ">
                <ConnectButton
                  accountStatus={{
                    smallScreen: 'full',
                    largeScreen: 'full',
                  }}
                />
              </div>
              <div>
                <h1 className="mt-2 flex flex-col  text-2xl font-bold tracking-tight text-gray-900  lg:flex-row">
                  {/* {product.name}{' '} */}
                  <p className="mt-2 items-center text-3xl text-poly7 drop-shadow-md  ">Minted {totalMinted} / 999</p>
                </h1>
              </div>

              <div className="mt-3">
                <h2 className="sr-only">NFT information</h2>
                <div className="flex flex-col lg:flex-row">
                  <div className="flex flex-row">
                    <Image
                      height={25}
                      weidth={25}
                      alt="Matic Token"
                      src={primaryToken}
                      className="flex drop-shadow-md sm:flex-row"
                    />
                    <h3 className="mt-1 px-3 text-xl tracking-tight text-poly6">{product.price}</h3>
                  </div>
                  <div className="flex flex-row">
                    <WalletIcon className=" h-8 w-7 text-poly6" aria-hidden="Wallet Icon" />

                    <Link
                      className="pt-1 pl-1 text-base text-poly5  hover:text-poly7"
                      href="https://about.nftbutterflylab.com/product-guides/how-to-add-polygon-network"
                    >
                      How to Add Polygon Network
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <h3 className="sr-only">Total Minted</h3>
                {/* <p className="mt-1 max-w-prose text-center font-bold">*Currently Testing on POLYGON MUMBAI-TEST*</p> */}
                {/* <ul className="max-w-prose mt-3 list-inside list-disc text-sm font-bold text-gray-500">
                  <li>Suggestion do not use main wallet</li>
                  <li>Add Mumbai at mure sure to include testnet  https://chainlist.org/</li>
                  <li>Get free Matic    https://mumbaifaucet.com/</li>
                </ul> */}
              </div>

              <div className="mt-2">
                <h3 className="sr-only">Description</h3>

                <div
                  className="space-y-6 text-base text-poly6 drop-shadow-sm"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
                <ul className="ml-5 mt-2 list-disc  text-base text-poly6 drop-shadow-sm">
                  <li>Mint on the Polygon Network and pay a fair price with low gas costs</li>
                  <li>Buy multiple mints and gain voting power in the NFT DAO</li>
                  <li>Limited to 50 mints per wallet, so act fast!</li>
                  <li>Be at the front of the line for our next amazing NFT by joining our whitelist today</li>
                  <li>Own a one-of-a-kind, artist-generated animated NFT!</li>
                </ul>
              </div>

              <div className="sm:flex-col1 mt-10 flex">
                {mounted && isConnected && (
                  <button
                    disabled={!mint || mintingState.approval || mintingState.minting || mintingState.minted}
                    onClick={handleClick}
                    type="submit"
                    className={clsx(
                      `border-transparen flex max-w-xs flex-1  animate-bounce items-center  justify-center  rounded-md border
                      bg-poly5 py-3 px-8 text-base font-medium drop-shadow-xl hover:bg-poly6 focus:outline-none
                      focus:ring-2 focus:ring-poly8 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full`,
                      mintingState.approval && 'animate-pulse text-white ',
                      mintingState.minting && 'animate-pulse  text-white',
                      mintingState.minted && 'bg-poly7 text-white',
                      !mintingState.approval && !mintingState.minting && !mintingState.minted && 'text-white'
                    )}
                  >
                    {mintingState.approval && 'Waiting for approval'}
                    {mintingState.minting && 'Minting...'}
                    {!mintingState.approval && !mintingState.minting && !mintingState.minted && 'Mint'}
                    {mintingState.minted && 'Minted!'}
                  </button>
                )}
              </div>

              <section aria-labelledby="details-heading" className="mt-4">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="divide-y divide-poly7 border-t">
                  {product.details.map((detail) => (
                    <Disclosure as="div" key={detail.name}>
                      {({ open }) => (
                        <>
                          <h3>
                            <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                              <span className={classNames(open ? 'text-poly6' : 'text-poly6', 'text-sm font-medium')}>
                                {detail.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="block h-6 w-6 text-poly5 group-hover:text-poly6"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="block h-6 w-6 text-poly5 group-hover:text-poly6"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel as="div" className="prose prose-sm pb-4">
                            <ul role="list" className="list-disc pl-7">
                              {detail.items.map((item) => (
                                <li className="text-poly6" key={item}>
                                  {item}
                                </li>
                              ))}
                              <li>
                                <Link
                                  href="https://about.nftbutterflylab.com/notices/disclaimer"
                                  className="pb-6 text-base text-poly6 hover:text-poly7 "
                                  aria-current="Disclaimer"
                                >
                                  Disclaimer
                                </Link>
                              </li>
                            </ul>
                            <div>
                              <Link href="https://polygon.technology/">
                                <Image
                                  src={poweredByWhite}
                                  alt="Powered by PolyGon"
                                  width={231}
                                  height={44}
                                  className="mt-5 transform cursor-pointer transition duration-500 ease-in-out hover:scale-105"
                                />
                              </Link>
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
