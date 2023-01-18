import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

export default function AlertScan() {
  return (
    <div className="rounded-md bg-poly4 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon
            className="h-5 w-5 text-polyR3"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-poly6">
            Attention needed
          </h3>
          <div className="mt-2 text-sm text-poly6">
            <p>
              Unable to scan the address, no NFTs or no tokens found. Please try again.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
