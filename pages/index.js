import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="title text here"" />
        <p className="description">
          need to get things working by changing this project over to a react one initially
        </p>
      </main>

      <Footer />
    </div>
  )
}
