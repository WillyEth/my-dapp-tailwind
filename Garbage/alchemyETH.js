import { Network, Alchemy } from 'alchemy-sdk'
import process from 'process'

const settings = {
  apiKey: process.env.ALCHEMY_API_KEY_ETH,
  network: Network['ETH_MAINNET'],
}

const alchemyETH = new Alchemy(settings)

export default alchemyETH
