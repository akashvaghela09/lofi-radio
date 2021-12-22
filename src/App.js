import React, { useEffect } from 'react';
import styles from  './App.module.css';
import { AllRoutes } from './Routes/AllRoutes';
import { Player } from "./Components/Player";
import allData from "./Template/template.json";
import { setPlaylist, setRadiolist, setPlayItem, setPlayItemIndex } from "./Redux/player/actions";
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

function App() {
  const dispatch = useDispatch();
  let tempRadioList = allData.radioData;
  let tempPlaylist = allData.playlistData;
  
  const addID = () => {
    // add id to every item
    for(let i = 0; i < tempPlaylist.length; i++){
      let tempItem = tempPlaylist[i].playlist_content;
      tempPlaylist[i]["id"] = uuid();
      tempPlaylist[i]["channel_name"] = tempPlaylist[i].playlist_content[0].channelTitle
      
      for(let j = 0; j < tempItem.length; j++){
        tempItem[j]["id"] = uuid();
      }
    }
  }
  
  const createUrlArray = (arr) => {
    let tempArr = []
    
    for(let i = 0; i < arr.length; i++){
      tempArr.push(arr[i].video_url)
    }
    
    dispatch(setPlayItem(arr[0]))
    dispatch(setPlayItemIndex(0))
  }
  
  useEffect(() => {
    addID()
    
    createUrlArray(tempRadioList)
    dispatch(setRadiolist(tempRadioList))        
    dispatch(setPlaylist(tempPlaylist))
  }, []);
  return (
    <div className={styles.App}>
      <Player />
      <AllRoutes />
    </div>
  );
}

export default App;
