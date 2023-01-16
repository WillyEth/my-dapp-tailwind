import Head from 'next/head'

export default function MetaTags({
  title = 'NFTs, Simplified: Butterfly Labs',
  description = 'NFTs, Simplified: Butterfly Labs is committed to providing expert guidance and education on non-fungible tokens (NFTs). Our goal is to help clients understand and effectively utilize NFTs to achieve their goals, through informed decision making and expert consultation. We serve a diverse range of clients, from experienced crypto enthusiasts to those new to the world of NFTs',
  URL = 'https://nftbutterflylab.com/logo.png',
  mainURL = 'https://nftbutterflylab.com/',
}) {
  return (
    <Head>
      <title>{title}</title>

      {/* {<!-- Primary Meta Tags --> */}
      <title>NFTs Butterfly Labs</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={mainURL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={URL} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@btwit71" />
      <meta name="twitter:site" content="@btwit71"></meta>
      <meta property="twitter:url" content={mainURL} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={URL}></meta>

      <meta
        name="keywords"
        content="crypto, labs, WEB3, research, bitcoin, etherum, DYOR, hub, Guru, Matic, Polygon, NFT, Butterfly, Consulting, DAO, Matic, ETH"
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
