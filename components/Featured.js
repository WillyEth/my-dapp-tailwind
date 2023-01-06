import { BoltIcon, GlobeAltIcon, RocketLaunchIcon, TrophyIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Discover',
    description: 'NFTs have the potential to revolutionize the way we think about and use digital assets.',
    icon: GlobeAltIcon,
  },
  {
    name: 'NFT Mint',
    description: 'Show your support for the project by minting NFTs with voting power.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Technology',
    description:
      'NFTs can represent a wide range of assets, such as real estate, artwork, event tickets, gaming assets, and even voting rights in decentralized organization',
    icon: BoltIcon,
  },
  {
    name: 'Celebrate Web3',
    description:
      'Our project aims to advance the development and use of NFTs. We believe that NFTs have the potential to fundamentally change the way we think about and use digital assets, and are committed to driving innovation in this space.',

    icon: TrophyIcon,
  },
]

export default function Featured() {
  return (
    <div className="overflow-hidden">
      <div className="  relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8 lg:py-40">
        <svg
          className="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-100" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
          <div className="lg:col-span-1">
            {/* <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unleashing</h2> */}
            <h2 className="bg-gradient-to-tr from-poly3 to-poly6 bg-clip-text text-4xl font-extrabold text-transparent">
              Unleashing
            </h2>
            <h2 className="bg-gradient-to-tr from-poly4 to-poly6 bg-clip-text text-4xl font-extrabold text-transparent">
              the potential of NFT projects
            </h2>
            {/* <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              the potential of NFT projects
            </h2> */}
            <br></br>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Cutting-edge tech that unlocks unlimited possibilities
            </h2>
          </div>
          <dl className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-12 lg:col-span-2 lg:mt-0">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-polyO5 text-white">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
