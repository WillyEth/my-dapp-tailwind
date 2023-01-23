const process = require('process')
const dev = process.env.NODE_ENV !== 'production'
export const SERVER = dev ? 'http://localhost:3000' : 'https://nftbutterflylab.com'
export const BTLYAddr = '0xCF49e18E28c942a2B8dd04ccb66c4964EaE2Cbf2'

export const product = {
  name: 'NFT Butterfly Lab',
  price: '1 MATIC ',
  rating: 5,
  images: [
    {
      id: 1,
      name: 'Front View',

      src: '/ButterflyNFTlab-.gif',
      alt: 'Nft Image',
    },
    // {
    //   id: 2,
    //   name: 'Angled view',

    //   src: '/primaryToken.svg',
    //   alt: 'Nft Image',
    // },
    // {
    //   id: 3,
    //   name: 'Angled view',
    //   src: '/logo.png',
    //   alt: 'Nft Image',
    // },
    // {
    //   id: 4,
    //   name: 'Angled view',

    //   src: '/guru3.png',
    //   alt: 'Nft Image',
    // },
  ],

  description: `<p>   
Introducing our first NFT - a one-of-a-kind, hand-drawn digital collectible that will flutter its way into your heart and wallet! Not only will it give you voting power in our project, but it also comes with future benefits that are sure to make your wallet soar. And the best part? It's priced lower than a monarch butterfly's weight in gold. Don't miss out on the chance to own a truly unique NFT,
 become a part of our colorful community on the Polygon blockchain, and watch your investment take flight!
 </p>`,
  details: [
    // {
    //   // name: 'Features',
    //   // items: [
    //   //   'Use as a Avatar show the Crypto community your Pledge of Safety',
    //   //   'Low Mint fee Please Help fund the Crypto Research Hub',
    //   //   '1 NFT equals 1 Vote on Governance Voting',
    //   //   'Low Gas Fee on PolyGon Network',
    //   // ],
    // },
    {
      name: 'About PolyGon Network and Disclaimer',
      items: ['Broader Reach', 'Speed and Cheapness', 'Lower Gas Fee Compared to Ethereum'],
    },
    // More sections...
  ],
}
