import { Network, Alchemy } from 'alchemy-sdk'
import process from 'process'

const settings = {
  apiKey: process.env.ALCHEMY_API_KEY_MATIC,
  network: Network['MATIC_MAINNET'],
}

const alchemyMATIC = new Alchemy(settings)

export default alchemyMATIC
