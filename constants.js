const process = require('process')


const dev = process.env.NODE_ENV !== 'production'
export const SERVER = dev ? 'http://localhost:3000' : 'https://my-dapp-tailwind.vercel.app/'

export const guruAddr = '0x27A5Cef07fE12dBC45f44Ccf89B8f8672f35ECd6'



export const product = {
  name: 'Guru Mint',
  price: '.01 MATIC ',
  rating: 5,
  images: [
    {
      id: 1,
      name: 'Front View',

      src: '/guru.png',
      alt: 'Nft Image',
    },
    {
      id: 2,
      name: 'Angled view',

      src: '/primaryToken.svg',
      alt: 'Nft Image',
    },
    {
      id: 3,
      name: 'Angled view',
      src: '/guru2.png',
      alt: 'Nft Image',
    },
    {
      id: 4,
      name: 'Angled view',

      src: '/guru3.png',
      alt: 'Nft Image',
    },
  ],

  description: `
 <p> A member of the Crypto Research Guru community pledges to prioritize the security of their cryptocurrency assets by taking necessary precautions to protect their seed phrase and private keys, educating themselves on current threats and scams, and being vigilant in protecting their assets. They also commit to never sharing their seed phrase or private keys with anyone,
 recognizing the importance of these keys for asset security. In addition, minting a non-fungible token (NFT) 
 gives the investor one vote in governance and provides utility from the start. </p>`,
  details: [
    {
      name: 'Features',
      items: [
        'Use as a Avatar show the Crypto community your Pledge of Safety',
        'Low Mint fee Please Help fund the Crypto Research Hub',
        '1 NFT equals 1 Vote on Governance Voting',
        'Low Gas Fee on PolyGon Network',
      ],
    },
    {
      name: 'PolyGon Network',
      items: ['Broader Reach', 'Speed and Cheapness', 'Lower Gas Fee Compared to Ethereum'],
    },
    // More sections...
  ],
}

