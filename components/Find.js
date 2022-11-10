import React from 'react';
import styles from '../styles/find.module.css'


export default function Find(props){

    return(
        <div className={styles.find}>
           <input onChange={props.findCountry} className={styles.findCountry} type='text' placeholder='Search for a Country'/>
           <select onChange={props.findRegion} className={styles.select}>
                <option value='default'>Find by Region</option>
                <option value='africa'>Africa</option>
                <option value='americas'>Americas</option>
                <option value='asia'>Asia</option>
                <option value='europe'>Europe</option>
                <option value='oceania'>Oceania</option>
           </select>
        </div>
    )
}