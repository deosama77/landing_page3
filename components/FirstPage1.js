import React , {useRef} from 'react';
import Image from "next/image";
import {Container, Row, Col} from "react-bootstrap";

import GoldTopV from '../public/images/page_1/top_gold_v.png';
import GoldBottomV from '../public/images/page_1/gold_bottom_v.png';
import GoldBottomH from '../public/images/page_1/gold_bottom_h.png';
import GoldTopH from '../public/images/page_1/top_gold_h.png';

import styles from "../styles/First2.module.css";
import Logo from "../public/images/page_1/logo_ad.png";

import TopLeftImage_v from "../public/images/page_1/top_left_image_new.png";


import Icone2 from "../public/images/page_1/icons_2_new_c.png";
import Icone3 from "../public/images/page_1/icons_1_03_new.png";
import Icone4 from "../public/images/page_1/icons_1_04_new.png";

import RightVertical from '../public/images/page_1/right_vertical.png';
import RightHorizontal from '../public/images/page_1/right_horizontal.png'

import {Animate, useElementOnScreen} from "../hooks/useElementOnScreen";

function FirstPage1(props) {

    const firstAnimate=useRef();
    useElementOnScreen(firstAnimate);

    return (
        <>

            <div className={'position-absolute '+styles.gold_top_vertical}>
                <Image src={GoldTopV} alt={"Gold Top"}
                       fill={+true}></Image>
            </div>

            <div className={'position-absolute '+styles.gold_top_horizontal}>
                <Image src={GoldTopH} alt={"Gold Top"}
                       fill={+true}></Image>
            </div>
            <div className={'position-absolute '+styles.top_left_image_h}>
                <Image src={TopLeftImage_v}
                       alt={"first picture"}
                       fill={+true}
                ></Image>
            </div>
            <div className={'position-absolute '+styles.right_image_v}>
                <Image src={RightVertical} alt={'right vertical'}
                       fill={+true}
                ></Image>
            </div>

            <div className={'position-absolute '+styles.right_image_h}
                 style={{width:'430px',height:"700px" , top:'0px' ,right:0}}>
                <Image src={RightHorizontal} alt={'right horizontal'}
                       fill={+true}
                ></Image>
            </div>

            <Container fluid={+true}
                       className={'position-relative '+styles.content}>
               <Row>
                   <Col xs={12}>
                       <div className={'position-relative '+styles.top_left_image_v}>
                       <Image src={TopLeftImage_v}
                              alt={"first picture"}
                              fill={+true}
                       ></Image>
                   </div>

                   </Col>

                   <Col xs={12} className={'p-0 pt-3 pb-2 mx-0 text-start d-flex flex-column justify-content-center align-items-start align-items-lg-center'}>
                       <div className={'text-center text-md-start py-md-4'}>
                           <div className={'h2 my-2  text-center text_font  px-md-1 '+styles.header_top}>马来西亚首创</div>
                           <div className={'h1 my-2 text-center header_font  px-md-1 '+styles.header_middle}>「捏骨式」</div>
                           <div className={'h2 my-2 text-center text_font  px-md-1 '+styles.header_bottom}>半永久纹绣品牌</div>
                       </div>
                   </Col>
               </Row>

                <Animate.ScaleIn>
                    <Row className={'px-md-1 px-lg-2 d-flex flex-column flex-lg-row' +
                        ' justify-content-lg-between '+styles.group_texts}>
                        <div className={'py-2 px-lg-0 w-auto '}>
                            <div className={' py-1  border rounded-3 d-inline-flex align-items-center '} style={{backgroundColor:'#f9f0f0'}}>
                               <div className={styles.icon_container}>
                                   <Image src={Icone2} alt={"icone 2"}
                                          fill={+true}
                                          className={'rounded-circle mx-2'}
                                   ></Image>
                               </div>
                                <div className={"h5 mb-0 px-1 px-md-3 text_font "+styles.text_second} >自然伪妆感</div>
                            </div>
                        </div>
                        <div   className={'py-2 px-lg-0 w-auto'}>
                            <div className={'py-1  border  rounded-3 d-inline-flex align-items-center'} style={{backgroundColor:'#f9f0f0'}}>
                                <div className={styles.icon_container}>
                                <Image src={Icone3} alt={"icone 2"}
                                       fill={+true}
                                       className={'rounded-circle mx-2'}
                                ></Image>
                                </div>
                                    <div className={"h5 mb-0 px-1 px-md-3 "+styles.text_second}>科技修饰脸型</div>
                            </div>
                        </div>
                        <div   className={'py-2 pb-0  px-lg-0 w-auto'}>
                            <div className={'py-1  border  rounded-3 d-inline-flex align-items-center'} style={{backgroundColor:'#f9f0f0'}}>
                                <div className={styles.icon_container}>
                                <Image src={Icone4} alt={"icone 2"}
                                       fill={+true}
                                       className={'rounded-circle mx-2'}
                                ></Image>
                                </div>
                                    <div className={"h5 mb-0 px-1 px-md-3 "+styles.text_second}>无疼过程</div>
                            </div>
                        </div>
                    </Row>
                </Animate.ScaleIn>

            </Container>

            <div className={'position-absolute '+styles.gold_bottom_v}
                 >
                <Image src={GoldBottomV} alt={"Gold bottom"}
                       fill={+true}></Image>
            </div>

            <div className={'position-absolute '+styles.gold_bottom_h}
                 >
                <Image src={GoldBottomH} alt={"Gold bottom horizontal"}
                       fill={+true}></Image>
            </div>

            <div className={'position-absolute '+styles.logo_vertical}>
                <Image src={Logo} alt={"Logo Bottom"}
                       fill={+true}></Image>
            </div>

        </>
    );
}

export default FirstPage1;
