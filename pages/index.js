import Head from 'next/head'
import Header from '@components/Header'
import CardPage1Test from '@components/cardPages/CardPage1Test'

import React, { useState } from "react";

export default function Home() {


    const img1="./images/001.png";
    const img2="./images/002.png";
    const img3="./images/003s.png";
    const img4="./images/004s.png";
    const img5="./images/005s.png";
    const img6="./images/006s.png";
    const img7="./images/007s.png";
    const img8="./images/008s.png";
    const img9="./images/009s.png";
    const img10="./images/010.png";
    const img11="./images/011.png";
    const img12="./images/012.png";
    const img13="./images/013.png";
    const img14="./images/014.png";
    const img15="./images/015s.png";
    const img16="./images/016.png";
    const img17="./images/017s.png";
    const img18="./images/018s.png";
    const img19="./images/019.png";
    const img20="./images/020.png";
    const imgGameOver="./images/go.png"

    const randomNumberInRange = (size) => {
        console.log("generating random number between 0 and "+size)
        let ranNum = Math.floor(Math.random() * (size));
        console.log("generated random number:"+ranNum)
        return ranNum;
    };

    const [imageUrl, updateImageUrl] = useState('images/horse.jpg');
    const [imageList, updateImageList] = useState([
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img1, img2, img11, img12, img13, img14, img16, img19, img20,
    img16, img19, img19, img20
    ])
    const [num, setNum] = useState(randomNumberInRange(imageList.length));
    const [backgroundColour, setBGC] = useState("blue");

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

    function TitleHeader({title}) {
        console.log(title);
        return <h1>{title}</h1>;
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
    </div>
  )
}

//            <TitleHeader title="fdsfgs"/>

//npm run build
