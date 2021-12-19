import React from 'react';
import styles from '../Styles/Home.module.css'
import { VscRadioTower } from "react-icons/vsc";
import { BsCollectionPlay } from "react-icons/bs";

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div>Lofi Player</div>
                <div>
                    <VscRadioTower />
                    <p>Radio</p>
                </div>
                <div>
                    <BsCollectionPlay />
                    <p>Playlist</p>
                </div>
            </div>
        </div>
    )
}

export { Home }