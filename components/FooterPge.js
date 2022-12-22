import React from 'react';
import {Container , Row,Col} from "react-bootstrap";
import Image from "next/image";
import Icons_13 from '../public/images/pge_9/Icons_13.png';
import Icons_14 from '../public/images/pge_9/Icons_14.png';
import Icons_15 from '../public/images/pge_9/Icons_15.png';
import Icons_16 from '../public/images/pge_9/icons_16.png';
import Icons_17 from '../public/images/pge_9/Icons_17.png';
import Icons_18 from '../public/images/pge_9/icons_18.png';
import Icons_19 from '../public/images/pge_9/icons_19.png';
import Icons_20 from '../public/images/pge_9/Icons_20.png';
import ClickIcon from '../public/images/buttons_02.png';
import ImageBackground from '../public/images/pge_9/weChate.jpg';
import styles from '../styles/Footer.module.css';

function FooterPge(props) {
    return (
        <div className={'px-3 px-md-0'}>
            <div style={{width:'100%' , height:"100%" , position:'absolute',zIndex:-1 ,
            opacity:.2}}>
                <Image src={ImageBackground} alt={"picture"}
                       layout={'fill'}
                ></Image>
            </div>
        <Container>
            <Row>
                <div className={'h1 text-center header_font py-md-3 py-4 '+styles.header_title}>品牌承诺</div>
            </Row>
            <Row>
                <Col className={'py-2 bg-white bg-opacity-50 border border-3 border-warning rounded-5 '}>
                    <Container>
                        <Row className={'py-md-3 py-2 justify-content-center'}>
                            <Col xs={6} sm={4} lg={3} className={'py-md-2 d-flex flex-column align-items-center'}>
                                <div className={'position-relative p-1 '+styles.text_icon}>
                                    <Image src={Icons_13} alt={"imge 13"}
                                          fill={+true}></Image>
                                </div>
                                <div className={'text-center py-2'}>
                                <div className={'h4 '+styles.text1}>粉粉雾雾</div>
                                <div className={'h4 '+styles.text1}>立即效果</div>
                                </div>
                            </Col>
                            <Col xs={6} sm={4}lg={3}  className={'py-md-2 d-flex flex-column align-items-center'}>
                                <div className={'position-relative p-1 '+styles.text_icon}>
                                <Image src={Icons_14} alt={"imge 13"}
                                       fill={+true}></Image>
                                </div>
                                <div className={'text-center py-2'}>
                                <div className={'h4 '+styles.text1}>操作过程</div>
                                <div className={'h4 '+styles.text1}>全程无痛</div>
                                </div>
                            </Col>
                            <Col xs={6} sm={4} lg={3}  className={'py-md-2 d-flex flex-column align-items-center'}>
                                <div className={'position-relative p-1 '+styles.text_icon}>
                                <Image src={Icons_15} alt={"imge 13"}
                                       fill={+true}></Image>
                                </div>
                                <div className={'text-center py-2'}>
                                <div className={'h4 '+styles.text1}>安全&干净</div>
                                </div>
                            </Col>
                            <Col xs={6} sm={4} lg={3}  className={'py-md-2 d-flex flex-column align-items-center'}>
                                <div className={'position-relative p-1 '+styles.text_icon}>
                                <Image src={Icons_16} alt={"imge 13"}
                                       width={50} height={50}></Image>
                                </div>
                                <div className={'text-center py-2'}>
                                <div className={'h4 '+styles.text1}>一遍上色、<br/>百分百留色</div>
                                </div>
                            </Col>


                            <Col xs={6} sm={4} lg={3}  className={'py-md-2 d-flex flex-column align-items-center'}>
                                <div className={'position-relative p-1 '+styles.text_icon}>
                                    <Image src={Icons_17} alt={"imge 13"}
                                           fill={+true}></Image>
                                </div>
                                <div className={'text-center py-2'}>
                                <div className={'h4 '+styles.text1}>100% 天然</div>
                                <div className={'h4 '+styles.text1}>植物色料</div>
                                </div>
                            </Col>
                            <Col xs={6} sm={4} lg={3}  className={'py-md-2 d-flex flex-column align-items-center'}>
                                <div className={'position-relative p-1 '+styles.text_icon}>
                                    <Image src={Icons_18} alt={"imge 13"}
                                           fill={+true}></Image>
                                </div>
                                <div className={'text-center py-2'}>
                                <div className={'h4 '+styles.text1}>
                                    严格专业<div/><div className={'h4 '+styles.text1}>纹绣师</div>
                                </div>
                            </div>
                            </Col>
                            <Col xs={6} sm={4} lg={3}  className={'py-md-2 d-flex flex-column align-items-center'}>
                                <div className={'position-relative '+styles.text_icon}>
                                <Image src={Icons_19} alt={"imge 13"}
                                      fill={+true}></Image>
                                </div>
                                <div className={'text-center py-2'}>
                                    <div className={'h4 '+styles.text1}>所有案列全为</div>
                                    <div className={'h4 '+styles.text1}>原相机拍摄，</div>
                                    <div className={'h4 '+styles.text1}>绝对真实</div>
                                </div>

                            </Col>
                            <Col xs={6} sm={4} lg={3}  className={'py-md-2 d-flex flex-column align-items-center'}>
                                <div className={'position-relative p-1 '+styles.text_icon}>
                                <Image src={Icons_20} alt={"imge 13"}
                                      fill={+true}></Image>
                                </div>
                                <div className={'text-center py-2'}>
                                <div className={'h4 '+styles.text1}>绝对无任何</div>
                                <div className={'h4 '+styles.text1}> 隐藏费</div>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </Col>
            </Row>

            <Row className={'py-3'}>
                <Col xs={12} md={8}>
                    <div className={'h3 text-center header_font'} style={{fontSize:'26pt'}}>Sense Embroidery</div>
                    <div className={'h4 text-center'} style={{fontSize:'18pt'}}>Petaling Jaya | Scott Garden | Penang</div>
                    <div className={'h5 text-center'} style={{fontSize:'16pt'}}>+6018-3636 867</div>
                </Col>
                <Col xs={12}  md={{span:4,order:'first'}}>
                    <div className={'text-center'}>
                        <Image className={'fa-fade'}
                               src={ClickIcon} alt={"click icon"} width={280} height={120}></Image>
                    </div>
                </Col>
            </Row>
        </Container>
            </div>
    );
}

export default FooterPge;
