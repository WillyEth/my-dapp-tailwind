import '../styles/globals.css'
// import { Inter } from '@next/font/google'
// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
import { Analytics } from '@vercel/analytics/react'
import Layout from '../components/Layout'

import {
  wagmiClient,
  chains,
  WagmiConfig,
  RainbowKitProvider,
  Disclaimer,
  lightTheme,
  CustomAvatar,
} from '../utils/walletSetup'

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        avatar={CustomAvatar}
        chains={chains}
        appInfo={{
          appName: 'NFT ButterFly Lab',
          disclaimer: Disclaimer,
        }}
        coolMode={true}
        theme={lightTheme({
          accentColor: '#7B3FE4',
          accentColorForeground: 'white',
          borderRadius: 'small',
          fontStack: 'system',
          overlayBlur: 'small',
        })}
      >
        <Layout>
          <Component {...pageProps} />
          <Analytics />
          {/* </main> */}
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
