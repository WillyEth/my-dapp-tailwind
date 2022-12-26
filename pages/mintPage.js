import React from 'react'
import Metatags from '../components/MetaTags'
import MintNft from '../components/MintNft'
// import {
//   wagmiClient,
//   chains,
//   WagmiConfig,
//   RainbowKitProvider,
// } from '../utils/walletSetup'
// import { ConnectButton } from '@rainbow-me/rainbowkit'

function MintPage() {
  return (
    <>
      <Metatags title="NFT Mint" />
      <MintNft />
    </>
  )
}

export default MintPage
