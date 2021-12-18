import React, { useRef, useState } from 'react';
import styles from "../Styles/Template.module.css";
import Modal from 'react-modal';

import mydata from "../Template/playlist.json";
const Template = () => {
    const [downloadUrl, setDownUrl] = useState(null)
    const [endPoint, setEndPoint] = useState("channel")
    const [apiKey, setAPIKey] = useState("")
    const templateData = { "playlist": [], "radio": [] }
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
                    value={apiKey}
                    type="text" 
                    placeholder='Youtube API key'
                    onChange={(e) => setAPIKey(e.target.value)}
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
                        <button className={endPoint === "channel" ? styles.activeEndPoint : styles.endPointBtn} onClick={() => setEndPoint("channel")}>Channel</button>
                        <button className={endPoint === "playlist" ? styles.activeEndPoint : styles.endPointBtn} onClick={() => setEndPoint("playlist")}>Playlist</button>
                        <button className={endPoint === "video" ? styles.activeEndPoint : styles.endPointBtn} onClick={() => setEndPoint("video")}>Video</button>
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