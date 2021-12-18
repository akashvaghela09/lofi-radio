import React, { useRef, useState } from 'react';
import styles from "../Styles/Template.module.css";
import mydata from "../Template/playlist.json";
const Template = () => {
    const [downloadUrl, setDownUrl] = useState(null)
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
    
    return (
        <div className={styles.wrapper}>
            <h1>Template Generator</h1>
            <button onClick={(e) => download(e)}>Download</button>
            <a 
                className={styles.downloadLink}
                download="template.json"
                href={downloadUrl}
                ref={myref}
            >download link</a>
        </div>
    )
}

export { Template }