import React from 'react';
import styles from "../Styles/PlayCard.module.css";
import { BsPlayFill } from "react-icons/bs";
import { FiRadio } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { setPlayItem, setPlayItemIndex, setPlayStatus } from '../Redux/player/actions';

const PlayCard = (data) => {
    const dispatch = useDispatch();
    const {
        playlistData,
        radiolistData,
        play_mode,
        template_use_status
    } = useSelector((state) => state.player)
    const {item, index} = data
    
    const playSelectedStream = (para) => {
        // if(play_mode === "radio"){
            dispatch(setPlayItem(radiolistData[para]))
        // }
        dispatch(setPlayItemIndex(para))
        dispatch(setPlayStatus(true))
    }
    
    return (
        <div className={styles.card}>
            <img src={item.thumbnails.medium.url} alt="radio station" className={styles.cardCover}/>
            <h4 className={styles.cardTitle}>{item.title}</h4>
            <p className={styles.cardChannelTitle}>{item.channelTitle}</p>
            <div className={styles.radioIconDiv}>
                <FiRadio className={styles.radioIcon}/>
            </div>
            <div className={styles.playBtnDiv}>
                <BsPlayFill className={styles.playBtn} onClick={() => playSelectedStream(index)}/>
            </div>
        </div>
    )
}

export { PlayCard }