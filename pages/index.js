import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import React, { useState } from "react";
import horse from "/images/horse.jpg";

export default function Home() {
    const [num, setNum] = useState(0);

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    let imageUrls=['https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiq57UyI71H6Lz2isMdomE4z2JNekyXhlxnoMpMgbRDAkVG2R5',
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRx8zs6zgLFvexq_8mNEPed7uVHn73vx3ieUBueftliKW8mmRUo'
    ]

    let imageUrl='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiq57UyI71H6Lz2isMdomE4z2JNekyXhlxnoMpMgbRDAkVG2R5'

    const handleClick = () => {
        setNum(randomNumberInRange(1, 20));
       if (num>10){
            imageUrl='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiq57UyI71H6Lz2isMdomE4z2JNekyXhlxnoMpMgbRDAkVG2R5';
            console.log("updating image url (larger) for num="+num)
            console.log("imageUrl is "+imageUrl)
       } else {
            imageUrl='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRx8zs6zgLFvexq_8mNEPed7uVHn73vx3ieUBueftliKW8mmRUo';
            console.log("updating image url (smaller) for num="+num)
            console.log("imageUrl is "+imageUrl)
       }
    };

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <img src={imageUrl} key={imageUrl} alt="Horse"/>
        <div className="wrapper">
            <img src={imageUrl} key={imageUrl} alt="Horse"/>
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
