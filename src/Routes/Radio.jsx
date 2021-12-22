import React from 'react';
import { Header } from '../Components/Header';
import styles from '../Styles/Radio.module.css'
import { BsPlayFill } from "react-icons/bs";
import { FiRadio } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { setPlayItem, setPlayItemIndex, setPlayStatus } from '../Redux/player/actions';
import { PlayCard } from '../Components/PlayCard';

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
        playlistData,
        radiolistData,
        play_mode,
        template_use_status
    } = useSelector((state) => state.player)
    
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.cardSection}>
                {
                    radiolistData.map((item, index) => <PlayCard item={item} index={index}/> )
                }
            </div>
        </div>
    )
}

export { Radio }