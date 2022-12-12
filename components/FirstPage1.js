import React from 'react';
import Image from "next/image";
import Gold1 from '../public/images/page_1/gold_1.png';
import Gold2 from '../public/images/page_1/gold_2.png';

function FirstPage1(props) {
    return (
        <div className={'position-absolute fa-layers-top-left'}>
            <Image src={Gold1} alt={"Gold 1 "} width={200} height={130}></Image>
        </div>
    );
}

export default FirstPage1;
