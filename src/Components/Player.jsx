import React, { useEffect, useRef, useState } from 'react';
import styles from "../Styles/Player.module.css";
import ReactPlayer from 'react-player';
import playlistData from "../Config/playlist.json";
import radioData from "../Config/radio.json";

const Player = () => {
    const youtubeUrls = [
        "https://www.youtube.com/watch?v=saYfjjUQ6xw",
        "https://www.youtube.com/watch?v=8pfdxZAvKoU",
        "https://www.youtube.com/watch?v=xitd9mEZIHk",
        "https://www.youtube.com/watch?v=x-KbnJ9fvJc",
        "https://www.youtube.com/watch?v=5qap5aO4i9A",
    ]
    const [isPlayed, setPlayed] = useState(false);
    const [volumeValue, setVolumeValue] = useState(1);
    const [currentProgress, setCurrentProgress] = useState(0);
    const [loadedProgress, setLoadedProgress] = useState(0);
    const [remainingTime, setRemainingTime] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [seekValue, setSeekValue] = useState(0);
    const audioRef = useRef();
    
    const handlePlay = () => {
        if(isPlayed === true){
            let count = 1;
            let timeId = setInterval(() => {
                count = (count) - 0.1
                if(count >= 0){
                    setVolumeValue(count)
                } else {
                    setVolumeValue(0)
                    clearInterval(timeId)
                    setPlayed(!isPlayed)
                }
            }, 150);
        } else {
            setPlayed(!isPlayed)
            let count = 0;
            let timeId = setInterval(() => {
                count = (count) + 0.1
                if(count <= 1){
                    setVolumeValue(count)
                } else {
                    setVolumeValue(1)
                    clearInterval(timeId)
                }
            }, 150);
        }
    }
    
    const handleVolumeChange = (e) => {
        let tempValue = e.target.value
        setVolumeValue(tempValue)
    }
    
    const handleProgress = (e) => {
        let tempLoad = e.loaded * 100
        let tempPlayed = e.played * 100
        setCurrentProgress(tempPlayed+"%")
        setLoadedProgress(tempLoad+"%")
        setSeekValue(e.played)
        
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
                playing={isPlayed}
                volume={volumeValue}
                controls={true}
                onProgress={(e) => handleProgress(e)}
                onDuration={(e) => setTotalTime(e)}
                ref={audioRef}
                loop={true}
                width="0px"
                height="0px"
            />
            <button className={styles.playButton} onClick={() => handlePlay()}>{isPlayed !== true ? "Play" : "Pause"}</button>
            <div className={styles.volumeDiv}>
                <input value={volumeValue} onChange={(e) => handleVolumeChange(e)} type="range" min="0" max="1" step="0.001"/>
                <h3>Volume {Math.round(volumeValue * 100)}</h3>
            </div>
            <div className={styles.progressDiv} >
                <div className={styles.progressLoad} style={{width: loadedProgress}}/>
                <div className={styles.progressBarVisible} style={{width: currentProgress}}/>
                <input className={styles.progressBar} value={seekValue} onChange={(e) => handleSeekChange(e)} type="range" min="0" max="1" step="0.001"/>
            </div>
        </div>
    )
}

export  { Player }