import React from 'react';
import styles from '../Styles/Home.module.css'
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