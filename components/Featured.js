import {
  BoltIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Discover',
    description: 'Discover the latest news and research on the crypto market.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Mint Project Nft',
    description:
      'Support the Project get in on the ground floor and help us build the future of crypto research.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Wallet Scan',
    description:
      'Quickly Scan your wallet for Tokens or NFTs on the Ethereum or Polygon networks.',
    icon: BoltIcon,
  },
  {
    name: 'Project Goals',
    description:
      'Mission is to provide the best crypto research on the web to become a Crytpo Research Guru.',
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
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-100"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Do your own research
            </h2>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              No one else will
            </h2>
          </div>
          <dl className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-12 lg:col-span-2 lg:mt-0">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-polyO5 text-white">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
