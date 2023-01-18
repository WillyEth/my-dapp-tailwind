const process = require('process')
const dev = process.env.NODE_ENV !== 'production'
export const SERVER = dev ? 'http://localhost:3000' : 'https://nftbutterflylab.com'
export const guruAddr = '0x27A5Cef07fE12dBC45f44Ccf89B8f8672f35ECd6'
export const BTLYAddr = '0x3D748224E4750CA748d5C320A8B2bdF353b77BaB'

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
  Introducing our NFT - a unique, hand-drawn digital collectible granting voting power, future benefits, low price and access to our Polygon-based governance project.
   Don't miss out on the opportunity to own a truly special NFT, have a say in our project, 
   and join the dynamic community on the Polygon blockchain.  
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
      name: 'PolyGon Network',
      items: ['Broader Reach', 'Speed and Cheapness', 'Lower Gas Fee Compared to Ethereum'],
    },
    // More sections...
  ],
}
