import React from 'react';
import style from '../styles/Third.module.css';
import {Col, Container , Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark , faCheck} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
import Wechat from '../public/images/page_3/wechat_img2.png';
import ClickIcon from '../public/images/click_01_cut.png';

function ThirdPage(props) {
    return (
        <Container>
            <Row className={'py-2'}>
                <Col className={'d-flex justify-content-center align-items-center w-100'}>
                    <h2>你也有以下的烦恼吗？</h2>
                </Col>
            </Row>
            <Row>
                <Col className={'w-100 mb-5'}>
                     <div className={'border border-3 border-warning w-100 rounded-5'}>
                         <Container >
                             <Row className={'py-2'}>
                                 <Col><div className={"h1 d-flex justify-content-center align-items-center w-100 "+style.header_card}>80%颜值问题都能通过眉毛解决</div></Col>
                             </Row>
                             <Row>
                                 <Col xs={12} md={4} lg={3} className={'d-flex flex-column justify-content-center align-items-center'}>
                                     <div className={'py-3 d-flex flex-column justify-content-center align-items-center'}>
                                         <FontAwesomeIcon icon={faCircleXmark}
                                                          width={25}
                                                          height={25}
                                                          opacity={.3}
                                                          style={{fontSize:'2rem'}}
                                         />
                                         <span className={'h4 text-center'}>
                                             对原身眉形<br/>和眼型不满意</span>
                                     </div>

                                     <div className={'py-3 d-flex flex-column justify-content-center align-items-center'}>
                                         <FontAwesomeIcon icon={faCircleXmark}
                                                          width={25}
                                                          height={25}
                                                          opacity={.3}
                                                          style={{fontSize:'2rem'}}
                                         />
                                         <span className={'h4 text-center'}>羡慕明星<br/> 立体五官</span>
                                     </div>
                                     <div className={'py-3 d-flex flex-column justify-content-center align-items-center'}>
                                         <FontAwesomeIcon icon={faCircleXmark}
                                                          width={25}
                                                          height={25}
                                                          opacity={.3}
                                                          style={{fontSize:'2rem'}}
                                         />
                                         <span className={'h4 text-center'}>对原身眉形<br/> 和眼型不满意</span>
                                     </div>


                                 </Col>

                                 <Col className={'w-100 d-inline-flex justify-content-center'}>
                                    <Image src={Wechat} alt={"picture"}
                                    height={380} width={380}
                                    ></Image>
                                 </Col>

                                 <Col xs={12} md={12} lg={3} className={"d-flex flex-column justify-content-center"}>
                                     <div className={'text-center pb-2 pt-3 border  rounded-5  my-2 position-relative'} style={{backgroundColor:'#f9f0f0'}}>
                                         <div className={' h3 text-center'} >五官立体感</div>
                                         <FontAwesomeIcon icon={faCheck}
                                                          width={25}
                                                          height={25}
                                                          opacity={.3}
                                                          className={style.check_icon}
                                         /></div>
                                     <div className={'text-center pb-2 pt-3 mt-md-3 border  rounded-5  my-2 position-relative'} style={{backgroundColor:'#f9f0f0'}}>
                                         <div className={' h3 text-center'} >自然伪妆感</div>
                                         <FontAwesomeIcon icon={faCheck}
                                                          width={25}
                                                          height={25}
                                                          opacity={.3}
                                                          className={style.check_icon}
                                         /></div>
                                     <div className={'text-center pb-2 pt-3  mt-md-3 border  rounded-5  mt-2 position-relative'} style={{backgroundColor:'#f9f0f0'}}>
                                         <div className={'h3 text-center'} >素颜自由</div>
                                         <FontAwesomeIcon icon={faCheck}
                                                          width={25}
                                                          height={25}
                                                          opacity={.3}
                                                          className={style.check_icon}
                                         /></div>
                                 </Col>
                             </Row>
                             <Row>
                                 <div className={'d-flex align-items-start justify-content-center '+style.click_icon_container}>
                                     <Image className={'fa-fade'}
                                         src={ClickIcon} alt={"click icon"} width={270} height={70}></Image>
                                 </div>
                             </Row>
                         </Container>
                     </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ThirdPage;
