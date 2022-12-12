import React , {useRef} from 'react';
import {Container , Col , Row} from "react-bootstrap";
import styles from '../styles/First.module.css'
import Image from "next/image";
import TopLeftImage from '../public/images/page_1/Icons_1_21.png'
import Logo from '../public/images/page_1/Sense_Logo.png';

import Icone2 from '../public/images/page_1/icons_2_new_c.png';
import Icone3 from '../public/images/page_1/icons_1_03_new.png';
import Icone4 from '../public/images/page_1/icons_1_04_new.png';
import {Animate, useElementOnScreen} from "../hooks/useElementOnScreen";


function FirstPage(props) {
    const firstAnimate=useRef();
    useElementOnScreen(firstAnimate);

    return (
        <>
            <div className={'position-absolute ' +styles.logo}>
                <Image src={Logo} alt={"logo picture"}
                       width={280} height={200}
                       className={styles.logo_image}
                ></Image>
            </div>
            <div className={styles.first_page_background}>
                <Image src={TopLeftImage}
                       className={styles.top_left_image}
                       alt={"first picture"}
                       width={220}
                       height={180}
                ></Image>
                <div className={'d-flex flex-column align-items-center justify-content-center position-relative '+styles.content_1}>
                    <h2 className={'my-2 '+styles.header_top}>马来西亚首创</h2>
                    <h1 className={'my-2 '+styles.header_middle}>「捏骨式」</h1>
                    <h2 className={'my-2 '+styles.header_bottom}>半永久纹绣品牌</h2>
                </div>
                <Animate.ScaleIn>
                    <div className={'pb-5 pb-md-2 mx-3 d-flex flex-column flex-md-row justify-content-center align-items-start align-items-md-stretch position-relative '+styles.content_2}>

                        <div className={'my-2 my-md-0 px-2 py-2 mx-md-2  border rounded mx-1 d-flex flex-row  align-items-center justify-content-center'} style={{backgroundColor:'#f9f0f0'}}>
                            <Image src={Icone2} alt={"icone 2"}
                                   width={40} height={40}
                                   className={'rounded-circle mx-2'}
                            ></Image>
                            <div className={"h4 mb-0"}>自然伪妆感</div>
                        </div>

                        <div className={'my-1 my-md-0 px-2 py-2 mx-md-2  border  rounded mx-1 d-inline-flex align-items-center'} style={{backgroundColor:'#f9f0f0'}}>
                            <Image src={Icone3} alt={"icone 2"}
                                   width={40} height={40}
                                   className={'rounded-circle mx-2'}
                            ></Image> <div className={"h4 mb-0"}>科技修饰脸型</div>
                        </div>

                        <div className={'my-1 my-md-0 px-2 py-2 mx-md-2  border  rounded mx-1 d-inline-flex align-items-center'} style={{backgroundColor:'#f9f0f0'}}>
                            <Image src={Icone4} alt={"icone 2"}
                                   width={40} height={40}
                                   className={'rounded-circle mx-2'}
                            ></Image> <div className={"h4 mb-0"}>无疼过程</div>
                        </div>

                    </div>
                </Animate.ScaleIn>
            </div>
        </>
    );
}

export default FirstPage;
