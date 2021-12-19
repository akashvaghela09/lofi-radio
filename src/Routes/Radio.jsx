import React from 'react';
import { Header } from '../Components/Header';
import styles from '../Styles/Radio.module.css'
import radioData from "../Template/radio.json";
import { BsPlayFill } from "react-icons/bs";
import { FiRadio } from "react-icons/fi";

const Radio = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.cardSection}>
                {
                    radioData.list.map((item) => {
                        return <div className={styles.card}>
                            <img src={item.thumbnails.medium.url} alt="radio station" className={styles.cardCover}/>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardChannelTitle}>{item.channelTitle}</p>
                            <div className={styles.radioIconDiv}>
                                <FiRadio className={styles.radioIcon}/>
                            </div>
                            <div className={styles.playBtnDiv}>
                                <BsPlayFill className={styles.playBtn}/>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export { Radio }