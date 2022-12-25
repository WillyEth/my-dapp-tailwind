import '../styles/globals.css'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  return (
    // <main className={`${inter.variable} font-sans`}>
    <Layout>
      <Component {...pageProps} />
      {/* </main> */}
    </Layout>
  )
}
