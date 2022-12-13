import React from 'react';
import ImageVertical from '../public/images/page_4/vertical_1.png';
import ImageHorizontal from '../public/images/page_4/page_4_new.png';
import {Container,Row,Col} from "react-bootstrap";
import Image from "next/image";
import styles from '../styles/Fourth1.module.css'
function FourthPage1(props) {
    return (
        <Container fluid={+true} className={'pt-2'}>
            <Row>
                <Col xs={12} sm={3} className={'py-5  d-flex flex-column justify-content-center align-items-center position-relative'}>
                   <div className={'position-absolute  text-center text-sm-end '+styles.text_title} >
                       <div className={'h1'}>独有鼻影技术</div>
                       <div className={'h1'}>增强面部立体度</div>
                   </div>

                </Col>
                <Col xs={12} sm={9} className={'my-4 mx-0 px-0'}>
                    <div className={"py-2 px-2 border border-3 rounded-5 position-absolute "+styles.ex_up_vertical}>眉形包着眼睛的弧线</div>
                    <div className={'py-2 px-5 border border-3 rounded-5 position-absolute '+styles.ex_down_vertical}>
                        <div>体现鼻影效果</div>
                        <div>增加立体感</div>
                    </div>
                    <div className={styles.image_vertical_container}>
                        <Image src={ImageVertical} alt={"image vertical "}
                               fill={+true}></Image>
                    </div>

                    <div className={styles.image_horizontal_container}>
                        <div className={"py-2 px-2 border border-3 rounded-5 position-absolute "+styles.ex_up_horizontal}>眉形包着眼睛的弧线</div>
                        <div className={'py-2 px-5 border border-3 rounded-5 position-absolute '+styles.ex_down_horizontal}>
                            <div>体现鼻影效果</div>
                            <div>增加立体感</div>
                        </div>
                        <Image src={ImageHorizontal} alt={"image horizontal "}
                               fill={+true}></Image>
                    </div>

                </Col>
            </Row>
        </Container>
    );
}

export default FourthPage1;
