import React from 'react';
import Back from '../../components/Back';

import Layout from '../../components/Layout';
import styles from '../../styles/page.module.css'

export async function getStaticPaths() {

    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    const paths = data.map( country => {
        return{
            params: { name: country.name.common.toLowerCase() }
        }
    })
    return{
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    const name = context.params.name.toLowerCase()

    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await res.json();
    console.log(name)
    console.log(data)
    return{
        props: {  country: data}
    }
}
   


export default function Page({ country }){

    return(
        <Layout>
            <Back />
           {
                country.map( c => (
                    <div key={c.name.common} className={styles.card}>
                        <div style={{width: "50%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <img className={styles.img} src={c.flags.svg} />
                        </div>
                        <div className={styles.body}>
                            <h3 className={styles.title}>{c.name.common}</h3>
                            <p className={styles.population}>Native Name: <span>{c.name.nativeName.common}</span></p>
                            <p className={styles.population}>Population: <span>{c.population}</span></p>
                            <p className={styles.region}>Region: <span>{c.region}</span></p>
                            <p className={styles.region}>Sub Region: <span>{c.subregion}</span></p>
                            <p>Capital: <span>{c.capital}</span></p>
                        </div>
                        <div className={styles.body}>
                            <p className={styles.population}>Top Lavel Domain: <span>{c.population}</span></p>
                            <p className={styles.region}>Currencies: <span>{c.currencies.name}</span></p>
                            <p>Languages: <span>{c.capital}</span></p>
                        </div>
                    </div>
                ))
           }
        </Layout>
    )
}