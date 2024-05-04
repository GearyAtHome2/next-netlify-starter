import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import React, { useState } from "react";

export default function Home() {
    const [num, setNum] = useState(0);

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    const image0=require("/horse.jpg")
    const image1=require("/glassGrind.jpg")

    let imageUrl='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiq57UyI71H6Lz2isMdomE4z2JNekyXhlxnoMpMgbRDAkVG2R5'

    const handleClick = () => {
        setNum(randomNumberInRange(1, 20));
       if (num>10){
            imageUrl='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiq57UyI71H6Lz2isMdomE4z2JNekyXhlxnoMpMgbRDAkVG2R5';
            setState({
                imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiq57UyI71H6Lz2isMdomE4z2JNekyXhlxnoMpMgbRDAkVG2R5',
                imageHash: Date.now()
            })
            console.log("updating image url (larger) for num="+num)
            console.log("imageUrl is "+imageUrl)
       } else {
            imageUrl='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRx8zs6zgLFvexq_8mNEPed7uVHn73vx3ieUBueftliKW8mmRUo';
            setState({
                imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRx8zs6zgLFvexq_8mNEPed7uVHn73vx3ieUBueftliKW8mmRUo',
                imageHash: Date.now()
            })
            console.log("updating image url (smaller) for num="+num)
            console.log("imageUrl is "+imageUrl)
       }
       setState({
          imageSrc: '...',
          imageHash: Date.now()
       })
       this.forceUpdate()
    };

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="wrapper">
            <img src={imageUrl} key={imageUrl} alt="Horse"/>
                        <img src={horse} key={imageUrl} alt="HorseLocal"/>
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
