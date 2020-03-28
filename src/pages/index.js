import Head from 'next/head'

import Layout from 'src/components/Layout'

const Home = () => {
  return (
    <>
      <Head>
        <title>Next Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout />
    </>
  )
}

export default Home
