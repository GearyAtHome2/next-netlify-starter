import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
        <script>
            function showRandomNumber(){
                document.getElementById("myNumber").innerHTML = rando(5, 10);
            }
        </script>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="test home page" />
        <p className="description">
          Switch this to react
        </p>
        <body onload="showRandomNumber();">
            <div id="myNumber"></div>
        </body>
      </main>

      <Footer />
    </div>
  )
}
