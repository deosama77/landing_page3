import React , {useRef} from 'react';
import {Container , Row,Col} from "react-bootstrap";
import Image_row1_col1 from '../public/images/page_7/row_1_col_1.png';
import Image_row1_col2 from '../public/images/page_7/row_1_col_2.png';
import Image_row1_col3 from '../public/images/page_7/row_1_col_3.png';

import Image_row2_col1 from '../public/images/page_7/row_2_col_1.png';
import Image_row2_col2 from '../public/images/page_7/row_2_col_2.png';
import Image_row2_col3 from '../public/images/page_7/row_2_col_3.png';

import Image_title from '../public/images/page_7/Icons_title.png'
import Image from 'next/image';
import styles from'../styles/Seventh.module.css';

import LikeIcon from '../public/images/page_7/Like_1.png'
import LovIcon1 from '../public/images/page_7/Icons_love.png';
import {Animate, useElementOnScreen} from "../hooks/useElementOnScreen";
import ClickIcon from '../public/images/click_01_cut.png';

function SeventhPage(props) {
    const firstAnimate=useRef();
    useElementOnScreen(firstAnimate);

    return (
       <Container className={'border border-3 rounded-5 border-warning pb-5'}>

           <Row className={styles.row_icons}>
               <Col xs={2}>

                   <div>

                       <Image src={LikeIcon} alt={"like icon"}
                              width={150} height={150}
                              className={styles.like_1}
                       ></Image>

                   </div>

               </Col>
               <Col xs={2}>
                   <div>
                       <Image src={LovIcon1} alt={"like icon"}
                              width={150} height={150}
                              className={styles.love_1}
                       ></Image>
                   </div>
               </Col>
               <Col xs={2}>
                   <div>
                       <Image src={LovIcon1} alt={"like icon"}
                              width={100} height={100}
                              className={styles.love_2}
                       ></Image>
                   </div>
               </Col>
               <Col xs={2}>
                   <div>
                       <Image src={LikeIcon} alt={"like icon"}
                              width={100} height={100}
                              className={styles.like_2}
                       ></Image>
                   </div>
               </Col>
           </Row>

           <Row className={styles.row_header}>
               <Col className={'d-flex flex-row justify-content-center align-items-center  position-relative '+styles.header_title}>
               <div className={'h2 text-center py-3'}>述評</div>
               <Image src={Image_title} alt={"icons title"}
               width={200} height={100}></Image>
           </Col></Row>

           <Row className={'justify-content-center align-items-center'}>

               <Col  xl={4} lg={6} className={'my-1 m-lg-0 d-flex justify-content-center align-items-center'}>
                   <Animate.ScaleIn>
                  <Image src={Image_row1_col1} alt={"image 1"}
                  width={320} height={230}></Image>
                   </Animate.ScaleIn>
               </Col>


               <Col xl={4} lg={6} className={'my-1 m-lg-0 d-flex justify-content-center align-items-center'}>
                   <Animate.ScaleIn>
                   <Image src={Image_row1_col2} alt={"image 1"}
                          width={300} height={180}></Image>
                   </Animate.ScaleIn>
               </Col>


               <Col xl={4} lg={5} className={'my-1 m-lg-0 d-flex justify-content-center align-items-center'}>
                   <Animate.ScaleIn>
                   <Image src={Image_row1_col3} alt={"image 1"}
                          width={300} height={180}></Image>
                   </Animate.ScaleIn>
               </Col>

           </Row>

           <Row className={'justify-content-center align-items-center pb-2 pb-md-0 pt-3 '+styles.row_2}>
               <Col   lg={6} className={'my-1 m-lg-0 d-flex justify-content-center justify-content-lg-start align-items-center'}>
                   <Animate.ScaleIn>
                   <Image src={Image_row2_col1} alt={"image 1"}
                          width={360} height={230}></Image>
                  </Animate.ScaleIn>
               </Col>
               <Col  lg={6} className={'my-1 m-lg-0 d-flex justify-content-center justify-content-lg-start align-items-center position-relative '+styles.row2_col2}>
                   <Animate.ScaleIn>
                   <Image src={Image_row2_col2} alt={"image 1"}
                          width={400} height={180}></Image>
                   </Animate.ScaleIn>
               </Col>
               <Col  lg={6} className={'my-1 m-lg-0 d-flex justify-content-center justify-content-lg-start align-items-center position-relative '+styles.row2_col3}>
                   <Animate.ScaleIn>
                   <Image src={Image_row2_col3} alt={"image 1"}
                          width={400} height={180}></Image>
                   </Animate.ScaleIn>
               </Col>
           </Row>
           <div className={'d-flex align-items-start justify-content-center '+styles.click_icon}>
               <Image className={'fa-fade'}
                      src={ClickIcon} alt={"click icon"} width={220} height={60}></Image>
           </div>
       </Container>
    );
}

export default SeventhPage;
