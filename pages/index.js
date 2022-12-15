import React from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import FifthPage from "../components/FifthPage";
import { Suspense } from 'react';
import LoadingPage from "../components/LoadingPage";

import EighthPage from "../components/EighthPage";
import FooterPge from "../components/FooterPge";
import {Animate, useElementOnScreen} from "../hooks/useElementOnScreen";
import {useRef} from 'react'
import FirstPage1 from "../components/FirstPage1";
import SeconPage1 from "../components/SeconPage1";
import ThirdPage1 from "../components/ThirdPage1";
import FourthPage1 from "../components/FourthPage1";
import SixthPage1 from "../components/SixthPage1";

import SeventhPage1 from "../components/SeventhPage1";
import FirstPage from "../components/FirstPage";

export default function Home() {
    const firstAnimate=useRef();
    useElementOnScreen(firstAnimate);

  return (
    <div>
      <Head>
        <title>Sense Embroidery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>

         <Suspense fallback={<LoadingPage></LoadingPage>}>
             <Animate.FadeUp>
             <div className={styles.container} style={{minHeight:'100vh'}}>
                 <FirstPage1></FirstPage1>
             </div>
             </Animate.FadeUp>

             <Animate.FadeUp>
             <div  className={styles.container}>
                 <SeconPage1></SeconPage1>
             </div>
             </Animate.FadeUp>

             <Animate.FadeUp>
             <div className={styles.container +' '+styles.container_third}>
                 <ThirdPage1></ThirdPage1>
             </div>
              </Animate.FadeUp>
             <Animate.FadeUp>
             <div className={styles.container}>
                 <FourthPage1></FourthPage1>
             </div>
             </Animate.FadeUp>
             <Animate.FadeUp>
             <div className={styles.container}>
                 <FifthPage></FifthPage>
             </div>
             </Animate.FadeUp>

             <Animate.FadeUp>
             <div className={styles.container}>
                 <SixthPage1></SixthPage1>
             </div>
             </Animate.FadeUp>

             <Animate.FadeUp>
             <div className={styles.container} style={{paddingBottom:'50px'}}>
                 <SeventhPage1></SeventhPage1>
             </div>
             </Animate.FadeUp>
             <Animate.FadeUp>
             <div className={styles.container}>
                 <EighthPage></EighthPage>
             </div>
             </Animate.FadeUp>
             <Animate.FadeUp>
             <div className={styles.container}>
                 <FooterPge></FooterPge>
             </div>
             </Animate.FadeUp>
         </Suspense>

      </div>
        <footer>
            <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin={+true}></script>

            <script
                src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
                crossOrigin={+true}></script>

            <script
                src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossOrigin={+true}></script>
        </footer>
    </div>
  )
}
