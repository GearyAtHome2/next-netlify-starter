import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import React, { useState } from "react";
import "./App.css";

export default function Home() {
    const [num, setNum] = useState(0);

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    const handleClick = () => {
        setNum(randomNumberInRange(1, 20));
    };
  return (
    <div className="container">

      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="test home page" />
        <p className="description">
          Switch this to react
        </p>
      </main>
        <div className="wrapper">
            <h2>Number is: {num}</h2>
            <button onClick={handleClick}>
                Click Me Generate
            </button>
        </div>
      <Footer />
    </div>
  )
}
