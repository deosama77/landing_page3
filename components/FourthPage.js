import React from 'react';
import {Container  , Row , Col} from "react-bootstrap";
import Image from "next/image";
import PageRight from "../public/images/page_4/page_4_new.png";
import styles from '../styles/Fourth.module.css';

function FourthPage(props) {
    return (
       <>
           <div className={styles.right_image_text}></div>
           <div className={styles.text_position}>
               <div className={'h1'}>独有鼻影技术</div>
               <div className={'h1'}>增强面部立体度</div>
           </div>
           <div className={"py-2 px-2 border border-3 rounded-5 position-absolute "+styles.ex_up}>眉形包着眼睛的弧线</div>
           <div className={'py-2 px-5 border border-3 rounded-5 position-absolute '+styles.ex_down}>
               <div>体现鼻影效果</div>
              <div>增加立体感</div>
           </div>

   </>

    );
}

export default FourthPage;
