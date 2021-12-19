import React, { useEffect, useRef, useState } from 'react';
import styles from "../Styles/Template.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { setTempAPIKey, setEndPoint, setTempData, setPlaylistResults } from '../Redux/template/actions';
import axios from "axios";
import Modal from 'react-modal';
import mydata from "../Template/playlist.json";
import { v4 as uuid } from 'uuid';

const Template = () => {
    const dispatch = useDispatch()
    const [downloadUrl, setDownUrl] = useState(null)
    const {
        tempKey, 
        tempData, 
        endPoint,
        playlistResults
    } = useSelector((state) => state.template)
    const [loadPlaylistOpen, setLoadPlaylistOpen] = useState(false)
    const [currentPlaylistOpenId, setCurrentPlaylistOpenId] = useState("")
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
    
    const handlePlaylistSearchFromChannel = () => {
        axios.get("https://www.googleapis.com/youtube/v3/playlists", {
            params: {
                key: process.env.REACT_APP_KEY,
                maxResults: 50,
                channelId: "UCSJ4gkVC6NrvII8umztf0Ow",
                part: "snippet,id,contentDetails",
            }
        })
        .then((res) => {
            let myArray = []
            let response = res.data.items;
            for(let i = 0; i < response.length; i++){
                let tempItem = response[i].snippet
                let tempItemObj = {
                    "id": uuid(),
                    "title": tempItem.title,
                    "channelTitle": tempItem.channelTitle,
                    "thumbnails" : tempItem.thumbnails,
                    "itemCount": response[i].contentDetails.itemCount,
                    "playlistId": response[i].id
                }
                myArray.push(tempItemObj)
            }
            dispatch(setPlaylistResults([...myArray]))
        })
    }
    
    const handlePlaylistSearch = () => {
        
    }
    
    const handleVideoSearch = () => {
        
    }

    
    const handleSearch = () => {
        switch (endPoint) {
            case "Channel":
                handlePlaylistSearchFromChannel()
                break;
            case "Video":
                handleVideoSearch()
                break;
            case "Playlist":
                handlePlaylistSearch()
                break;
            default:
                break;
        }
    }
    
    const handleLoadPlaylist = (para) => {
        setLoadPlaylistOpen(!loadPlaylistOpen)
        setCurrentPlaylistOpenId(para.id)
    }
    
    const LoadPlayListItem = () => {
        return (
            <div>Playlist items</div>
        )
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
                        <h3 className={styles.endPointText}>Select Search Option </h3>
                        <p className={styles.endPointText}>current selection is {endPoint}</p>
                    </div>
                    <div className={styles.endPointBtnDiv}>
                        <button className={endPoint === "Playlist" ? styles.activeEndPoint : styles.endPointBtn} onClick={() => dispatch(setEndPoint("Playlist"))}>Playlist</button>
                        <button className={endPoint === "Playlist Item" ? styles.activeEndPoint : styles.endPointBtn} onClick={() => dispatch(setEndPoint("Playlist Item"))}>Playlist Item</button>
                        <button className={endPoint === "Video" ? styles.activeEndPoint : styles.endPointBtn} onClick={() => dispatch(setEndPoint("Video"))}>Video</button>
                    </div>
                </div>
                <div className={styles.searchDiv}>
                    <div className={styles.searchInputDiv}>
                        <input className={styles.searchInput} placeholder={endPoint === "Playlist" ? "channelId" : endPoint === "Playlist Item" ? "playlistId" : endPoint === "Video" ? "videoId" : ""}/>
                    </div>
                    <div className={styles.searchBtnDiv}>
                        <button className={styles.searchBtn} onClick={() => handleSearch()}>Search</button>
                    </div>   
                </div>
            </div>
            {/* <button onClick={() => console.log(playlistResults)}>check</button> */}
            <div className={styles.resultDiv}>
                {
                    playlistResults.map((el, i) => {
                        return <div key={i} className={styles.playlistResult}>
                            <div className={styles.playlistResultHeader}>
                                <p>{el.title}</p>
                                <button onClick={() => handleLoadPlaylist(el)}>
                                    {loadPlaylistOpen === true && currentPlaylistOpenId === el.id ? "close" : "load playlist"}
                                </button>
                            </div>
                            <div>
                                {
                                    loadPlaylistOpen === true && currentPlaylistOpenId === el.id  && <LoadPlayListItem />
                                }
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export { Template }