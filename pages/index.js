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
       } else {
            imageUrl='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRx8zs6zgLFvexq_8mNEPed7uVHn73vx3ieUBueftliKW8mmRUo';
            console.log("updating image url (smaller) for num="+num)
       }
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
      <img src={imageUrl} alt="Horse" />
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
