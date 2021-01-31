import React from "react";
import Badge from 'react-bootstrap/Badge';
import {MDBIcon} from "mdbreact";
import styles from "./VideoCard.module.css";

const VideoCard = () => {
    return(
        <div className={styles.videoCard}>
            <div className={styles.videoCardTransparent}>
                <a href="https://google.com">Naayak</a>
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
                <iframe className={styles.iframe} title="Movie" src="https://www.youtube.com/embed/W03c_X8VcV0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
