import React from 'react'
import Metatags from '../components/MetaTags'
import MintNft from '../components/MintNft'
// import {
//   wagmiClient,
//   chains,
//   WagmiConfig,
//   RainbowKitProvider,
// } from '../utils/walletSetup'
import { ConnectButton } from '@rainbow-me/rainbowkit'

function MintPage() {
  return (
    <>
      <Metatags title="NFT Mint" />
      {/* 
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          coolMode={true}
          theme={lightTheme({
            accentColor: '#7B3FE4',
            accentColorForeground: 'white',
            borderRadius: 'small',
            fontStack: 'system',
            overlayBlur: 'small',
          })}
        > */}
      <MintNft />
      {/* </RainbowKitProvider>
      </WagmiConfig> */}
    </>
  )
}

export default MintPage
