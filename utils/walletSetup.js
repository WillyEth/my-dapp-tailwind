import '@rainbow-me/rainbowkit/styles.css'
import process from 'process'
import { polygonMumbai } from 'wagmi/chains'
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

export const { chains, provider } = configureChains(
  [polygonMumbai],
  [
    alchemyProvider({
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_MUMBAI,
      priority: 0,
    }),
//
  ]
)


const { connectors } = getDefaultWallets({
  appName: 'Research NFT Mint',
  chains,
})

export const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
})

export { WagmiConfig, RainbowKitProvider, lightTheme }
