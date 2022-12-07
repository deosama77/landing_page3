import React from 'react';
import Image from 'next/image';
import ImageUp from '../public/images/page_5/wechat_image.png';
import ImageBottom from "../public/images/page_5/wechat_bottom.png";
import styles from '../styles/Fifth.module.css';
import {Col,Row, Container} from "react-bootstrap";

function FifthPage(props) {
    return (
        <>
        <div className={'position-absolute'}>
            <Image src={ImageUp} alt={'picture 1'} width={300} height={600}
            ></Image>
        </div>
        <div className={'position-absolute '+styles.image_bottom}>
            <Image
                   src={ImageBottom} alt={'picture 1'} width={400} height={500}></Image>
        </div>

            <Container className={'position-relative'}>
                <Row className={'py-3'}>
                    <Col xs={12} md={5}  className={'py-4 px-4  bg-white bg-opacity-50 border rounded-5 border-warning ' +
                        'd-flex flex-column align-items-center justify-content-md-center align-items-md-end'}>
                        <div className={'h2 text-end'+styles.header_card}>3年严苛训练</div>
                        <div className={'h2 text-end'+styles.header_card}>造就精妙手艺</div>
                        <div className={'py-5 d-flex justify-content-center  align-items-center'}>
                            <div className={'mx-3'}>
                                <div className={'h5 text-end'}>效果自然</div>
                                <div className={'h5 text-end'}>灵动宛如天生</div>
                            </div>
                            <div className={styles.slash_number}>
                                <span >1</span><div className={styles.slash}>/</div></div>
                        </div>

                        <div className={'py-3 d-flex justify-content-center align-items-center'}>
                            <div className={'mx-3'}>
                                <div className={'h5'}>360零死角</div>
                            </div>
                            <div className={styles.slash_number}>
                                <span >2</span><div className={styles.slash}>/</div></div>
                        </div>
                    </Col>
                    <Col xs={12} md={{span:5,offset:1}}  className={'py-2 px-4 mt-2 mt-md-0  bg-white bg-opacity-50  border rounded-5 border-warning ' +
                        'd-flex flex-column align-items-center justify-content-md-center align-items-md-start'}>
                        <div className={'h2 text-start'+styles.header_card}>独家研发</div>
                        <div className={'h2 text-start'+styles.header_card}>智能对称APP</div>

                        <div className={'py-5 d-flex justify-content-center  align-items-center'}>
                            <div className={styles.slash_number}>
                                <span >1</span><div className={styles.slash}>/</div></div>
                            <div className={'mx-3'}>
                                <div className={'h5 text-start'}>测试个人脸型 、</div>
                                <div className={'h5 text-start'}>眉骨、五官</div>
                                <div className={'h5 text-start'}>量身定制眉形</div>
                            </div>
                        </div>

                        <div className={'py-3 d-flex justify-content-center align-items-center'}>
                            <div className={styles.slash_number}>
                                <span >2</span><div className={styles.slash}>/</div></div>
                            <div className={'mx-3'}>
                                <div className={'h5'}>高达99%对称</div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default FifthPage;
