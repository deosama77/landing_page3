import React  , {useRef} from 'react';
import {Container, Row , Col} from "react-bootstrap";
import ImageTop from '../public/images/page_2/right_image_vertical.png';
import ImageBottom from '../public/images/page_2/left_image_veretical.png';
import Image from 'next/image';
import styles from "../styles/Second.module.css";
import Icon1 from "../public/images/page_2/Icons_1_05.png";
import Icon2 from "../public/images/page_2/Icons_1_06.png";
import Icon3 from "../public/images/page_2/Icons_1_07.png";
import ImageLeft from '../public/images/page_2/left_img.png';
import ImageRight from '../public/images/page_2/right_img.png';
import {Animate, useElementOnScreen} from "../hooks/useElementOnScreen";

function SeconPage1(props) {
    const firstAnimate=useRef();
    useElementOnScreen(firstAnimate);
    return (
        <>
            <Col xs={12} className={styles.card_sense +' border border-3 border-warning rounded-5 p-1 pt-3'} >
                <div>
                    <h1 className={'pt-m-2 text-center w-100 header_font '+styles.sense_em}>SENSE EMBROIDERY</h1>
                    <div className={'d-flex align-items-center flex-row justify-content-md-start w-100'}>
                        <Image src={Icon1} alt={"icon 1"} width={100}
                               height={100}></Image>
                        <div className={'px-1 d-flex flex-column justify-content-center align-items-center'}>
                            <h3 className={'p-0 m-0 '+styles.second_text}>亚洲半永久美容</h3>
                            <h3 className={'p-0 m-0 '+styles.second_text}>大赛裁判长创办</h3>
                        </div>

                    </div>

                    <div className={'d-flex align-items-center flex-row justify-content-md-start w-100'}>
                        <Image src={Icon2} alt={"icon 1"} width={100}
                               height={100}></Image>
                        <div className={'px-1 d-flex flex-column justify-content-center align-items-center'}>
                            <h3 className={'p-0 m-0 '+styles.second_text}>融合国际先进技术</h3>
                        </div>

                    </div>

                    <div className={'d-flex align-items-center flex-row justify-content-md-start w-100'}>
                        <Image src={Icon3} alt={"icon 1"} width={100}
                               height={100}></Image>
                        <div className={'d-flex flex-column justify-content-center align-items-center'}>
                            <h3 className={'px-1 p-0 m-0 '+styles.second_text}>服务超过100000位客户</h3>
                        </div>

                    </div>
                </div>
            </Col>
        <Container fluid={+true}>
            <Row>
            {/*    vertical */}
            <Col xs={12} md={6} className={styles.top_image}>
                <div style={{width:'100vw' , height:'400px' }}>
                    <Image src={ImageTop} alt={"pic 1"} fill={+true}
                   ></Image>
                </div>
            </Col>
                {/*   horizent */}
                <Col  md={6} className={styles.left_image}>
                        <Image src={ImageLeft} alt={"pic 1"}
                               width={600} height={600}
                        ></Image>
                </Col>
                <Col  md={6} className={styles.right_image}>
                        <Image src={ImageRight} alt={"pic 1"} width={600} height={600}
                        ></Image>
                </Col>

                {/* vertical */}
                <Col xs={12} md={6} className={styles.bottom_image}>
                    <div  style={{width:'100vw' , height:'400px'}}>
                    <Image src={ImageBottom} alt={"pic 1"} fill={+true}
                           ></Image>
                    </div>
                </Col>
            </Row>
        </Container>
            </>
    );
}

export default SeconPage1;
