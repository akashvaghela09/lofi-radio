import React from 'react';
import { Header } from '../Components/Header';
import styles from '../Styles/Radio.module.css'
import { BsPlayFill } from "react-icons/bs";
import { FiRadio } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { setPlayItem, setPlayItemIndex, setPlayStatus } from '../Redux/player/actions';
import { RadioCard } from '../Components/RadioCard';

const Radio = () => {
    const dispatch = useDispatch();
    const {
        radiolistData
    } = useSelector((state) => state.player)
    
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.cardSection}>
                {
                    radiolistData.map((item, itemIndex) => <RadioCard item={item} itemIndex={itemIndex}/> )
                }
            </div>
        </div>
    )
}

export { Radio }