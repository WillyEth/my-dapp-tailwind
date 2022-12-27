/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import { Disclosure, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import poweredByWhite from '../public/poweredbyWhite.svg'
import Image from 'next/image'
import primaryToken from '../public/primaryToken.svg'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const product = {
  name: 'By Minting this NFT',
  price: '.02 MATIC',
  rating: 5,
  images: [
    {
      id: 1,
      name: 'Front View',
      // src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      src: '/primaryToken.svg',
      alt: 'Nft Image',
    },
    {
      id: 2,
      name: 'Angled view',
      // src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      src: '/guru.png',
      alt: 'Nft Image',
    },
    {
      id: 3,
      name: 'Angled view',
      // src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      src: '/bnb-bnb-logo.svg',
      alt: 'Nft Image',
    },
    {
      id: 4,
      name: 'Angled view',
      // src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      src: '/Bitcoin.svg',
      alt: 'Nft Image',
    },

    // More images...
  ],
  // colors: [
  //   {
  //     name: 'Washed Black',
  //     bgColor: 'bg-gray-700',
  //     selectedColor: 'ring-gray-700',
  //   },
  //   { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
  //   {
  //     name: 'Washed Gray',
  //     bgColor: 'bg-gray-500',
  //     selectedColor: 'ring-gray-500',
  //   },
  // ],
  description: `
    <p>As a member of the Crypto Research Hub community</p>
    <p>The pledge is a commitment made by a member of the Crypto Research Hub community to prioritize the security of their cryptocurrency assets. The pledge includes taking all necessary precautions to protect their seed phrase and private keys, educating themselves on the latest threats and scams, and being vigilant in protecting their assets. The member also commits to never sharing their seed phrase or private keys with anyone, recognizing that the safety of their cryptocurrency assets depends on the security of these keys.</p>
  `,
  details: [
    {
      name: 'Features',
      items: [
        'Use as a Avatar show the Crypto community your Pledge of Safety',
        'Help fund the Crypto Research Hub',
        'Members Benfits TBD',
        'Low Gas Fee on PolyGon Network',
        'Low Mint Fee for all on PolyGon Network',
      ],
    },
    {
      name: 'PolyGon Network',
      items: [
        'Broader Reach',
        'Speed and Cheapness',
        'Lower Gas Fee Compared to Ethereum',
      ],
    },
    // More sections...
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MintNft() {
  // const [selectedColor, setSelectedColor] = useState(product.colors[0])

  return (
    <div className=" relative mx-auto max-w-7xl py-1 px-6 sm:py-1 lg:px-10 lg:py-1">
      <div>
        <div className="sm:py-15 mx-auto max-w-2xl py-8 px-4 sm:px-6 lg:max-w-6xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Image gallery */}
            <Tab.Group as="div" className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {product.images.map((image, index) => (
                    <Tab
                      key={index}
                      className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-poly2 text-sm font-medium uppercase text-gray-900 hover:bg-poly3 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only"> {image.name} </span>
                          <span className="absolute inset-0 overflow-hidden rounded-md">
                            <Image
                              src={image.src}
                              width={160}
                              height={160}
                              alt="Nft Image"
                              priority
                              className="h-full w-full object-cover object-center"
                            />
                          </span>
                          <span
                            className={classNames(
                              selected ? 'ring-polyO4' : 'ring-transparent',
                              'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                {product.images.map((image) => (
                  <Tab.Panel key={image.id}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover object-center sm:rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <div className="flex justify-between ">
                <ConnectButton
                  accountStatus={{
                    smallScreen: 'address',
                    largeScreen: 'full',
                  }}
                />

                <Image
                  src={poweredByWhite}
                  alt="Powered by PolyGon"
                  width={231}
                  height={44}
                  className="pl-10"
                />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {product.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">NFT information</h2>
                <div className="flex justify-between">
                  <p className="text-3xl tracking-tight text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>

              {/* Reviews */}
              <div className="mt-3">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? 'text-polyO4'
                            : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div
                  className="space-y-6 text-base text-gray-700"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <form className="mt-6">
                {/* Colors */}
                {/* <div>
                <h3 className="text-sm text-gray-600">Color</h3>

                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-2"
                >
                  <RadioGroup.Label className="sr-only">
                    {' '}
                    Choose a color{' '}
                  </RadioGroup.Label>
                  <span className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedColor,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {' '}
                          {color.name}{' '}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.bgColor,
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </span>
                </RadioGroup>
              </div> */}

                <div className="sm:flex-col1 mt-10 flex">
                  <button
                    type="submit"
                    disabled={true}
                    className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-poly5 py-3 px-8 text-base font-medium text-white hover:bg-poly6 focus:outline-none focus:ring-2 focus:ring-poly8 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                  >
                    Minting soon Images Placeholders
                  </button>

                  <button
                    type="button"
                    className="ml-4 flex items-center justify-center rounded-md py-3 px-3 text-polyO7 hover:bg-poly5 hover:text-poly7"
                  >
                    {/* <HeartIcon
                    className="h-6 w-6 flex-shrink-0"
                    aria-hidden="true"
                  /> */}
                    <Image
                      height={40}
                      weidth={40}
                      alt="Matic Token"
                      src={primaryToken}
                    />
                    <span className="sr-only">Add to favorites</span>
                  </button>
                </div>
              </form>

              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="divide-y divide-gray-200 border-t">
                  {product.details.map((detail) => (
                    <Disclosure as="div" key={detail.name}>
                      {({ open }) => (
                        <>
                          <h3>
                            <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                              <span
                                className={classNames(
                                  open ? 'text-poly6' : 'text-gray-900',
                                  'text-sm font-medium'
                                )}
                              >
                                {detail.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="block h-6 w-6 text-poly6 group-hover:text-poly9"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="block h-6 w-6 text-poly6 group-hover:text-poly9"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel
                            as="div"
                            className="prose prose-sm pb-6"
                          >
                            <ul role="list">
                              {detail.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
