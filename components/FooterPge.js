import React from 'react';
import {Container , Row,Col} from "react-bootstrap";
import Image from "next/image";
import Icons_13 from '../public/images/pge_9/icons_13_cut.png';
import Icons_14 from '../public/images/pge_9/icons_14.png';
import Icons_15 from '../public/images/pge_9/icons_15.png';
import Icons_16 from '../public/images/pge_9/icons_16.png';
import Icons_17 from '../public/images/pge_9/icons_17.png';
import Icons_18 from '../public/images/pge_9/iconse_18.png';
import Icons_19 from '../public/images/pge_9/icons_19.png';
import Icons_20 from '../public/images/pge_9/icons_20.png';
import ClickIcon from '../public/images/buttons_02.png';
import ImageBackground from '../public/images/pge_9/weChate.jpg';

function FooterPge(props) {
    return (
        <>
            <div style={{width:'100%' , height:"100%" , position:'absolute',zIndex:-1 ,
            opacity:.2}}>
                <Image src={ImageBackground} alt={"picture"}
                       layout={'fill'}
                ></Image>
            </div>
        <Container>
            <Row>
                <div className={'h1 text-center py-md-3'} style={{fontSize:'2.8rem' ,
                    letterSpacing:'.5rem'}}>品牌承诺</div>
            </Row>
            <Row>
                <Col className={'py-2 bg-white bg-opacity-50 border border-3 border-warning rounded-5 '}>
                    <Container>
                        <Row className={'py-md-3 py-2 justify-content-center'}>
                            <Col xs={6} sm={4} lg={3} className={'py-md-2 d-flex flex-column align-items-center'}>
                                <Image src={Icons_13} alt={"imge 13"}
                                       width={50} height={50}></Image>
                                <div className={'h4'}>粉粉雾雾</div>
                                <div className={'h4'}>立即效果</div>
                            </Col>
                            <Col xs={6} sm={4}lg={3}  className={'py-md-2 d-flex flex-column align-items-center'}>
                                <Image src={Icons_14} alt={"imge 13"}
                                       width={50} height={50}></Image>
                                <div className={'h4'}>操作过程</div>
                                <div className={'h4'}>全程无痛</div>
                            </Col>
                            <Col xs={6} sm={4} lg={3}  className={'py-md-2 d-flex flex-column align-items-center'}>
                                <Image src={Icons_15} alt={"imge 13"}
                                       width={50} height={50}></Image>
                                <div className={'h4'}>安全&干净</div>
                            </Col>
                            <Col xs={6} sm={4} lg={3}  className={'py-md-2 d-flex flex-column align-items-center'}>
                                <Image src={Icons_16} alt={"imge 13"}
                                       width={50} height={50}></Image>
                                <div className={'h4'}>一遍上色、<br/>百分百留色</div>
                            </Col>


                            <Col xs={6} sm={4} lg={3}  className={'py-md-2 d-flex flex-column align-items-center'}>
                                <Image src={Icons_17} alt={"imge 13"}
                                       width={50} height={50}></Image>
                                <div className={'h4'}>100% 天然</div>
                                <div className={'h4'}>植物色料</div>
                            </Col>
                            <Col xs={6} sm={4} lg={3}  className={'py-md-2 d-flex flex-column align-items-center'}>
                                <Image src={Icons_18} alt={"imge 13"}
                                       width={50} height={50}></Image>
                                <div className={'h4'}>
                                    严格专业<div/><div className={'h4'}>纹绣师</div>
                            </div>
                            </Col>
                            <Col xs={6} sm={4} lg={3}  className={'py-md-2 d-flex flex-column align-items-center'}>
                                <Image src={Icons_19} alt={"imge 13"}
                                       width={50} height={50}></Image>
                                <div className={'h4'}>所有案列全为</div>
                                <div className={'h4'}>原相机拍摄，</div><div className={'h4'}>绝对真实</div>
                            </Col>
                            <Col xs={6} sm={4} lg={3}  className={'py-md-2 d-flex flex-column align-items-center'}>
                                <Image src={Icons_20} alt={"imge 13"}
                                       width={50} height={50}></Image>
                                <div className={'h4'}>绝对无任何</div>
                                   <div className={'h4'}> 隐藏费</div>
                            </Col>
                        </Row>

                    </Container>
                </Col>
            </Row>

            <Row className={'py-3'}>
                <Col xs={12} md={8}>
                    <div className={'h3 text-center'}>Sense Embroidery</div>
                    <div className={'h4 text-center'}>Petaling Jaya | Scott Garden | Penang</div>
                    <div className={'h5 text-center'}>+6014-807 3636 | +6018-259 3836 | +6014-878 3636</div>
                </Col>
                <Col xs={12}  md={{span:4,order:'first'}}>
                    <div className={'text-center'}>
                        <Image className={'fa-fade'}
                               src={ClickIcon} alt={"click icon"} width={280} height={120}></Image>
                    </div>
                </Col>
            </Row>
        </Container>
            </>
    );
}

export default FooterPge;
