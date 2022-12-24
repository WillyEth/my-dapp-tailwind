import * as React from 'react'

import AlertScan from './AlertScan'
import Spinner from './Spinner'
import { SERVER } from '../constants'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import TokenTable from './TokenTable'

// const endpoint = 'api/getNftsForOwner'
// const data = { address: '0x6773dbde750df65520379760a3ede6027e273d9e' }
// const add = '0xa642366A8FD8B1Cb69D131C0C4A4e5b09369B571'
//const add = '0xCE3f08e664693ca792caCE4af1364D5e220827B2'
//BNB 0x7a97911117e874cC6D553669C9F5Ca0d7b6943d1
//EggBaby 0xbAD426dbA3febe13abb33A070bEc4Ff39a168d17
//nOmral 0xa642366A8FD8B1Cb69D131C0C4A4e5b09369B571
//presale 0x6142a757fB267bb9387F08E21103274FD5E7cf51

//Metamask 0x7a97911117e874cC6D553669C9F5Ca0d7b6943d1

const notificationMethods = [
  { id: 'ETH', title: 'Ethereum' },
  { id: 'MATIC', title: 'Polygon' },
]

export default function WalletScanToken() {
  const [tokenObject, setTokenObject] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = (event) => {
    console.log(event.target.wallet.value)
    console.log(event.target.notification.value)
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

      //   setNftObject(NFTsResponseInterface)
    } catch (error) {
      setIsError(true)
    }
    setIsLoading(false)
  }

  return (
    <>
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="flex min-h-full items-center justify-center py-5 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="/hacker.png"
                alt="Crypto Research Hub"
              />
              <h2 className="mt-2 text-center text-2xl font-bold tracking-tight text-gray-900">
                Wallet Scan
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                discover whats inside{' '}
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  before Mr. Hacker
                </a>
              </p>
            </div>
            <form
              className="mt-4 space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="wallet-address" className="sr-only">
                    Wallet Address
                  </label>
                  <input
                    id="wallet-address"
                    name="wallet"
                    type="text"
                    //   autoComplete="email"
                    minLength="42"
                    maxLength="42"
                    required={true}
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="wallet address"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                {/* <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div> */}
                <div>
                  <label className="text-base font-medium text-gray-900">
                    The world of Web3
                  </label>
                  <p className="text-sm leading-5 text-gray-500">
                    Select your network
                  </p>
                  <fieldset className="mt-4">
                    <legend className="sr-only">Notification method</legend>
                    <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                      {notificationMethods.map((notificationMethod) => (
                        <div
                          key={notificationMethod.id}
                          className="flex items-center"
                        >
                          <input
                            id={notificationMethod.id}
                            name="notification"
                            type="radio"
                            value={notificationMethod.id}
                            defaultChecked={notificationMethod.id === 'ETH'}
                            // onChange={(e) => {
                            //   console.log('value', e.target.value)
                            // }}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor={notificationMethod.id}
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            {notificationMethod.title}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Scan for Tokens
                </button>
              </div>
            </form>
          </div>
        </div>
        {isError ? <AlertScan /> : null}
        {tokenObject ? <TokenTable tokenObject={tokenObject} /> : null}
        {isLoading ? <Spinner /> : null}
   
      </div>
    </>
  )
}
