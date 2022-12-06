import React from 'react';
import styles from '../styles/Second.module.css';
import Icon1 from '../public/images/page_2/Icons_1_05.png';
import Icon2 from '../public/images/page_2/Icons_1_06.png';
import Icon3 from '../public/images/page_2/Icons_1_07.png';
import Image from "next/image";
function SecondPage(props) {
    return (
        <>
            <div className={styles.left_image_background}></div>
            <div className={styles.right_image_background}></div>
            <div className={styles.card_sense +' border border-3 border-warning rounded-5'}>
                    <h4 className={'text-center w-100'}>SENSE EMBROIDERY</h4>
              <div className={'d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-start w-100'}>
                  <Image src={Icon1} alt={"icon 1"} width={120}
                  height={90}></Image>
                  <div className={'d-flex flex-column justify-content-center align-items-center'}>
                      <h4 className={'p-0 m-0'}>亚洲半永久美容</h4>
                      <h4 className={'p-0 m-0'}>大赛裁判长创办</h4>
                  </div>

              </div>

                <div className={'d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-start w-100'}>
                    <Image src={Icon2} alt={"icon 1"} width={120}
                           height={90}></Image>
                    <div className={'d-flex flex-column justify-content-center align-items-center'}>
                        <h4 className={'p-0 m-0'}>融合国际先进技术</h4>
                    </div>

                </div>

                <div className={'d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-start w-100'}>
                    <Image src={Icon3} alt={"icon 1"} width={120}
                           height={90}></Image>
                    <div className={'d-flex flex-column justify-content-center align-items-center'}>
                        <h4 className={'p-0 m-0'}>服务超过100000位客户</h4>
                    </div>

                </div>
            </div>
        </>

    );
}

export default SecondPage;
