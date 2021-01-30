import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import styles from "./App.module.css";

const App = () => {
    return(
        <div className={styles.App}>
            <h1>Welcome to My world</h1>
            <VideoCard/>
        </div>
    );
}

export default App;
