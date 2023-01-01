import { Network, Alchemy } from 'alchemy-sdk'
import process from 'process'

const settings = {
  apiKey: process.env.ALCHEMY_API_KEY_MATIC,
  network: Network['MATIC_MUMBAI'],
}

const alchemyMUMBAI = new Alchemy(settings)

export default alchemyMUMBAI
