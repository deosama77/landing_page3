import React from 'react';
import {Container , Col, Row} from "react-bootstrap";
import HRight from '../public/images/page_6/horizontal_right.png';
import HLeft from '../public/images/page_6/horizontal_left.png';
import VTop from '../public/images/page_6/vertical_top.png';
import VBottom from '../public/images/page_6/vertical_bottom.png';
import styles from '../styles/Sixth.module.css'
import Image from 'next/image';
import ClickIcon from '../public/images/click_01_cut.png'

function SixthPage1(props) {
    return (
        <Container>
            <Row className={'justify-content-center'}>
                <Col xs={12} className={'text-center h1 '+styles.title}>Sense 捏骨式纹眉定妆</Col>
                <Col xs={12} className={'text-center h1 '+styles.title}>实现素颜自由</Col>
            </Row>

            <Row>
                <Col xs={12} md={6} >
                    <div className={"position-relative"} style={{height:350 , width:"100%"}}>
                        <Image src={HLeft} alt={"left cut"}
                               fill={+true}></Image>
                    </div>
                </Col>
                <Col xs={12} md={6} >
                    <div className={"position-relative"} style={{height:350, width:"100%"}}>
                    <Image src={HRight} alt={"right cut"}
                           fill={+true}></Image>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12} className={'pb-3 text-center fa-fade'}>

                    <Image src={ClickIcon} alt={"clic icon"}
                    width={190} height={60}
                    style={{cursor:"pointer"}}
                    ></Image>
                </Col>
            </Row>
        </Container>
    );
}

export default SixthPage1;
