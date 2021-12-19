import React from 'react';
import styles from '../Styles/Home.module.css'
import radioData from "../Template/radio.json";
import playlistData from "../Template/playlist.json";
import {Link} from "react-router-dom";
import { Header } from '../Components/Header';


const Home = () => {

    return (
        <div className={styles.wrapper}>
            <Header />
            Home
        </div>
    )
}

export { Home }