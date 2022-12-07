import React , {useRef} from 'react';
import {Container , Col , Row} from "react-bootstrap";
import styles from '../styles/First.module.css'
import Image from "next/image";
import TopLeftImage from '../public/images/page_1/Icons_1_21.png'
import Logo from '../public/images/page_1/Sense_Logo.png';

import Icone2 from '../public/images/page_1/icons_2_new_c.png';
import Icone3 from '../public/images/page_1/icons_1_03_new.png';
import Icone4 from '../public/images/page_1/icons_1_04_new.png';
import {Animate, useElementOnScreen} from "../hooks/useElementOnScreen";


function FirstPage(props) {
    const firstAnimate=useRef();
    useElementOnScreen(firstAnimate);

    return (
        <>
            <div className={'position-absolute '+styles.logo}>
                <Image src={Logo} alt={"logo picture"}
                       width={280} height={200}
                ></Image>
            </div>
            <div className={styles.first_page_background}>
                 <Container fluid={+true}>
                     <Row className="justify-content-md-start
                                    align-items-md-start
                                     justify-content-center align-items-center">
                     <Col xs={3}><Image src={TopLeftImage}
                               className={styles.top_left_image}
                               alt={"first picture"}
                               width={220}
                               height={180}
                   ></Image></Col>
                     </Row>
                     <Row>
                         <Col>
                             <div className={'d-flex flex-column align-items-center justify-content-center'}>
                                 <h2 className={'my-2 '+styles.header_top}>马来西亚首创</h2>
                                 <h1 className={'my-2 '+styles.header_middle}>「捏骨式」</h1>
                                 <h2 className={'my-2 '+styles.header_bottom}>半永久纹绣品牌</h2>
                             </div>
                         </Col>
                     </Row>
                     <Row className={'mt-md-3 mt-1'}>
                         <Col>
                             <Animate.ScaleIn>
                             <div className={'d-flex flex-column flex-md-row justify-content-center align-items-stretch'}>

                                 <div className={'px-2 py-2 border rounded mx-1 d-inline-flex align-items-center'} style={{backgroundColor:'#f9f0f0'}}>
                                     <Image src={Icone2} alt={"icone 2"}
                                            width={40} height={40}
                                            className={'rounded-circle mx-2'}
                                     ></Image>
                                     <h4>自然伪妆感</h4>
                                 </div>


                                 <div className={'px-2 py-2 border  rounded mx-1 d-inline-flex align-items-center'} style={{backgroundColor:'#f9f0f0'}}>
                                     <Image src={Icone3} alt={"icone 2"}
                                            width={40} height={40}
                                            className={'rounded-circle mx-2'}
                                     ></Image> <h4>科技修饰脸型</h4>
                                 </div>
                                 <div className={'px-2 py-2 border  rounded mx-1 d-inline-flex align-items-center'} style={{backgroundColor:'#f9f0f0'}}>
                                     <Image src={Icone4} alt={"icone 2"}
                                            width={40} height={40}
                                            className={'rounded-circle mx-2'}
                                     ></Image> <h4>无疼过程</h4>
                                 </div>
                             </div>
                             </Animate.ScaleIn>
                         </Col>
                     </Row>

                 </Container>
            </div>
        </>
    );
}

export default FirstPage;
