import React from 'react';
import styles from '../Styles/Home.module.css'
import { Header } from '../Components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { RadioCard } from '../Components/RadioCard';
import { PlaylistCard } from '../Components/PlaylistCard';


const Home = () => {
    const dispatch = useDispatch();
    const {
        playlistData,
        radiolistData
    } = useSelector((state) => state.player)
    
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.cardSection}>
                <p className={styles.cardSectionTitle}>Featured Lofi Radios</p>
                <div className={styles.cardListDiv}>
                    {
                        radiolistData.map((item, itemIndex) => {
                            if(itemIndex < 5){
                                return <RadioCard item={item} itemIndex={itemIndex} lastIndex={radiolistData.length < 5 ? (radiolistData.length-1) : 4}/>
                            }
                        })
                    }
                </div>
            </div>
            <div className={styles.cardSection}>
                <p className={styles.cardSectionTitle}>You Might Like</p>
                <div className={styles.cardListDiv}>
                    {
                        playlistData.map((list, listIndex) => {
                            if(listIndex < 5){
                                return <PlaylistCard list={list} listIndex={listIndex} lastIndex={playlistData.length < 5 ? (playlistData.length-1) : 4}/>
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export { Home }