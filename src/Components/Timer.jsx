import React, { useEffect, useState } from 'react';
import styles from '../Styles/Styles.module.css'

const Timer = () => {

    const [timer, setTimer] = useState(0)

    useEffect(() => {
        const handler = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000);

        return () => clearInterval(handler)
    }, [])

    return (
        <div>
            <h1 className={styles.timer}>{timer}</h1>
        </div>
    )
}

export {Timer}