import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import React, { useState } from "react";

export default function Home() {

    const img0=require('/public/horse.jpg')
    const img1=require('/public/glassGrind.png')

    const [num, setNum] = useState(0);
    const [imageUrl, updateImageUrl] = useState('/public/horse.jpg');
    const imageList, updateImageList] = useState([img0, img1])

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

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
