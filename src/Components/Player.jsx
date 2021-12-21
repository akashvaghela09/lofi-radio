import React, { useEffect, useRef, useState } from 'react';
import styles from "../Styles/Player.module.css";
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { 
            setLoadProgress, 
            setPlayItem, 
            setPlayProgress, 
            setPlayStatus, 
            setSeekValue, 
            setTotalPlaytime, 
            setPlayItemIndex, 
            setVolumeValue, 
            setLoopStatus,
            setShuffleStatus,
            setMuteStatus 
} from '../Redux/player/actions';

import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { BiShuffle } from "react-icons/bi";
import { MdRepeatOne, MdRepeat } from "react-icons/md";
import { RiPlayListFill } from "react-icons/ri";
import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";

const Player = () => {
    const dispatch = useDispatch();
    const location = window.location.pathname;
    const [playerVisible, setPlayerVisible] = useState(false);
    const [playerBarPlayStatus, setPlayerBarPlayStatus] = useState(false);
    
    const [show, setShow] = useState(false)
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
        template_use_status,
        play_item_index,
        current_playlist_id,
        loop_status,
        shuffle_status,
        mute_status
    } = useSelector((state) => state.player)
    
    const audioRef = useRef();
    const volumeRef = useRef();
    
    const handlePlay = () => {
        if(play_status === true){
            setPlayerBarPlayStatus(false)
            // let count = 1;
            // let timeId = setInterval(() => {
            //     count = (count) - 0.1
            //     if(count >= 0){
            //         dispatch(setVolumeValue(count))
            //     } else {
            //         dispatch(setVolumeValue(0))
            //         clearInterval(timeId)
                    dispatch(setPlayStatus(!play_status))
            //     }
            // }, 150);
        } else {
            setPlayerBarPlayStatus(true)
            dispatch(setPlayStatus(!play_status))
            // let count = 0;
            // let timeId = setInterval(() => {
            //     count = (count) + 0.1
            //     if(count <= 1){
            //         dispatch(setVolumeValue(count))
            //     } else {
            //         dispatch(setVolumeValue(1))
            //         clearInterval(timeId)
            //     }
            // }, 150);
        }
    }
    
    const handleVolumeChange = (e) => {
        let tempValue = e.target.value
        dispatch(setVolumeValue(tempValue))
        dispatch(setMuteStatus(false))
    }
    
    const handleProgress = (e) => {
        let tempLoad = e.loaded * 100
        let tempPlayed = e.played * 100
        let tempSeek = e.played
        dispatch(setPlayProgress(tempPlayed+"%"))
        dispatch(setLoadProgress(tempLoad+"%"))
        dispatch(setSeekValue(tempSeek))
    }
    
    const handleSeekChange = (e) => {
        let tempSeek = e.target.value
        audioRef.current.seekTo(tempSeek, "fraction")
    }
    
    const setPlayerInitialData = (para) => {
        if(((play_item_index + 1) !== radiolist.length) && para === "next"){
            dispatch(setPlayItemIndex(play_item_index + 1))
            dispatch(setPlayItem(radiolist[play_item_index+1]))
        }  else if (((play_item_index) !== 0) && para === "prev") {
            dispatch(setPlayItemIndex(play_item_index - 1))
            dispatch(setPlayItem(radiolist[play_item_index-1]))
        }
    }
    
    const handleLoop = (para) => {
        dispatch(setLoopStatus(para))
    }
    
    const handleShuffle = () => {
        dispatch(setShuffleStatus(!shuffle_status))
    }
    
    const handleMute = () => {
        dispatch(setMuteStatus(!mute_status))
    }
 
    useEffect(() => {
        
        switch (location) {
            case "/":
            case "/radio":
            case "/playlist":
                setPlayerVisible(true)  
                break;
            default:
            setPlayerVisible(false)
                break;
        }
        
    }, []);
                    
        return (
        <div className={playerVisible === true ? styles.wrapper : styles.hide}>
            <ReactPlayer 
                url={play_item.video_url}
                playing={play_status}
                volume={mute_status === true ? "0" : volume_value}
                controls={true}
                onProgress={(e) => handleProgress(e)}
                onDuration={(e) => dispatch(setTotalPlaytime(e))}
                ref={audioRef}
                loop={true}
                width="0px"
                height="0px"
            />
            <div className={styles.progressDiv} >
                <div className={styles.progressLoad} style={{width: load_progress}}/>
                <div className={styles.progressBarVisible} style={{width: play_progress}}/>
                <input className={styles.progressBar} value={seek_value} onChange={(e) => handleSeekChange(e)} type="range" min="0" max="1" step="0.001"/>
            </div>
            <div className={styles.container}>
                <div className={styles.playerBarCoverSection}>
                    <div className={styles.playeyBarCoverDiv}>
                        <img className={styles.playerBarCover} src={play_item.thumbnails.medium.url} alt="stream cover" />
                    </div>
                    <div className={styles.playerBarCoverSectionData}>
                        <p className={styles.playerBarCoverTitle}>{play_item.title}</p>
                        <p className={styles.playerBarCoverChannel}>{play_item.channelTitle}</p>
                    </div>
                </div>
                <div className={styles.playerBarControlSection}>
                
                    {
                        loop_status === "one" 
                            ? <MdRepeatOne onClick={() => handleLoop("")} className={styles.playerBarIconActive}/> 
                                : loop_status === "" 
                                    ? <MdRepeat onClick={() => handleLoop("all")} className={styles.playerBarRepeatIcon}/>
                                        : <MdRepeat onClick={() => handleLoop("one")} className={styles.playerBarIconActive}/>
                    }
                    <CgPlayTrackPrev onClick={() => setPlayerInitialData("prev")} className={styles.playerBarPrevIcon}/>
                    {
                        play_status === true ? 
                        <BsPauseFill onClick={() => handlePlay()} className={styles.playerBarPauseIcon}/>
                        :
                        <BsPlayFill onClick={() => handlePlay()} className={styles.playerBarPlayIcon}/>
                    }
                    <CgPlayTrackNext onClick={() => setPlayerInitialData("next")} className={styles.playerBarNextIcon}/>
                    <BiShuffle onClick={() => handleShuffle()} className={shuffle_status === true ? styles.playerBarIconActive : styles.playerBarShuffleIcon}/>
                </div>
                <div className={styles.playerBarQueueSection}>
                    {
                        volume_value <= "0" ||
                        mute_status === true ? 
                            <IoVolumeMute onDoubleClick={() => handleMute()} className={styles.playerBarVolumeIcon}/> 
                            : 
                            <IoVolumeHigh onDoubleClick={() => handleMute()} className={styles.playerBarVolumeIcon}/>
                    }
                            <input ref={volumeRef} id="volumeSetter"  value={volume_value} onChange={(e) => handleVolumeChange(e)} type="range" min="0" max="1" step="0.001"/>
                    <RiPlayListFill className={styles.playerBarQueueIcon}/>
                    {/* <div className={styles.volumeDiv}>
                        <input value={volume_value} onChange={(e) => handleVolumeChange(e)} type="range" min="0" max="1" step="0.001"/>
                        <h3>Volume {Math.round(volume_value * 100)}</h3>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export  { Player }