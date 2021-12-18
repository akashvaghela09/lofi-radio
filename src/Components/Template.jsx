import React, { useRef, useState } from 'react';
import styles from "../Styles/Template.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { setTempAPIKey, setEndPoint, setTempData } from '../Redux/template/actions';

import Modal from 'react-modal';
import mydata from "../Template/playlist.json";
const Template = () => {
    const dispatch = useDispatch()
    const [downloadUrl, setDownUrl] = useState(null)
    const {
        tempKey, 
        tempData, 
        endPoint
    } = useSelector((state) => state.template)
    // const [apiKey, setAPIKey] = useState("")
    // const templateData = { "playlist": [], "radio": [] }
    const myref= useRef();
   
    const download = (e) => {
        e.preventDefault();
          
        // Prepare the file
        let output = JSON.stringify({states: mydata}, null, 4); 
        
        // Download it
        const blob = new Blob([output]);
        const fileDownloadUrl = URL.createObjectURL(blob);
        setDownUrl(fileDownloadUrl)
        myref.current.click()
    }
    
    
    const handleSearch = () => {
        console.log(endPoint)
        console.log(tempKey);
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleDiv}>
                <h1 className={styles.title}>Template Generator</h1>
                <p className={styles.subTitle}>based on Youtube Data API v3</p>
            </div>
            
            <div className={styles.configDiv}>
                <button className={styles.loadBtn}>Load Template</button> 
                <button className={styles.previewBtn}>Preview List</button>       
                {/* <button onClick={(e) => download(e)}>Download</button><br></br> */}
                <input
                    className={styles.keyInput}
                    value={tempKey}
                    type="text" 
                    placeholder='Youtube API key'
                    onChange={(e) => dispatch(setTempAPIKey(e.target.value))}
                />
                <a 
                    className={styles.downloadLink}
                    download="template.json"
                    href={downloadUrl}
                    ref={myref}
                >download link</a>
                <div className={styles.endPointDiv}>
                    <div className={styles.endPointTitleDiv}>
                        <h3 className={styles.endPointText}>Select Endpoint </h3>
                        <p className={styles.endPointText}>current endpoint is {endPoint}</p>
                    </div>
                    <div className={styles.endPointBtnDiv}>
                        <button className={endPoint === "Channel" ? styles.activeEndPoint : styles.endPointBtn} onClick={() => dispatch(setEndPoint("Channel"))}>Channel</button>
                        <button className={endPoint === "Playlist" ? styles.activeEndPoint : styles.endPointBtn} onClick={() => dispatch(setEndPoint("Playlist"))}>Playlist</button>
                        <button className={endPoint === "Video" ? styles.activeEndPoint : styles.endPointBtn} onClick={() => dispatch(setEndPoint("Video"))}>Video</button>
                    </div>
                </div>
                <div className={styles.searchDiv}>
                    <div className={styles.searchInputDiv}>
                        <input className={styles.searchInput} placeholder={`${endPoint} id`}/>
                    </div>
                    <div className={styles.searchBtnDiv}>
                        <button className={styles.searchBtn} onClick={() => handleSearch()}>Search</button>
                    </div>   
                </div>
            </div>
            <div className={styles.resultDiv}>
                {
                    "hkjh"
                }
            </div>
        </div>
    )
}

export { Template }