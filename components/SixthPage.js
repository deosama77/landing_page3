import React from 'react';
import {Container , Col, Row} from "react-bootstrap";
import RightCut from '../public/images/page_6/right_cut.png';
import LeftCut from '../public/images/page_6/left_cut.png';
import Image from 'next/image';
import styles from '../styles/sexth.module.css';
import ClickIcon from '../public/images/click_01_cut.png'
function SixthPage(props) {
    return (
        <Container className={'py-3'}>
            <Row className={'justify-content-center py-0 py-md-1 py-xl-2'}>
                <Col>
                    <div className={"h1 text-center "+styles.header}><span style={{letterSpacing:'normal'}}>
                        Sense
                    </span> 捏骨式纹眉定妆</div>
                    <div className={"h1 text-center "+styles.header}>实现素颜自由</div>
                </Col>
            </Row>
            <Row className={'gap-md-1 gap-xl-2 justify-content-center align-items-center py-md-1 py-xl-2'}>
                <Col xs={10} md={6} xl={5} className={'overflow-auto'}>
                    <Image src={LeftCut} alt={"left cut"}
                           width={420} height={350}></Image>
                </Col>
                <Col xs={10} md={6} xl={5} className={'overflow-auto'}>
                    <Image src={RightCut} alt={"right cut"}
                           width={420} height={350}></Image>
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
