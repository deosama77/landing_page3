import React from 'react';
import {Container , Col,Row} from "react-bootstrap";
import Image from "next/image";
import ImageLeft from '../public/images/page_8/weChat.png';

function EighthPage(props) {
    return (
        <Container fluid={+true}>
            <Row>
                <Col xs={12} md={6} >
                    <Image src={ImageLeft} alt={"left image"} width={600} height={500}
                           className={'opacity-50'}></Image>
                </Col>
                <Col xs={12} md={6} className={'py-5 mt-2 mt-md-5'}>
                   <Row className={'container pt-md-4'}>
                       <Col>
                           <div className={'h1 text-center text-md-start'}>Sense Embroidery</div>
                           <div className={'h1 text-center text-md-start'}>半永久定妆术</div>
                           <div className={'h4 text-center text-md-start py-md-4'}>带你刷新审美认知行走在美学的最前沿。</div>
                           <div className={'pb-md-4'}>
                               <div className={'h4 text-center text-md-start'}>在未来的5年内与我们的纹绣师团队</div>
                               <div className={'h4 text-center text-md-start'}>能在不同的地区开分行，</div>
                               <div className={'h4 text-center text-md-start'}>让更多马来西亚女性得到她们该有的魅力&气质。</div>
                           </div>

                           <div className={'h4 text-center text-md-start'}>Beautiful is confidence,<br/>
                               and confidence is even more beautiful.</div>
                       </Col>
                   </Row>
                </Col>
            </Row>

        </Container>
    );
}

export default EighthPage;
