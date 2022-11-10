import Link from 'next/link';
import React from 'react';
import styles from '../styles/header.module.css'


export default function Header () {

    return(
        <header className={styles.header}>
           <h2 className={styles.logo}>SGR</h2>
           <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.listItem}><Link className={styles.navLink} href='/'>Home</Link></li>
                <li className={styles.listItem}><Link className={styles.navLink} href='/portafolio'>Portafolio</Link></li>
                <li className={styles.listItem}><Link className={styles.navLink} href='/contacto'>Contacto</Link></li>
            </ul>
           </nav>
        </header>
    )
}