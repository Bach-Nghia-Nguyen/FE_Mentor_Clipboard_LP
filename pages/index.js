// import Image from 'next/image'

import Footer from 'components/Footer'
import Section1 from 'components/Section1'
import Section2 from 'components/Section2'
import Section3 from 'components/Section3'
import Section4 from 'components/Section4'
import Section5 from 'components/Section5'
import Section6 from 'components/Section6'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Clipboard LP</title>
      </Head>
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </main>
      <Footer />
    </>
  )
}
