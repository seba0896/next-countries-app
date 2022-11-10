import React from 'react';
import styles from '../styles/back.module.css'


function handleClick( e ) {

    window.history.back();
}

export default function Back() {
    return(
        <div>
            <button className={styles.back} onClick={handleClick}>Back</button>   
        </div>
    )
}