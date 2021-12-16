import React, { useEffect, useRef, useState } from 'react';
import styles from "../Styles/Player.module.css";
import ReactPlayer from 'react-player/youtube'


const Player = () => {
    const URL = "https://cloud-object-storage-20-bucket-01.s3.jp-tok.cloud-object-storage.appdomain.cloud/Ek%20Passe%20Tu%20Babbu%20-%20Sakhiyaan.mp3";
    
    const [isPlayed, setPlayed] = useState(true)
    const [volumeValue, setVolumeValue] = useState(50)
    const [currentTime, setCurrentTime] = useState(0)
    const [remainingTime, setRemainingTime] = useState(0)
    const audioRef = useRef();
    
    const playFunc = () => {
        if(isPlayed == true){
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
        setPlayed(!isPlayed)
    }
    
    const handleVolumeChange = (e) => {
        let tempValue = e.target.value
        audioRef.current.volume = tempValue / 100;
        setVolumeValue(tempValue)
    }
   
    return (
        <div className={styles.wrapper}>
            <audio ref={audioRef} src={URL} type="audio/mpeg"></audio>
            <button className={styles.playButton} onClick={() => playFunc()}>{isPlayed === true ? "Play" : "Pause"}</button>
            <div className={styles.volumeDiv}>
                <input value={volumeValue} onChange={(e) => handleVolumeChange(e)} type="range" min="0" max="100" step="0.01"/>
                <h3>{Math.floor(volumeValue)}</h3>
            </div>
            <div className="">
                <h5>{currentTime}</h5>
                <input value={currentTime} type="range" />
                <h5>{remainingTime}</h5>
            </div>
        </div>
    )
}

export  { Player }