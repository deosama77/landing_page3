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

import RightVertical from '../public/images/page_1/right_v.png';
import HImage from '../public/images/page_1/horizontal_01.png'

import {Animate, useElementOnScreen} from "../hooks/useElementOnScreen";

function FirstPage1(props) {
    const firstAnimate=useRef();
    useElementOnScreen(firstAnimate);

    return (
        <>
            <div className={'position-absolute '+styles.right_image_v}
                 style={{width:'120%',height:"180vh" , top:'0px' ,right:0}}>
                <Image src={RightVertical} alt={'right vertical'}
                       fill={+true}
                ></Image>
            </div>

            <div className={'position-absolute '+styles.right_image_h}
                 style={{width:'50%',height:"120vh" , top:'0px' ,right:0}}>
                <Image src={HImage} alt={'right horizontal'}
                       fill={+true}
                ></Image>
            </div>

        <Container fluid={+true}>
            <Row>
                <Col xs={8} className={'m-0 p-0'}>
                    <div className={'position-relative'} style={{width: '100%', height: '30vh'}}>
                        <Image src={GoldTopV} alt={"Gold Top"}
                               fill={+true}></Image>
                    </div>
                </Col>

            </Row>
            <Row>
                <Col xs={8} md={10} className={'p-0 m-0 position-relative'} style={{left:'-10px'}}>
                    <Container fluid={+true}>
                        <Row className={'align-items-start justify-content-center'}>
                            <Col className={'m-0 p-0  '+styles.top_left_image_container} xs={12}>
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

                            <Col xs={12} className={'p-0 mx-0 text-start d-flex flex-column justify-content-center align-items-start align-items-md-center'}>
                                  <div className={'text-center'}>
                                    <h2 className={'h1 my-2  text-center '+styles.header_top}>马来西亚首创</h2>
                                    <h1 className={'h1 my-2 text-center '+styles.header_middle}>「捏骨式」</h1>
                                    <h2 className={'h1 my-2 text-center '+styles.header_bottom}>半永久纹绣品牌</h2>
                                  </div>
                                  </Col>

                        </Row>
                        <Animate.ScaleIn>
                        <Row className={'justify-content-center'}>

                            <Col xs={12} md={6} lg={4} className={'py-2'}>
                                <div className={'px-md-3 py-md-3 py-2 px-2 border rounded-3 d-inline-flex align-items-center'} style={{backgroundColor:'#f9f0f0'}}>
                                    <Image src={Icone2} alt={"icone 2"}
                                           width={40} height={40}
                                           className={'rounded-circle mx-2'}
                                    ></Image>
                                    <div className={"h4 mb-0"}>自然伪妆感</div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} lg={4}  className={'py-2'}>
                                <div className={'px-md-3 py-md-3 py-2 px-2 border  rounded-3 d-inline-flex align-items-center'} style={{backgroundColor:'#f9f0f0'}}>
                                    <Image src={Icone3} alt={"icone 2"}
                                           width={40} height={40}
                                           className={'rounded-circle mx-2'}
                                    ></Image> <div className={"h4 mb-0"}>科技修饰脸型</div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} lg={4}  className={'py-2'}>
                                <div className={'px-md-3 py-md-3 py-2 px-2 border  rounded-3 d-inline-flex align-items-center'} style={{backgroundColor:'#f9f0f0'}}>
                                    <Image src={Icone4} alt={"icone 2"}
                                           width={40} height={40}
                                           className={'rounded-circle mx-2'}
                                    ></Image> <div className={"h4 mb-0"}>无疼过程</div>
                                </div>
                            </Col>

                        </Row>
                        </Animate.ScaleIn>
                    </Container>

                </Col>

            </Row>

            <Row className={'align-items-end'}>
                <Col xs={12} className={'m-0 p-0'}>
                        <div className={'position-relative '+styles.goldBotomV} style={{width: '100%', height: '35vh'}}
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
                        <div className={'position-absolute'}
                             style={{width: '280px', height: '220px'
                            , right:-10 , top:35}}>
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

export default FirstPage1;
