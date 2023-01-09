//import Image from 'next/image'pointer

export default function NftImages({ nftList, handleNftClick }) {
   console.log('nftList', nftList)

  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {nftList?.map((nft, index) => (
        <li
          key={index}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <button type="button" onClick={() => handleNftClick(nft)}>
              <img
                width={160}
                className=" mx-auto h-40 w-40 flex-shrink-0 transform  cursor-pointer transition duration-500 ease-in-out hover:scale-105 hover:bg-poly2 hover:shadow-lg"
   
                src={nft.image}
                alt="NFT Image"
              />
            </button>
            <h3 className="mt-6 text-sm font-medium text-gray-900">{nft.name}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-ellipsis break-words text-sm text-gray-500">{nft.description?.substring(0, 500)}</dd>
              <dt className="sr-only">Description</dt>
              <dd className="mt-3">
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  Token # {nft.tokenId?.substring(0, 20)}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            {/* <div className="-mt-px flex divide-x divide-gray-200"> */}
            {/* <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  <EnvelopeIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">Email</span>
                </a>
              </div> */}
            {/* <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${person.telephone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  <PhoneIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">Call</span>
                </a>
              </div> */}
            {/* </div> */}
          </div>
        </li>
      ))}
    </ul>
  )
}
