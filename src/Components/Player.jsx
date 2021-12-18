import React, { useEffect, useRef, useState } from 'react';
import styles from "../Styles/Player.module.css";
import ReactPlayer from 'react-player';
import playlistData from "../Template/playlist.json";
import radioData from "../Template/radio.json";
import { useDispatch, useSelector } from 'react-redux';
import { setLoadProgress, setPlayProgress, setPlayStatus, setSeekValue, setTotalPlaytime, setVolumeValue } from '../Redux/player/actions';

const Player = () => {
    const dispatch = useDispatch()
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
    
    const youtubeUrls = [
        "https://www.youtube.com/watch?v=saYfjjUQ6xw",
        "https://www.youtube.com/watch?v=8pfdxZAvKoU",
        "https://www.youtube.com/watch?v=xitd9mEZIHk",
        "https://www.youtube.com/watch?v=x-KbnJ9fvJc",
        "https://www.youtube.com/watch?v=5qap5aO4i9A",
    ]

    const audioRef = useRef();
    
    const handlePlay = () => {
        if(play_status === true){
            let count = 1;
            let timeId = setInterval(() => {
                count = (count) - 0.1
                if(count >= 0){
                    dispatch(setVolumeValue(count))
                } else {
                    dispatch(setVolumeValue(0))
                    clearInterval(timeId)
                    dispatch(setPlayStatus(!play_status))
                }
            }, 150);
        } else {
            dispatch(setPlayStatus(!play_status))
            let count = 0;
            let timeId = setInterval(() => {
                count = (count) + 0.1
                if(count <= 1){
                    dispatch(setVolumeValue(count))
                } else {
                    dispatch(setVolumeValue(1))
                    clearInterval(timeId)
                }
            }, 150);
        }
    }
    
    const handleVolumeChange = (e) => {
        let tempValue = e.target.value
        dispatch(setVolumeValue(tempValue))
    }
    
    const handleProgress = (e) => {
        let tempLoad = e.loaded * 100
        let tempPlayed = e.played * 100
        dispatch(setPlayProgress(tempPlayed+"%"))
        dispatch(setLoadProgress(tempLoad+"%"))
        dispatch(setSeekValue(tempPlayed+"%"))
    }
    
    const handleSeekChange = (e) => {
        let tempSeek = e.target.value
        audioRef.current.seekTo(tempSeek, "fraction")
    }
    
    useEffect(() => {
        console.log(playlistData);
        console.log(radioData);
    }, []);
    
    return (
        <div className={styles.wrapper}>
            <ReactPlayer 
                url="https://www.youtube.com/watch?v=NwdQx2P_ytk"
                playing={play_status}
                volume={volume_value}
                controls={true}
                onProgress={(e) => handleProgress(e)}
                onDuration={(e) => dispatch(setTotalPlaytime(e))}
                ref={audioRef}
                loop={true}
                // width="0px"
                // height="0px"
            />
            <button className={styles.playButton} onClick={() => handlePlay()}>{play_status !== true ? "Play" : "Pause"}</button>
            <div className={styles.volumeDiv}>
                <input value={volume_value} onChange={(e) => handleVolumeChange(e)} type="range" min="0" max="1" step="0.001"/>
                <h3>Volume {Math.round(volume_value * 100)}</h3>
            </div>
            <div className={styles.progressDiv} >
                <div className={styles.progressLoad} style={{width: load_progress}}/>
                <div className={styles.progressBarVisible} style={{width: play_progress}}/>
                <input className={styles.progressBar} value={seek_value} onChange={(e) => handleSeekChange(e)} type="range" min="0" max="1" step="0.001"/>
            </div>
        </div>
    )
}

export  { Player }