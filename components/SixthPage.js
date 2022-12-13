import React from 'react';
import {Container , Col, Row} from "react-bootstrap";
import RightCut from '../public/images/page_6/horizontal_right.png';
import LeftCut from '../public/images/page_6/horizontal_left.png';
import Image from 'next/image';
import styles from '../styles/sexth.module.css';
import ClickIcon from '../public/images/click_01_cut.png'
function SixthPage(props) {
    return (
        <Container  aria-expanded={+true} className={'py-3'}>
            <Row className={'py-0 py-md-1 py-xl-2'}>
                <Col>
                    <div className={"h1 text-center "+styles.header}><span style={{letterSpacing:'normal'}}>
                        Sense
                    </span> 捏骨式纹眉定妆</div>
                    <div className={"h1 text-center "+styles.header}>实现素颜自由</div>
                </Col>
            </Row>
            <Row className={'py-md-1 py-xl-2'}>
                <Col xs={10} md={6}  >

                    <Image src={LeftCut} alt={"left cut"}
                           width={440} height={350}></Image>
                </Col>
                <Col xs={10} md={6} >
                    <Image src={RightCut} alt={"right cut"}
                           width={440} height={350}></Image>
                </Col>
            </Row>
            <div className={'d-flex align-items-start justify-content-center'}>
                <Image className={'fa-fade'}
                       src={ClickIcon} alt={"click icon"} width={270} height={70}></Image>
            </div>
        </Container>
    );
}

export default SixthPage;
