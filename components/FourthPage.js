import React from 'react';
import styles from '../styles/Fourth.module.css';
import Image from "next/image";
import ClickIcon from "../public/images/buttons_01.png";
import ImageVertical from '../public/images/page_4/vertical_1.png';

function FourthPage(props) {
    return (
       <div className={'position-relative'}>
           <div className={styles.right_image_text}></div>

           <div className={styles.image_vertical}>
               <Image src={ImageVertical} alt={"image vertical "}
               fill={+true}></Image>
           </div>
           <div className={styles.text_position}>
               <div className={'h1'}>独有鼻影技术</div>
               <div className={'h1'}>增强面部立体度</div>
               <div className={'d-flex align-items-start justify-content-center'}>
                   <Image className={'fa-fade'}
                          src={ClickIcon} alt={"click icon"}
                          width={220} height={90}></Image>
               </div>
           </div>
           <div className={styles.text_vertical}>
               <div className={'h1'}>独有鼻影技术</div>
               <div className={'h1'}>增强面部立体度</div>
           </div>

           <div className={"py-2 px-2 border border-3 rounded-5 position-absolute "+styles.ex_up}>眉形包着眼睛的弧线</div>
           <div className={'py-2 px-5 border border-3 rounded-5 position-absolute '+styles.ex_down}>
               <div>体现鼻影效果</div>
              <div>增加立体感</div>
           </div>

</div>
    );
}

export default FourthPage;
