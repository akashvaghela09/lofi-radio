import React from 'react';
import { Header } from '../Components/Header';
import styles from '../Styles/Playlist.module.css'

const Playlist = () => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            Playlist
        </div>
    )
}

export { Playlist }