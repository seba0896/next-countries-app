import React from 'react';
import Header from './Header';
import { layout } from './layout.module.css'



export default function Layout( { children } ) {

    return(
       <div className={layout}>
        <Header />
            <main style={{padding: "2rem"}}>
                {children}
            </main>
       </div>
    )

}