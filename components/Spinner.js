import React from 'react'

const Spinner = () => {
  return (
    <>
      <div className="mt-10 flex items-center justify-center space-x-2">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-blue-900"></div>
        <p className="font-bold text-blue-900">Loading..</p>
      </div>
    </>
  )
}

export default Spinner
