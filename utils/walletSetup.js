import '@rainbow-me/rainbowkit/styles.css'
import process from 'process'
import { polygonMumbai, polygon } from 'wagmi/chains'
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

export const { chains, provider } = configureChains(
  [polygon],
  [
    alchemyProvider({
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_POLYGON,
      priority: 0,
    }),
    //
  ]
)

// const getConfig = async () => {
//   const endpoint = `${SERVER}/api/getConfigureChains`
//   const response = await fetch(endpoint, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//   const walletConfigure = await response.json()

//   return walletConfigure
// }

let CustomAvatar = AvatarComponent

CustomAvatar = ({ address, ensImage, size }) => {
  return ensImage ? (
    <img src={ensImage} width={size} height={size} style={{ borderRadius: 999 }} />
  ) : (
    <Image src={Logo} width={size} height={size} alt="" />
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
