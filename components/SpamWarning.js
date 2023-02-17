import { ShieldExclamationIcon } from '@heroicons/react/20/solid'

export default function SpamWarning() {
  return (
    <div className="rounded-md bg-poly2 p-1 shadow-sm">
      <div className="flex">
        <div className="flex-shrink-0">
          <ShieldExclamationIcon className="h-5 w-5 text-poly5" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-bold text-poly5">Click <span className="text-polyO4">Highlighted</span> NFT for Spam Details</h3>
        </div>
      </div>
    </div>
  )
}
