import React from 'react';
import Image from 'next/image';
import ImageUp from '../public/images/page_5/wechat_vertical.png';
import ImageBottom from "../public/images/page_5/wechat_bottom.png";
import styles from '../styles/Fifth.module.css';
import {Col, Row, Container} from "react-bootstrap";
import ClickIcon from '../public/images/page_5/icons-01_v5.png'

function FifthPage(props) {
    return (
        <div className={'px-3'}>
            <div className={'position-absolute '+styles.left_image}>
                <Image src={ImageUp} alt={'picture 1'} fill={+true}
                ></Image>
            </div>

            <Container className={'position-relative'}>
                <Row className={'py-3 gap-2 d-flex justify-content-center w-100 m-0 p-0'}>
                    <Col xs={12} lg={5}  className={'py-4 px-4  bg-white bg-opacity-75 border rounded-5 border-warning ' +
                        'd-flex flex-column justify-content-md-center align-items-end'}>
                        <div className={'h1 text-end header_font '+styles.header_card}>3年严苛训练</div>
                        <div className={'h1 text-end header_font '+styles.header_card}>造就精妙手艺</div>
                        <div className={'py-5  d-flex justify-content-center  align-items-center'}>
                            <div className={'mx-3'}>
                                <div className={'h5 text-end '+styles.second_text}>效果自然</div>
                                <div className={'h5 text-end '+styles.second_text}>灵动宛如天生</div>
                            </div>
                            <div className={styles.slash_number}>
                                <span >1</span><div className={styles.slash}>/</div></div>
                        </div>

                        <div className={'py-3 d-flex justify-content-center align-items-center'}>
                            <div className={'mx-3'}>
                                <div className={'h4'}>360零死角</div>
                            </div>
                            <div className={styles.slash_number}>
                                <span >2</span><div className={styles.slash}>/</div></div>
                        </div>
                    </Col>
                    <Col xs={12} lg={5}  className={'py-4 px-4  mt-2 mt-md-0  bg-white bg-opacity-50  border rounded-5 border-warning ' +
                        'd-flex flex-column justify-content-md-center align-items-start'}>
                        <div className={'h1 text-start header_font '+styles.header_card}>独家研发</div>
                        <div className={'h1 text-start header_font '+styles.header_card}>智能对称<strong className={styles.app}>APP</strong></div>

                        <div className={'py-5 d-flex justify-content-center  align-items-center'}>
                            <div className={styles.slash_number}>
                                <span >1</span><div className={styles.slash}>/</div></div>
                            <div className={'mx-3'}>
                                <div className={'h5 text-start '+styles.second_text}>测试个人脸型 、</div>
                                <div className={'h5 text-start '+styles.second_text}>眉骨、五官</div>
                                <div className={'h5 text-start '+styles.second_text}>量身定制眉形</div>
                            </div>
                        </div>

                        <div className={'py-3 d-flex justify-content-center align-items-center'}>
                            <div className={styles.slash_number}>
                                <span >2</span><div className={styles.slash}>/</div></div>
                            <div className={'mx-3'}>
                                <div className={'h4'}>高达99%对称</div>
                            </div>

                        </div>
                        <div className={'position-absolute '+styles.image_bottom1}>
                            <Image
                                src={ImageBottom} alt={'picture 1'} fill={+true}></Image>
                        </div>
                    </Col>
                </Row>
                <Row className={'justify-content-center'}>
                        <div className={'d-flex align-items-start justify-content-center '+styles.click_icon}>
                            <Image className={'fa-fade'}
                                   src={ClickIcon} alt={"click icon"} fill={+true}></Image>
                        </div>
                </Row>
            </Container>
        </div>
    );
}

export default FifthPage;
