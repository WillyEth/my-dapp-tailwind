import Head from 'next/head'

export default function MetaTags({
  title = 'NFTs, Simplified: Butterfly Labs',
  description = 'NFTs, Simplified: Butterfly Labs is dedicated to helping individuals and organizations navigate the world of non-fungible tokens (NFTs). Our mission is to provide expert consultation and education on all things NFT, simplifying the process of understanding and utilizing this innovative technology. We aim to empower our clients to make informed decisions about NFT adoption and use, and to help them effectively leverage NFTs to achieve their goals. Whether you are a seasoned veteran of the crypto space or new to the world of NFTs, we are here to guide you every step of the way.',
  URL = 'https://gateway.ipfs.io/ipfs/QmQFMRmr31BwvKepJcyV63QLNGwHtRY17hkbnkZ2Nzkkfa',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@btwit71" />
      {/* {<!-- Primary Meta Tags --> */}
      <title>NFTs Butterfly Labs</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={URL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://my-dapp-tailwind.vercel.app/" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={URL} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://my-dapp-tailwind.vercel.app/"></meta>

      <meta
        name="keywords"
        content="crypto, research, bitcoin, etherum, DYOR, hub, Guru, Matic, Polygon, NFT, Butterfly, Consulting, DAO, Matix"
      />
      <meta name="author" content="Willy Eth" />
      <meta name="copyright" content="Copyright Willy Eth 2023" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>
  )
}
