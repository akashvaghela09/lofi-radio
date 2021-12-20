import React from 'react';
import { Header } from '../Components/Header';
import styles from '../Styles/Radio.module.css'
import { BsPlayFill } from "react-icons/bs";
import { FiRadio } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { setPlayItem, setPlayItemIndex, setPlayStatus } from '../Redux/player/actions';

const Radio = () => {
    const dispatch = useDispatch();
    const {
        play_status,
        volume_value,
        play_progress,
        load_progress,
        seek_value,
        total_playtime,
        remaining_playtime,
        play_item,
        playlist,
        radiolist,
        play_mode,
        template_use_status
    } = useSelector((state) => state.player)
    
    const playSelectedStream = (para) => {
        dispatch(setPlayItem(radiolist[para]))
        dispatch(setPlayItemIndex(para))
        dispatch(setPlayStatus(true))
    }
    
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.cardSection}>
                {
                    radiolist.map((item, index) => {
                        return <div className={styles.card}>
                            <img src={item.thumbnails.medium.url} alt="radio station" className={styles.cardCover}/>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardChannelTitle}>{item.channelTitle}</p>
                            <div className={styles.radioIconDiv}>
                                <FiRadio className={styles.radioIcon}/>
                            </div>
                            <div className={styles.playBtnDiv}>
                                <BsPlayFill className={styles.playBtn} onClick={() => playSelectedStream(index)}/>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export { Radio }