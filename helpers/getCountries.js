/* import { useState, useEffect } from "react";

export function GetCountries(){
    const [ countries, setCountries ] = useState([]);
        useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then( res => res.json())
        .then( data => {
            setCountries(data);
            console.log(data)
        })
        }, [])

        return countries;
} */