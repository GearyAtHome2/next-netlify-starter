import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import React, { useState } from "react";

export default function Home() {

    const img1="./safeImages/test1.png";
    const img2="./safeImages/test2.png";
    const img3="./safeImages/test3.png";
    const img4="./safeImages/test4.png";
    const img5="./safeImages/test5.png";
    const imgGameOver="./images/go.png"


    const randomNumberInRange = (size) => {
        console.log("generating random number between 0 and "+size)
        let ranNum = Math.floor(Math.random() * (size));
        console.log("generated random number:"+ranNum)
        return ranNum;
    };


    const [imageUrl, updateImageUrl] = useState('images/horse.jpg');
    const [imageList, updateImageList] = useState([img1, img2, img3, img4])
    const [num, setNum] = useState(randomNumberInRange(imageList.length));

    const handleClick = () => {
        console.log("----------------handling click-----------------")
        if (imageList.length ==0){
            updateImageUrl(imgGameOver)
        } else {
            setNum(randomNumberInRange(imageList.length-1));
            updateImageUrl(imageList[num]);
            removeIndexFromImageList(num)
        }
    };

    function removeIndexFromImageList(index){
        let tempImageList=imageList
        tempImageList.splice(index,1)
        updateImageList(tempImageList);
    }

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="wrapper">
            <img src={imageUrl} key={imageUrl} alt=""/>
            <button onClick={handleClick}>
                Pick a card for me!
            </button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
