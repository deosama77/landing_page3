import React from 'react';
import styles from '../styles/Home.module.css'
import {Spinner} from "react-bootstrap";
function LoadingPage(props) {
    return (
        <div className={styles.container+' '+styles.container_loader}>
            <div className={'position-fixed '+styles.loader}>
                <Spinner animation="border" variant="warning" className={styles.loader_spinner} />
            </div>
        </div>

    );
}

export default LoadingPage;
