import '@rainbow-me/rainbowkit/styles.css'
import process from 'process'
import { polygonMumbai } from 'wagmi/chains'
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
  DisclaimerComponent,
  AvatarComponent,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit'

import {
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
  coinbaseWallet,
  ledgerWallet,
  metaMaskWallet,
  trustWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import Logo from '../public/logo.png'
import Image from 'next/image'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

const appName = 'NFT ButterFly Lab'

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
let CustomAvatar = AvatarComponent

CustomAvatar = ({ address, ensImage, size }) => {
  return ensImage ? (
    <img src={ensImage} width={size} height={size} style={{ borderRadius: 999 }} />
  ) : (
    <Image src={Logo} width={size} height={size} alt="" className="bg-poly3" />
  )
}

let Disclaimer = DisclaimerComponent

Disclaimer = ({ Text, Link }) => (
  <Text>
    By connecting your wallet, you agree to the{' '}
    <Link href="https://about.nftbutterflylab.com/notices/disclaimer">Terms of Service</Link> and acknowledge you have
    read and understand the protocol <Link href="https://about.nftbutterflylab.com/notices/disclaimer">Disclaimer</Link>
  </Text>
)

// const { connectors } = getDefaultWallets({
//   appName: 'NFT Butterly Lab',
//   chains,
// })

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ chains }),
      coinbaseWallet({ chains }),
      trustWallet({ chains }),
      ledgerWallet({ chains }),
      walletConnectWallet({ chains }),
      rainbowWallet({ chains }),
      injectedWallet({ chains }),
    ],
  },
])

export const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
})

export { WagmiConfig, RainbowKitProvider, lightTheme, Disclaimer, CustomAvatar }
