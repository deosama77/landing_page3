import React from 'react';
import {Container,Col, Row} from "react-bootstrap";
import style from "../styles/Third.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import WechatVertical from '../public/images/page_3/wechat_vertical.png';
import WechatHorizontal from '../public/images/page_3/wechat_img2.png';


function ThirdPage1(props) {
    return (
        <>
            <div className={'py-2 d-flex justify-content-center align-items-center w-100'}>
                <h2>你也有以下的烦恼吗？</h2>
            </div>
        <Container  className={'border border-3 border-warning w-100 rounded-5 w-100'}
        >
            <Row>
                <Col><div className={"h1 d-flex justify-content-center align-items-center text-center py-3 "+style.header_card}>80%颜值问题都能通过眉毛解决</div></Col>
            </Row>
            <Row >
                <Col xs={12} md={2}  className={'d-flex flex-row flex-md-column justify-content-between align-items-start justify-content-md-center align-items-center'}>
                    <div className={'py-2 d-flex flex-column justify-content-center align-items-center'}>
                        <FontAwesomeIcon icon={faCircleXmark}
                                         width={25}
                                         height={25}
                                         opacity={.3}
                                         style={{fontSize:'2rem'}}
                        />
                        <span className={'h5 text-center'}>
                                             对原身眉形<br/>和眼型不满意</span>
                    </div>

                    <div className={'py-2 d-flex flex-column justify-content-center align-items-center'}>
                        <FontAwesomeIcon icon={faCircleXmark}
                                         width={25}
                                         height={25}
                                         opacity={.3}
                                         style={{fontSize:'2rem'}}
                        />
                        <span className={'h5 text-center'}>和眼型不满意</span>
                    </div>
                    <div className={' p-md-0 d-flex flex-column justify-content-center align-items-center'}>
                        <FontAwesomeIcon icon={faCircleXmark}
                                         width={25}
                                         height={25}
                                         opacity={.3}
                                         style={{fontSize:'2rem'}}
                        />
                        <span className={'h5 text-center'}>羡慕明星<br/> 立体五官</span>
                    </div>
                </Col>

                 <Col xs={6} md={8} className={'m-0 p-0 position-relative '+style.middleImage_vertical}
                 style={{height:"400px"}}>
                     <div style={{width:'150%' , height:"400px" , position:"absolute" ,bottom:0}}

                          >
                         <Image src={WechatVertical} alt={"picture"}
                                fill={+true}
                         ></Image>
                     </div>
                 </Col>
                <Col xs={6} md={8} className={'m-0 p-0 position-relative '+style.middleImage_horizontal}
                     >
                    <div className={style.wechatH}
                        style={{width:"100%" , height:'400px' , position:"relative"}}
                    >
                        <Image src={WechatHorizontal} alt={"picture"}
                               fill={+true}

                        ></Image>
                    </div>
                </Col>

                <Col xs={6} md={2} className={"d-flex flex-column justify-content-center align-items-end"}>
                    <div className={'text-center pb-1 pt-3 border  rounded-5  my-1 position-relative'} style={{backgroundColor:'#f9f0f0'}}>
                        <div className={'h3 text-center'} style={{width:200}} >五官立体感</div>
                        <FontAwesomeIcon icon={faCheck}
                                         width={25}
                                         height={25}
                                         opacity={.3}
                                         className={style.check_icon}
                        /></div>
                    <div className={'text-center pb-2 pt-3 mt-md-3 border  rounded-5  my-2 position-relative'} style={{backgroundColor:'#f9f0f0'}}>
                        <div className={' h3 text-center'} style={{width:200}} >自然伪妆感</div>
                        <FontAwesomeIcon icon={faCheck}
                                         width={25}
                                         height={25}
                                         opacity={.3}
                                         className={style.check_icon}
                        /></div>
                    <div className={'text-center pt-3  mt-md-3 border  rounded-5  mt-2 position-relative'} style={{backgroundColor:'#f9f0f0'}}>
                        <div className={'h3 text-center'} style={{width:200}}>素颜自由</div>
                        <FontAwesomeIcon icon={faCheck}
                                         width={25}
                                         height={25}
                                         opacity={.3}
                                         className={style.check_icon}
                        /></div>
                </Col>

            </Row>
             {/*<Row style={{height:0}}>*/}
             {/*    <Col xs={12} style={{height:0}}>*/}
             {/*            <div className={style.click_icon_container}*/}
             {/*            style={{width:300, height:100}}>*/}
             {/*                <Image className={'fa-fade'}*/}
             {/*                       src={ClickIcon} alt={"click icon"}*/}
             {/*                       fill={+true}*/}
             {/*                ></Image>*/}

             {/*            </div>*/}

             {/*    </Col>*/}
             {/*</Row>*/}

        </Container>
            </>
    );
}

export default ThirdPage1;
