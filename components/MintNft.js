import * as React from 'react'
import { Disclosure, Tab } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import poweredByWhite from '../public/poweredbyWhite.svg'
import Image from 'next/image'
import primaryToken from '../public/primaryToken.svg'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { guruAbi } from '../utils/guruABI'
import { guruAddr } from '../constants'
import clsx from 'clsx'

import { ethers } from 'ethers'

import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'

const contractConfig = {
  address: guruAddr,
  abi: guruAbi,
}

const product = {
  name: 'Guru Mint',
  price: '.01 MATIC ',
  rating: 5,
  images: [
    {
      id: 1,
      name: 'Front View',

      src: '/guru.png',
      alt: 'Nft Image',
    },
    {
      id: 2,
      name: 'Angled view',

      src: '/primaryToken.svg',
      alt: 'Nft Image',
    },
    {
      id: 3,
      name: 'Angled view',
      src: '/guru2.png',
      alt: 'Nft Image',
    },
    {
      id: 4,
      name: 'Angled view',

      src: '/guru3.png',
      alt: 'Nft Image',
    },
  ],

  description: `
 <p> A member of the Crypto Research Guru community pledges to prioritize the security of their cryptocurrency assets by taking necessary precautions to protect their seed phrase and private keys, educating themselves on current threats and scams, and being vigilant in protecting their assets. They also commit to never sharing their seed phrase or private keys with anyone,
 recognizing the importance of these keys for asset security. In addition, minting a non-fungible token (NFT) 
 gives the investor one vote in governance and provides utility from the start. </p>`,
  details: [
    {
      name: 'Features',
      items: [
        'Use as a Avatar show the Crypto community your Pledge of Safety',
        'Low Mint fee Please Help fund the Crypto Research Hub',
        '1 NFT equals 1 Vote on Governance Voting',
        'Low Gas Fee on PolyGon Network',
      ],
    },
    {
      name: 'PolyGon Network',
      items: ['Broader Reach', 'Speed and Cheapness', 'Lower Gas Fee Compared to Ethereum'],
    },
    // More sections...
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const payment = ethers.utils.parseEther('.01')

export default function MintNft() {
  const [mounted, setMounted] = React.useState(false)
  const [totalMinted, setTotalMinted] = React.useState(0)

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
    },
    onSettled(data, error) {
      console.log('Settled', { data, error })
    },
    onSuccess(data) {
      console.log('WRITE Success', data)
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
  })

  React.useEffect(() => {
    if (mintingState.minted) {
      setTimeout(() => {
        setMintingState({ approval: false, minting: false, minted: false })
      }, 5000)
    }
  }, [mintingState.minted])

  const { data: totalSupplyData } = useContractRead({
    ...contractConfig,
    functionName: 'totalSupply',
    watch: true,
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
                <Tab.List className="grid grid-cols-4 gap-6">
                  {product.images.map((image, index) => (
                    <Tab
                      key={index}
                      className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-poly2 text-sm font-medium uppercase text-gray-900 hover:bg-poly3 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only"> {image.name} </span>
                          <span className="absolute inset-0 overflow-hidden rounded-md">
                            <Image
                              src={image.src}
                              width={160}
                              height={160}
                              alt="Nft Image"
                              priority
                              className="h-full w-full object-cover object-center"
                            />
                          </span>
                          <span
                            className={classNames(
                              selected ? 'ring-polyO4' : 'ring-transparent',
                              'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                {product.images.map((image) => (
                  <Tab.Panel key={image.id}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover object-center sm:rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <div className="flex justify-between ">
                <ConnectButton
                  accountStatus={{
                    smallScreen: 'address',
                    largeScreen: 'full',
                  }}
                />

                <Image src={poweredByWhite} alt="Powered by PolyGon" width={231} height={44} className="pl-10" />
              </div>
              <div>
                <h1 className="mt-2 flex flex-col  text-2xl font-bold tracking-tight text-gray-900  lg:flex-row">
                  {product.name}{' '}
                  <span className="items-center text-2xl text-poly7 lg:px-6   ">Minted {totalMinted} / 1999</span>
                </h1>
              </div>

              <div className="mt-3">
                <h2 className="sr-only">NFT information</h2>
                <div className="flex flex-col lg:flex-row">
                  <div className="flex flex-row">
                    <Image height={25} weidth={25} alt="Matic Token" src={primaryToken} className="flex sm:flex-row" />
                    <h3 className="px-3 text-xl tracking-tight text-poly5">{product.price}</h3>
                  </div>

                  <h5 className="mt-2 px-2 text-xs">{guruAddr}</h5>
                </div>
              </div>

              <div className="mt-3">
                <h3 className="sr-only">Total Minuted</h3>
                <p className="mt-1 font-bold">
                  ***MINTING IS TESTING ON POLYGON MUMBAI-TEST NETWORK TO HELP TEST CONNECT WALLET AND GET FREE TEST
                  MATIC FAUCET https://mumbaifaucet.com/ MINT at your own risk***
                </p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div
                  className="space-y-6 text-base text-gray-700"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <div className="sm:flex-col1 mt-10 flex">
                {mounted && isConnected && (
                  <button
                    disabled={!mint || mintingState.approval || mintingState.minting || mintingState.minted}
                    // onClick={() => mint?.()}
                    onClick={handleClick}
                    type="submit"
                    // className="flex max-w-xs flex-1 animate-bounce items-center justify-center rounded-md border border-transparent bg-poly5 py-3 px-8 text-base font-medium text-white hover:bg-poly6 focus:outline-none focus:ring-2 focus:ring-poly8 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                    className={clsx(
                      `border-transparen flex max-w-xs  flex-1 animate-bounce  items-center  justify-center rounded-md
                      border bg-poly5 py-3 px-8 text-base font-medium hover:bg-poly6 focus:outline-none
                      focus:ring-2 focus:ring-poly8 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full`,
                      mintingState.approval && 'animate-pulse text-polyO5 ',
                      mintingState.minting && 'animate-pulse  text-polyO5',
                      mintingState.minted && 'bg-polyG5 text-polyO5',
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

              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="divide-y divide-gray-200 border-t">
                  {product.details.map((detail) => (
                    <Disclosure as="div" key={detail.name}>
                      {({ open }) => (
                        <>
                          <h3>
                            <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                              <span
                                className={classNames(open ? 'text-poly6' : 'text-gray-900', 'text-sm font-medium')}
                              >
                                {detail.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="block h-6 w-6 text-poly6 group-hover:text-poly9"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="block h-6 w-6 text-poly6 group-hover:text-poly9"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                            <ul role="list">
                              {detail.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
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
