import React, {useRef} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Image_row1_col1 from '../public/images/page_7/row_1_col_1.png';
import Image_row1_col2 from '../public/images/page_7/row_1_col_2.png';
import Image_row1_col3 from '../public/images/page_7/row_1_col_3.png';

import Image_row2_col1 from '../public/images/page_7/row_2_col_1.png';
import Image_row2_col2 from '../public/images/page_7/row_2_col_2.png';
import Image_row2_col3 from '../public/images/page_7/row_2_col_3.png';

import Image_title from '../public/images/page_7/Icons_title.png'
import Image from 'next/image';
import styles from '../styles/Seventh1.module.css';

import LikeIcon from '../public/images/page_7/Like_1.png'
import LovIcon1 from '../public/images/page_7/Icons_love.png';
import {Animate, useElementOnScreen} from "../hooks/useElementOnScreen";
import ClickIcon from '../public/images/click_01_cut.png';


function SeventhPage1(props) {
    const firstAnimate = useRef();
    useElementOnScreen(firstAnimate);

    return (
        <>

        <Container  className={'border border-3 rounded-5 border-warning pb-5 px-5'}>

            <Row>
                <Col className={'d-flex flex-row justify-content-center align-items-center  position-relative'}>
                    <div className={'h2 text-center py-3'}>述評</div>
                    <Image src={Image_title} alt={"icons title"}
                           width={200} height={100}></Image>
                </Col></Row>

            <Row className={'justify-content-center align-items-md-center'}>
                <Col xs={9} md={6} lg={4} className={'py-3 text-center'}>
                    <div className={'position-relative'}
                         style={{width: '100%', height: 230}}>
                        <Image src={Image_row1_col1} alt={"image 1"}
                               className={'rounded-1'}
                               fill={+true}></Image>
                    </div>
                </Col>


                <Col xs={6} md={6} lg={4} className={'py-3'}>
                    <div className={'position-relative'}
                         style={{width: '100%', height: 180}}>
                        <Image src={Image_row1_col2} alt={"image 1"}
                               className={'rounded-1'}
                               fill={+true}></Image>
                    </div>
                </Col>

                <Col xs={6} md={6} lg={4} className={'py-3'}>
                    <div className={"position-relative"}
                         style={{width: '100%', height: 180}}>
                        <Image src={Image_row1_col3} alt={"image 1"}
                               className={'rounded-1'}
                               fill={+true}></Image>
                    </div>
                </Col>
            </Row>

            <Row style={{height:0}}>
                    <div className={'position-relative '+styles.like_1} style={{width:140,height:140}}
                    >
                        <Image src={LikeIcon} alt={"like icon"}
                               fill={+true}

                        ></Image>
                    </div>

                    <div className={'position-relative '+styles.love_1}>
                        <Image src={LovIcon1} alt={"like icon"}
                               width={140} height={140}

                        ></Image>
                    </div>
                <div className={'position-relative '+styles.love_2}>
                    <Image src={LovIcon1} alt={"like icon"}
                           width={100} height={100}
                    ></Image>
                </div>
                <div className={'position-relative '+styles.like_2}>
                    <Image src={LikeIcon} alt={"like icon"}
                           fill={+true}
                    ></Image>
                </div>
            </Row>

            <Row className={'justify-content-center justify-content-lg-start'}>
                <Col xs={10} lg={{span:5,offset:1}} className={'py-3'}>
                    <div className={'position-relative'} style={{width: '100%', height: 230}}>
                        <Image src={Image_row2_col1} alt={"image 1"}
                               className={'rounded-1'}
                               fill={+true}></Image>
                    </div>
                </Col>

                <Col xs={10} lg={5} className={'py-3'}>
                    <div className={'position-relative '+styles.bottom_1} style={{width: '100%', height: 180}}>
                        <Image src={Image_row2_col2} alt={"image 1"}
                               className={'rounded-1'}
                               fill={+true}></Image>
                    </div>
                </Col>
            </Row>
            <Row className={'justify-content-center justify-content-lg-end '+styles.last_row}>
                <Col xs={10} lg={5}>
                    <div className={'position-relative '+styles.bottom_2} style={{width: '100%', height: 180 }}>
                        <Image src={Image_row2_col3} alt={"image 1"}
                               className={'rounded-1'}
                               fill={+true}></Image>
                    </div>
                </Col>
            </Row>
            <Row className={'justify-content-end justify-content-sm-center pt-3 '+styles.click_icon_row}>
                <Col xs={6} sm={4}>
                    <div className={"position-relative "+styles.click_icon}>
                        <Image className={'fa-fade'}
                               src={ClickIcon} alt={"click icon"}
                               fill={+true}></Image>
                    </div>
                </Col>
            </Row>
        </Container>
            </>
    );
}

export default SeventhPage1;
