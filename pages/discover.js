import React from 'react'
import Metatags from '../components/MetaTags'

function Discover() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
      <Metatags />
      <main
      // className="relative bg-center bg-no-repeat"
      // style={{
      //   backgroundImage: `url('/butterfly-blob.svg')`,
      // }}
      >
        <div
          className="relative bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/butterfly-blob.svg')`,
          }}
        >
          {/* <div className="mt-10 flex items-center justify-center space-x-2">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-blue-900"></div>
        <p className="font-bold text-blue-900">Loading..</p>
      </div>  */}
          <p className="mt-10 flex justify-center py-3 text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Under Construction
          </p>
          <p className="mt-10 flex justify-center py-3 text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Let me help you build your Web3 Project
          </p>
          <p className="mt-10 flex justify-center py-3 text-2xl   font-bold tracking-tight text-black  ">
            Contact WillyEth at i3r6jcw0@duck.com
          </p>
        </div>
      </main>
    </div>
  )
}

export default Discover
