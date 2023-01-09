import React from 'react'

const Spinner = () => {
  return (
    <>
      <div className="mt-10 flex items-center justify-center space-x-2">
        <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-poly6"></div>
        <p className="font-bold text-poly5">Loading..</p>
      </div>
    </>
  )
}

export default Spinner
