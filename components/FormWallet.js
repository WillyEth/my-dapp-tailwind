import * as React from 'react'
import Image from 'next/image'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import HackerLogo from '../public/hacker.png'

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

export default function FormWallet({ handleSubmit, title, description }) {
  return (
    <>
      {/* <div className="container mx-auto sm:px-6 lg:px-8"> */}
      <div className=" relative mx-auto max-w-7xl py-1 px-6 sm:py-1 lg:px-8 lg:py-1">
        <div className="flex min-h-full items-center justify-center py-5 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <Image
                className="mx-auto"
                width={40}
                height={40}
                priority
                src={HackerLogo}
                alt="Crypto Research Hub"
              />
              <h2 className="mt-2 text-center text-2xl font-bold tracking-tight text-polyO5">
                {title}
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                discover whats inside{' '}
                <a href="#" className="font-medium text-poly7 hover:text-poly6">
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
                    {title}
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
                <div>
                  <label className="text-base font-medium text-gray-900">
                    {description}
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
                            className="h-4 w-4 border-poly2 text-poly7 focus:ring-poly6"
                          />
                          <label
                            htmlFor={notificationMethod.id}
                            className="ml-3 block text-sm font-medium text-poly7"
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
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-polyO5 py-2 px-4 text-sm font-medium text-white hover:bg-polyO6 focus:outline-none focus:ring-2 focus:ring-poly3 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-poly3 group-hover:text-poly2"
                      aria-hidden="true"
                    />
                  </span>
                  Scan Wallet
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
