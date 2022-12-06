import React from 'react';
import styles from '../styles/Sixth.module.css'
import {Container , Col, Row} from "react-bootstrap";
import RightCut from '../public/images/page_6/right_cut.png';
import LeftCut from '../public/images/page_6/left_cut.png';
import Image from 'next/image';

function SixthPage(props) {
    return (
        <Container>
            <Row className={'justify-content-center py-0 py-md-1 py-xl-2'}>
                <Col>
                    <div className={"h1 text-center"}>Sense捏骨式纹眉定妆</div>
                    <div className={"h1 text-center"}>实现素颜自由</div>
                </Col>
            </Row>
            <Row className={'gap-md-1 gap-xl-2 justify-content-center align-items-center py-md-1 py-xl-2'}>
                <Col xs={10} md={6} xl={5}>
                    <Image src={LeftCut} alt={"left cut"}
                           width={420} height={400}></Image>
                </Col>
                <Col xs={10} md={6} xl={5}>
                    <Image src={RightCut} alt={"right cut"}
                           width={420} height={400}></Image>
                </Col>
            </Row>
        </Container>
    );
}

export default SixthPage;
