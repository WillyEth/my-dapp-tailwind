import * as React from 'react'
import AlertScan from './AlertScan'
import Spinner from './Spinner'
import { SERVER } from '../constants'
import TokenTable from './TokenTable'
import FormWallet from './FormWallet.js'

export default function WalletScanToken() {
  const [tokenObject, setTokenObject] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = (event) => {
    // console.log(event.target.wallet.value)
    // console.log(event.target.notification.value)
    event.preventDefault()
    setTokenObject(null)
    getTokenForOwner(event.target.wallet.value, event.target.notification.value)
  }

  const getTokenForOwner = async (address, chain) => {
    const endpoint = `${SERVER}/api/getTokenForOwner`
    const data = { address: address, chain: chain }
    setIsError(false)
    setIsLoading(true)
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const token = await response.json()

      setTokenObject(token)
      if (token.length === 0) {
        setIsError(true)
      }
    } catch (error) {
      setIsError(true)
    }
    setIsLoading(false)
  }

  return (
    <>
      {/* <div className="container mx-auto sm:px-6 lg:px-8"> */}
      <div className=" relative mx-auto max-w-7xl py-1 px-6 sm:py-1 lg:px-8 lg:py-1">
        <FormWallet handleSubmit={handleSubmit} title="Token Wallet Scan" description="" />
        {isError ? <AlertScan /> : null}
        {tokenObject ? <TokenTable tokenObject={tokenObject} /> : null}
        {isLoading ? <Spinner /> : null}
      </div>
    </>
  )
}
