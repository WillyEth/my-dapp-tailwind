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
  lightTheme,
} from '../utils/walletSetup'

export default function App({ Component, pageProps }) {
  return (
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
