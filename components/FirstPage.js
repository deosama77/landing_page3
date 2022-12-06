import React from 'react';
import {Container , Col , Row} from "react-bootstrap";
import styles from '../styles/First.module.css'
import Image from "next/image";
import TopLeftImage from '../public/images/page_1/Icons_1_21.png'
import Icone2 from '../public/images/page_1/icons_2_new_c.png';
import Icone3 from '../public/images/page_1/icons_1_03_new.png';
import Icone4 from '../public/images/page_1/icons_1_04_new.png';

function FirstPage(props) {
    return (
            <div className={styles.first_page_background}>
                 <Container fluid={+true}>
                     <Row className="justify-content-md-start
                                    align-items-md-start
                                     justify-content-center align-items-center">
                     <Col xs={4}><Image src={TopLeftImage}
                               className={styles.top_left_image}
                               alt={"first picture"}
                               width={180}
                               height={180}
                   ></Image></Col>
                     </Row>
                     <Row>
                         <Col>
                             <div className={'d-flex flex-column align-items-center justify-content-center'}>
                                 <h4 className={'my-2'}>马来西亚首创</h4>
                                 <h1 className={'my-2'}>「捏骨式」</h1>
                                 <h4 className={'my-2'}>半永久纹绣品牌</h4>
                             </div>
                         </Col>
                     </Row>
                     <Row className={'mt-md-3 mt-5'}>
                         <Col>
                             <div className={'d-flex flex-column flex-md-row justify-content-center align-items-stretch'}>
                                 <div className={'px-4 py-2 border rounded mx-1 d-inline-flex align-items-center'} style={{backgroundColor:'#f9f0f0'}}>
                                     <Image src={Icone2} alt={"icone 2"}
                                            width={40} height={40}
                                            className={'rounded-circle mx-2'}
                                     ></Image>
                                     自然伪妆感
                                 </div>
                                 <div className={'px-4 py-2 border  rounded mx-1 d-inline-flex align-items-center'} style={{backgroundColor:'#f9f0f0'}}>
                                     <Image src={Icone3} alt={"icone 2"}
                                            width={40} height={40}
                                            className={'rounded-circle mx-2'}
                                     ></Image> 科技修饰脸型
                                 </div>
                                 <div className={'px-4 py-2 border  rounded mx-1 d-inline-flex align-items-center'} style={{backgroundColor:'#f9f0f0'}}>
                                     <Image src={Icone4} alt={"icone 2"}
                                            width={40} height={40}
                                            className={'rounded-circle mx-2'}
                                     ></Image> 无疼过程
                                 </div>
                             </div>
                         </Col>
                     </Row>

                 </Container>
            </div>
    );
}

export default FirstPage;
