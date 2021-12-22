import React, { useEffect, useState } from 'react';
import styles from "../Styles/PlaylistCard.module.css"
import { BsPlayFill } from "react-icons/bs";
import { GiMusicalNotes } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { setPlayItem, setPlayItemIndex, setPlayMode, setPlayStatus, setPlayQueue } from '../Redux/player/actions';
import { Link } from 'react-router-dom';

const PlaylistCard = (data) => {
    const dispatch = useDispatch();
    const {
        playlistData,
        radiolistData
    } = useSelector((state) => state.player)
    
    const { list, listIndex, lastIndex } = data;
    
    const playSelectedStream = (list, listIndex) => {
        dispatch(setPlayQueue(list))
        dispatch(setPlayMode("playlist"))
        dispatch(setPlayItem(list.playlist_content[0]))
        dispatch(setPlayItemIndex(listIndex))
        dispatch(setPlayStatus(true))
    }
    
    return (
        <div className={styles.card}>
                    <img src={list.playlist_content[0].thumbnails.maxres.url} alt="radio station" className={styles.cardCover}/>
                    <h4 className={styles.cardTitle}>{list.playlist_name}</h4>
                    <p className={styles.cardChannelTitle}>{list.playlist_content[0].channelTitle}</p>
                    <div className={styles.itemCountDiv}>
                        <GiMusicalNotes className={styles.itemCountIcon}/>
                        <p className={styles.itemCount}>{list.playlist_content.length}</p>
                    </div>
                    <div className={styles.playBtnDiv}>
                        {
                          listIndex !== lastIndex ? 
                            <BsPlayFill className={styles.playBtn} onClick={() => playSelectedStream(list, listIndex)}/>
                                : 
                            <Link to="/playlist" className={styles.seeAllLink}>SEE ALL</Link>
                        }
                    </div>
                </div>
    )
}

export { PlaylistCard }