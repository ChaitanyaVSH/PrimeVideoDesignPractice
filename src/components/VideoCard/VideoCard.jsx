import React from "react";
import Badge from 'react-bootstrap/Badge';
import {MDBIcon} from "mdbreact";
import styles from "./VideoCard.module.css";

const VideoCard = () => {
    return(
        <div className={styles.videoCard}>
            <div className={styles.videoCardTransparent}>
                <a>Naayak</a>
                <div className={styles.bottomDiv}>
                    <div>
                        {/* https://mdbootstrap.com/docs/react/content/icons-usage/ */}
                        <button className={styles.btn}><MDBIcon icon="play" size="lg"/>{' '}Play</button>
                        <button className={styles.circle}><MDBIcon icon="plus" size="lg"/></button>
                        <button className={styles.circle}><MDBIcon icon="info" size="lg"/></button>
                    </div>
                    <div className={styles.bottomDivTwo}>
                        <Badge variant="danger">18+</Badge>{' '}{' '}
                        <span>Comedy</span>
                    </div>
                </div>
            </div>
            <div className={styles.videoCardNonTransparent}>
                <div className={styles.videoCardNonTransparentContent}>

                </div>
            </div>
        </div>
    );
}

export default VideoCard;
