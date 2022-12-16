import React from 'react';
import ImageHorizontal from "../public/images/page_4/page_4_new.png";
import Image from "next/image";
import styles from "../styles/Fourth2.module.css";
import ImageVertical from "../public/images/page_4/vertical_1.png";

function FourthPage2(props) {
    return (
        <>
            <div style={{height: '100vh'}} className={styles.image_h}>
                <div
                    className={"py-2 px-2 border border-3 rounded-5 position-absolute " + styles.ex_up_horizontal}>眉形包着眼睛的弧线
                </div>
                <div className={'py-2 px-5 border border-3 rounded-5 position-absolute ' + styles.ex_down_horizontal}>
                    <div>体现鼻影效果</div>
                    <div>增加立体感</div>
                </div>
                <div className={'position-absolute'} style={{width: '100%', height: '100%'}}>
                    <Image src={ImageHorizontal} alt={"image horizontal "}
                           fill={+true}></Image>
                    <div className={styles.text_title}>
                        <div className={'h1 ' + styles.title1}>独有鼻影技术</div>
                        <div className={'h1 ' + styles.title2}>增强面部立体度</div>
                    </div>
                </div>
            </div>


            <div style={{height: '150vh'}} className={styles.image_v}>
                <div
                    className={"py-2 px-2 border border-3 rounded-5 position-absolute " + styles.ex_up_horizontal}>眉形包着眼睛的弧线
                </div>
                <div className={'py-2 px-5 border border-3 rounded-5 position-absolute ' + styles.ex_down_horizontal}>
                    <div>体现鼻影效果</div>
                    <div>增加立体感</div>
                </div>
                <div className={'position-absolute '} style={{width: '100%', height: '100%'}}>
                    <Image src={ImageVertical} alt={"image vertical "}
                           style={{top:20}}
                           fill={+true}></Image>
                    <div className={'py-3  w-100 text-center '+styles.text_title}>
                        <div className={'h1 text-center  ' + styles.title1}>独有鼻影技术</div>
                        <div className={'h1 text-center ' + styles.title2}>增强面部立体度</div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default FourthPage2;
