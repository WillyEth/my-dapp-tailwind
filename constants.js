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
 <p>Congratulations on owning a NFT with a vote in a DAO! This means that you have a say in the decision-making process of the decentralized organization that the DAO represents. As a holder of a voting NFT, you have the power to contribute to the direction and governance
  of the DAO by casting your vote on important matters. Remember to stay informed and exercise your right to vote wisely. </p>`,
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

