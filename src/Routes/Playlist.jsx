import React, { useEffect } from 'react';
import { Header } from '../Components/Header';
import styles from '../Styles/Playlist.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { PlaylistCard } from '../Components/PlaylistCard';

const Playlist = () => {
    const dispatch = useDispatch();
    const {
        playlistData,
        radiolistData
    } = useSelector((state) => state.player)
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.playlistWrapper}>
                {
                    playlistData.map((list, listIndex) => {
                        return <PlaylistCard list={list} listIndex={listIndex}/>
                    })
                }
            </div>
        </div>
    )
}

export { Playlist }