import React from 'react';
import {Container , Col,Row} from "react-bootstrap";
import Image from "next/image";
import ImageLeft from '../public/images/page_8/weChat.png';
import styles from '../styles/Eighth.module.css';
import ClickIcon from '../public/images/click_01_cut.png';

function EighthPage(props) {
    return (
        <Container fluid={+true}>
            <Row>
                <Col xs={12} md={6} >
                    <div className={"position-relative"} style={{width:"100%",height:500}}>
                        <Image src={ImageLeft} alt={"left image"} fill={+true}
                               className={'opacity-75'}></Image>
                    </div>

                </Col>
                <Col xs={12} md={6} className={'py-3'}>
                   <Row className={'container pt-md-4'}>
                       <Col>
                           <div className={'h1  text-start header_font '+styles.snese_header}>Sense Embroidery</div>
                           <div className={'h1  text-start header_font '+styles.header_ch}>半永久定妆术</div>
                           <div className={'h4  text-start py-4 '+styles.header_det}>带你刷新审美认知行走在美学的最前沿。</div>
                           <div className={'pb-4'}>
                               <div className={'h4 text-start '+styles.header_det}>在未来的5年内与我们的纹绣师团队</div>
                               <div className={'h4 text-start '+styles.header_det}>能在不同的地区开分行，</div>
                               <div className={'h4 text-start '+styles.header_det}>让更多马来西亚女性得到她们该有的魅力&气质。</div>
                           </div>

                           <div className={'h4  text-start header_font '+styles.footer_text}>Beautiful is confidence,
                               </div>
                           <div className={'h4  text-start header_font pb-4 '+styles.footer_text}>
                               and confidence is even more beautiful.</div>
                       </Col>
                   </Row>

                    <Row className={'pt-2 justify-content-center'}>
                        <div className={'text-center'}>
                            <Image className={'fa-fade'}
                                   style={{cursor:'pointer'}}
                                   src={ClickIcon} alt={"click icon"} width={200} height={55}></Image>
                        </div>
                    </Row>
                </Col>
            </Row>

        </Container>
    );
}

export default EighthPage;
