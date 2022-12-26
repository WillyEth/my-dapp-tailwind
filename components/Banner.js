import { MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Banner() {
  return (
    <div className="bg-poly6">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-polyO5 p-2">
              <MegaphoneIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 truncate font-medium text-white">
              <span className="md:hidden"> Alpha 1.0 Crypto Research Hub</span>
              <span className="hidden md:inline">
                Big news! We're excited to announce Alpha 1.0 become a Crypto
                Research Guru
              </span>
            </p>
          </div>
          <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-3 sm:w-auto">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-polyO5 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-polyO6"
            >
              Learn More
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon
                className="sm: hidden h-6 w-6 text-white"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
