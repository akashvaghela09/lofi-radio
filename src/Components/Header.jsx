import React from 'react';
import styles from '../Styles/Header.module.css'
import {Link, useLocation} from "react-router-dom";
import { VscRadioTower } from "react-icons/vsc";
import { BsCollectionPlay } from "react-icons/bs";

const Header = () => {
    const location = useLocation();
    
    return (
        <div className={styles.header}>
            <Link to="/" className={location.pathname === "/" ? styles.activeLink : styles.link}>
            <div className={styles.pageNameDiv} >
                <p className={styles.pageName}>Lofi Player</p>
            </div>
            </Link>
            <div className={styles.headerItemWrapper}>
            <Link to="/radio" className={location.pathname === "/radio" ? styles.activeLink : styles.link}>
            <div className={styles.headerItem}>
                <VscRadioTower className={styles.headerItemIcon}/>
                <p className={styles.headerText}>Radio</p>
            </div>
            </Link>
            <Link to="/playlist" className={location.pathname === "/playlist" ? styles.activeLink : styles.link}>
            <div className={styles.headerItem}>
                <BsCollectionPlay className={styles.headerItemIcon}/>
                <p className={styles.headerText}>Playlist</p>
            </div>
            </Link>
            </div>
        </div>
    )
}

export { Header }