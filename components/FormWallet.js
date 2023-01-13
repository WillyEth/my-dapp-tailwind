import * as React from 'react'
import Image from 'next/image'
import { LockClosedIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

import Logo from '../public/logo.png'

const notificationMethods = [
  { id: 'ETH', title: 'Ethereum' },
  { id: 'MATIC', title: 'Polygon' },
  { id: 'MUMBAI', title: 'Mumbai' },
]

export default function FormWallet({ handleSubmit, title, description }) {
  return (
    <>
      {/* <div className="container mx-auto sm:px-6 lg:px-8"> */}
      <div className=" relative mx-auto max-w-7xl py-1 px-6 sm:py-1 lg:px-8 lg:py-1">
        <div className="flex min-h-full items-center justify-center py-5 px-6 sm:px-9 lg:px-8">
          <div className="w-full max-w-lg space-y-8">
            <div>
              <Image className="mx-auto drop-shadow-md" width={80} height={40} priority src={Logo} alt="Butterfly Lab" />
              <h2 className="mt-2 text-center text-2xl font-bold tracking-tight text-poly5">{title}</h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                discover whats inside powered 
                <p  className="font-medium text-poly7 hover:text-poly6">
                   by NFT Butterfly tech
                </p>
              </p>
            </div>
            <form className="mt-4 space-y-6 " action="#" method="POST" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              {/* <div className="-space-y-px rounded-md shadow-sm">
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
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-poly5 focus:outline-none focus:ring-poly6 sm:text-sm"
                    placeholder="wallet address"
                  />
                </div>
              </div> */}

              <div className="flex ">
                <label htmlFor="wallet-address" className="sr-only">
                  {title}
                </label>
                <div className="relative w-full -space-y-px shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>

                  <input
                    id="wallet-address"
                    name="wallet"
                    type="text"
                    minLength="2"
                    maxLength="42"
                    className="block w-full rounded-lg border border-poly5 bg-poly2 p-2.5 pl-12  text-sm text-poly5 focus:border-poly5 focus:ring-poly4  dark:border-poly5 dark:bg-poly5 dark:text-white dark:placeholder-poly5 dark:focus:border-poly5 dark:focus:ring-poly5"
                    placeholder="Search any ENS name or Ethereum Address"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="ml-1  rounded-lg border border-poly5 bg-poly5 p-2.5 text-sm font-medium text-white hover:bg-poly6 focus:outline-none focus:ring-4 focus:ring-poly5 dark:bg-poly5 dark:hover:bg-poly5 dark:focus:ring-poly5"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-base font-medium text-poly5">{description}</label>
                  <p className="text-sm leading-5 text-poly5">Select your network</p>
                  <fieldset className="mt-4">
                    <legend className="sr-only">Notification method</legend>
                    <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                      {notificationMethods.map((notificationMethod) => (
                        <div key={notificationMethod.id} className="flex items-center">
                          <input
                            id={notificationMethod.id}
                            name="notification"
                            type="radio"
                            value={notificationMethod.id}
                            defaultChecked={notificationMethod.id === 'ETH'}
                            className="form-check-input float-left mt-1
                             h-4 w-4 appearance-none rounded-full border
                              border-poly5 bg-white text-base
                              bg-contain bg-center bg-no-repeat align-top 
                              transition duration-200 checked:border-poly5 checked:bg-poly5 focus:outline-none"
                          />
                          <label htmlFor={notificationMethod.id} className="ml-3 block text-sm font-medium text-poly5">
                            {notificationMethod.title}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}


