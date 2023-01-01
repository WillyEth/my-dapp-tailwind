import { Network, Alchemy } from 'alchemy-sdk'
import process from 'process'

const settingsETH = {
  apiKey: process.env.ALCHEMY_API_KEY_ETH,
  network: Network['ETH_MAINNET'],
}

const alchemyETH = new Alchemy(settingsETH)

const settingsMATIC = {
  apiKey: process.env.ALCHEMY_API_KEY_MATIC,
  network: Network['MATIC_MAINNET'],
}

const alchemyMATIC = new Alchemy(settingsMATIC)

const settingsMUMBAI = {
  apiKey: process.env.ALCHEMY_API_KEY_MATIC,
  network: Network['MATIC_MUMBAI'],
}

const alchemyMUMBAI = new Alchemy(settingsMUMBAI)

export  {alchemyETH, alchemyMATIC, alchemyMUMBAI}
