import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import React, { useState } from "react";

export default function Home() {
    const [num, setNum] = useState(0);
    const [imageUrl, updateImageUrl] = useState('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiq57UyI71H6Lz2isMdomE4z2JNekyXhlxnoMpMgbRDAkVG2R5');

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const img0=require('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiq57UyI71H6Lz2isMdomE4z2JNekyXhlxnoMpMgbRDAkVG2R5')
    const img1=require('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiq57UyI71H6Lz2isMdomE4z2JNekyXhlxnoMpMgbRDAkVG2R5')

    const handleClick = () => {
       setNum(randomNumberInRange(1, 20));
       if (num>10) {
            console.log("updating image url (larger) for num="+num)
            updateImageUrl(img0)
            console.log("state url is"+{imageUrl})
       } else {
            console.log("updating image url (smaller) for num="+num)
            updateImageUrl(img1)
            console.log("state url is"+{imageUrl})
       }
    };

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="wrapper">
            <img src={imageUrl} alt=""/>
            <h2>Number is: {num}</h2>

            <button onClick={handleClick}>
                Click Me Generate
            </button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
