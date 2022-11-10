import Link from 'next/link';
import React from 'react';
import styles from '../styles/content.module.css'

export default function Content(props){

   /*  props.AllCountries.map( country => (
        console.log(country)
    )) */
    return(
        <section className={styles.content}>
            {
                props.AllCountries.map( country => (
                   
                    <div key={country.name.common} className={styles.card}>
                     <Link href={`/page/${country.name.common.replace(" ", "-").toLowerCase()}`}>
                        <img className={styles.img} src={country.flags.png} />
                        <div className={styles.body}>
                            <h3 className={styles.title}>{country.name.common}</h3>
                            <p className={styles.population}>Population: <span>{country.population}</span></p>
                            <p className={styles.region}>Region: <span>{country.region}</span></p>
                            <p>Capital: <span>{country.capital}</span></p>
                        </div>
                     </Link>
                    </div>
                ))
            }
            
        </section>
    )
}