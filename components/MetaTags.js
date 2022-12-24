import Head from 'next/head'

export default function MetaTags({
  title = 'Crypto Research Hub',
  description = 'Doing your own research in crypto refers to the practice of taking the time to learn and understand cryptocurrencies and the market for them. This often includes reading up on the latest news and developments in the space, analyzing market trends and data, and forming your own opinions and investment strategies based on the information you have gathered. By taking the time to do your own research, you can make informed decisions about your investments in cryptocurrencies and potentially increase your chances of success in the market.',
  image = '../public/twitter.png',
   URL = 'https://nextjs-drab-kappa-57.vercel.app/',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@btwit71" />
      {/* {<!-- Primary Meta Tags --> */}
      <title>Crypto Research Hub</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={URL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="../public/twitter.png" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={URL} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="../public/twitter.png"></meta>

      <meta
        name="keywords"
        content="crypto, research, bitcoin, etherum, DYOR, hub"
      />
      <meta name="author" content="Willy Eth" />
      <meta name="copyright" content="Copyright Willy Eth 2023" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>
  )
}
