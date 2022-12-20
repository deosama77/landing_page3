import React , {useRef} from 'react';
import Image from "next/image";
import {Container, Row, Col} from "react-bootstrap";

import GoldTopV from '../public/images/page_1/gold_top_v.png';
import GoldBottomV from '../public/images/page_1/gold_bottom_v.png';
import GoldBottomH from '../public/images/page_1/gold_bottom_h.png';
import GoldTopH from '../public/images/page_1/gold_top_h.png';

import styles from "../styles/First1.module.css";
import Logo from "../public/images/page_1/Sense_Logo.png";

import TopLeftImage_v from "../public/images/page_1/top_left_cut.png";
import TopLeftImage_h from '../public/images/page_1/top_left_h.png'


import Icone2 from "../public/images/page_1/icons_2_new_c.png";
import Icone3 from "../public/images/page_1/icons_1_03_new.png";
import Icone4 from "../public/images/page_1/icons_1_04_new.png";

import RightVertical from '../public/images/page_1/right_vertical.png';
import RightHorizontal from '../public/images/page_1/right_horizontal.png'

import {Animate, useElementOnScreen} from "../hooks/useElementOnScreen";

function FirstPage(props) {
    const firstAnimate=useRef();
    useElementOnScreen(firstAnimate);

    return (
        <>
            <div className={'position-absolute '+styles.right_image_v}
                 style={{width:'68%',height:"70vh" , top:'0px' ,right:0}}>
                <Image src={RightVertical} alt={'right vertical'}
                       fill={+true}
                ></Image>
            </div>

            <div className={'position-absolute '+styles.right_image_h}
                 style={{width:'50%',height:"120vh" , top:'0px' ,right:0}}>
                <Image src={RightHorizontal} alt={'right horizontal'}
                       fill={+true}
                ></Image>
            </div>

        <Container fluid={+true}>
            <Row>
                <Col xs={8} className={'m-0 p-0'}>
                    <div className={'position-relative '+styles.gold_top_vertical} style={{width: '90%', height: '25vh'}}>
                        <Image src={GoldTopV} alt={"Gold Top"}
                               fill={+true}></Image>
                    </div>

                    <div className={'position-relative '+styles.gold_top_horizontal} style={{width: '90%', height: '30vh'}}>
                        <Image src={GoldTopH} alt={"Gold Top"}
                               fill={+true}></Image>
                    </div>
                </Col>

            </Row>
            <Row>
                <Col xs={9} md={10} className={'p-0 m-0 px-1  position-relative'}>
                    <Container fluid={+true}>
                        <Row className={'align-items-start justify-content-center'}>
                            <Col xs={12} className={'m-0 p-0 '+styles.top_left_image_container} >
                                <div className={'position-relative '+styles.top_left_image_v}>
                                    <Image src={TopLeftImage_v}
                                           alt={"first picture"}
                                           fill={+true}
                                    ></Image>
                                </div>

                                <div className={'position-relative '+styles.top_left_image_h}>
                                    <Image src={TopLeftImage_h}
                                           alt={"first picture"}
                                           fill={+true}
                                    ></Image>
                                </div>
                            </Col>

                            <Col xs={12} className={'p-0 mx-0 text-start d-flex flex-column justify-content-center align-items-start align-items-lg-center'}>
                                  <div className={'text-center text-md-start'}>
                                    <div className={'h2 my-2  text-center text_font  px-md-1 '+styles.header_top}>马来西亚首创</div>
                                    <div className={'h1 my-2 text-center header_font  px-md-1 '+styles.header_middle}>「捏骨式」</div>
                                    <div className={'h2 my-2 text-center text_font  px-md-1 '+styles.header_bottom}>半永久纹绣品牌</div>
                                  </div>
                                  </Col>

                        </Row>
                        <Animate.ScaleIn>
                        <Row className={'px-md-1 px-lg-4 flex-column flex-lg-row justify-content-md-center'}>
                            <Col  className={'py-2 px-md-5 px-lg-0'}>
                                <div className={' py-md-3 py-1 px-1  border rounded-3 d-inline-flex align-items-center'} style={{backgroundColor:'#f9f0f0'}}>
                                    <Image src={Icone2} alt={"icone 2"}
                                           width={40} height={40}
                                           className={'rounded-circle mx-2'}
                                    ></Image>
                                    <div className={"h5 mb-0 px-md-3 "+styles.text_second} >自然伪妆感</div>
                                </div>
                            </Col>
                            <Col   className={'py-2 px-md-5 px-lg-0'}>
                                <div className={' py-md-3 py-1 px-1  border  rounded-3 d-inline-flex align-items-center'} style={{backgroundColor:'#f9f0f0'}}>
                                    <Image src={Icone3} alt={"icone 2"}
                                           width={40} height={40}
                                           className={'rounded-circle mx-2'}
                                    ></Image> <div className={"h5 mb-0 px-md-3 "+styles.text_second}>科技修饰脸型</div>
                                </div>
                            </Col>
                            <Col   className={'py-2 pb-0 px-md-5 px-lg-0'}>
                                <div className={'py-md-3 py-1 px-1  border  rounded-3 d-inline-flex align-items-center'} style={{backgroundColor:'#f9f0f0'}}>
                                    <Image src={Icone4} alt={"icone 2"}
                                           width={40} height={40}
                                           className={'rounded-circle mx-2'}
                                    ></Image> <div className={"h5 mb-0 px-md-3 "+styles.text_second}>无疼过程</div>
                                </div>
                            </Col>

                        </Row>
                        </Animate.ScaleIn>
                    </Container>

                </Col>

            </Row>

            <Row className={'align-items-end '+styles.bottom_gold_container}>
                <Col xs={12} className={'m-0 p-0'}>
                        <div className={'position-relative '+styles.goldBotomV} style={{width: '100%', height: '33vh'}}
                             >
                            <Image src={GoldBottomV} alt={"Gold Top"}
                                   fill={+true}></Image>
                            <div className={'position-absolute '+styles.logo_vertical}>
                                <Image src={Logo} alt={"Gold Top"}
                                       fill={+true}></Image>
                            </div>
                        </div>

                    <div className={'position-relative '+styles.goldBotomH}
                         style={{width: '100%', height: '50vh'}}>
                        <Image src={GoldBottomH} alt={"Gold bottom horizontal"}
                               fill={+true}></Image>
                        <div className={'position-absolute '+styles.logo_horizontal}>
                            <Image src={Logo} alt={"Gold Top"}
                                   fill={+true}></Image>
                        </div>
                    </div>

                    </Col>

            </Row>
        </Container>
            </>
    );
}

export default FirstPage;
