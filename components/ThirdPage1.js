import React from 'react';
import {Container,Col, Row} from "react-bootstrap";
import style from "../styles/Third.module.css";
import Image from "next/image";
import WechatVertical from '../public/images/page_3/wechat_vertical.png';
import WechatHorizontal from '../public/images/page_3/horizontal_04.png';
import IconR from '../public/images/page_3/Icons_1_09.png';
import IconW from '../public/images/page_3/Icons_1_08.png'
import IconClick from '../public/images/buttons_01.png';

function ThirdPage1(props) {
    return (
        <>
            <div className={'py-2 header_font text-center '+style.header_title}>
                <h2>你也有以下的烦恼吗？</h2>
            </div>
 <div className={'px-4 px-sm-0 py-2 py-md-0 text-center'}>
        <Container  className={'border border-3 border-warning w-100 rounded-5 w-100'}>
            <Row className={'pt-4 pb-2 header_font text-center '+style.header_title_vertical}>
              <Col><h2 className={'text-center'}>你也有以下的烦恼吗？</h2></Col>
            </Row>
            <Row className={'pb-2'}>
                <Col>
                    <div className={"h1 py-3 header-font text-center "+style.header_card_horizontal}>80%颜值问题都能通过眉毛解决</div>
                </Col>
            </Row>
            <Row className={'pb-2'}>
                <Col>
                    <div className={"h1 header-font text-center "+style.header_card_vertical}>
                    80%颜值问题</div>
                    <div className={"h1 header-font text-center "+style.header_card_vertical}>
                        都能通过眉毛解决</div>
                </Col>
            </Row>
            <Row >
                <Col xs={12} lg={3}  className={'d-flex flex-row flex-lg-column justify-content-between align-items-start justify-content-lg-center align-items-lg-center'}>
                    <div className={'py-2 d-flex flex-column justify-content-center align-items-center'}>
                       <Image src={IconW} alt={"icon wrong"}
                       width={30} height={30}></Image>
                        <span className={'h5 text-center '+style.text1}>
                                             对原身眉形<br/>和眼型不满意</span>
                    </div>

                    <div className={'py-2 d-flex flex-column justify-content-center align-items-center'}>
                        <Image src={IconW} alt={"icon wrong"}
                               width={30} height={30}></Image>
                        <span className={'h5 text-center '+style.text1}>亚洲扁平脸</span>
                    </div>
                    <div className={' p-md-0 d-flex flex-column justify-content-center align-items-center'}>
                        <Image src={IconW} alt={"icon wrong"}
                               width={30} height={30}></Image>
                        <span className={'h5 text-center '+style.text1}>羡慕明星<br/> 立体五官</span>
                    </div>
                </Col>

                 <Col xs={6} lg={7} className={'m-0 p-0 position-relative '+style.middleImage_vertical}
                 style={{height:"400px"}}>
                     <div
                         style={{width:'150%' , height:"400px" ,
                             position:"absolute" ,bottom:0}}
                          >
                         <Image src={WechatVertical} alt={"picture"}
                                fill={+true}
                         ></Image>
                     </div>
                 </Col>
                <Col xs={6} lg={6}
                     className={'m-0 p-0 position-relative '+style.middleImage_horizontal}>
                    <div className={style.wechatH}>
                        <Image src={WechatHorizontal} alt={"picture"}
                               fill={+true}

                        ></Image>
                    </div>
                </Col>


                <Col xs={6} lg={3}
                     className={"d-flex flex-column justify-content-center align-items-end"}>

                    <div className={'position-relative py-1 my-3 '+style.text2_container}>
                        <div className={'h3 text-center border rounded-5 mb-0 '+style.text2}>五官立体感</div>
                        <div className={'position-absolute '+style.icon_right}>
                            <Image src={IconR} alt={"icon right"}
                                   fill={+true}></Image>
                        </div>
                    </div>

                    <div className={'text-center position-relative py-1 my-3 '+style.text2_container}>
                        <div className={'h3 text-center border rounded-5 mb-0 '+style.text2}
                           >自然伪妆感</div>
                        <div className={'position-absolute '+style.icon_right}>
                            <Image src={IconR} alt={"icon right"}
                                   fill={+true}></Image>
                        </div>
                    </div>

                    <div className={'position-relative py-1 my-3 '+style.text2_container}>
                        <div className={'h3 text-center border rounded-5 mb-0 '+style.text2}>素颜自由</div>
                        <div className={'position-absolute '+style.icon_right}>
                            <Image src={IconR} alt={"icon right"}
                                   fill={+true}></Image>
                        </div>
                    </div>
                </Col>

            </Row>
           <Row className={'justify-content-center '+style.click_icon_container}>
                   <div className={'position-relative text-center '+style.click_icon}>
                       <Image src={IconClick} alt={'click icon'}
                              fill={+true}></Image>
                   </div>
           </Row>
        </Container>
            </div>
            </>
    );
}

export default ThirdPage1;
