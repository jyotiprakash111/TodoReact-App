import React, { useEffect, useState } from 'react';
import Recipe from './reciepie';

import './App.css';
import Receipie from './reciepie';

const App = () => {

    const APP_ID = "61118f76";
    const APP_KEY = "0d71a61b3556e84c990bae58eb41d715	";
    // const exampleReq = 


    const [receipies, setReceipies] = useState([]);

    useEffect(() => {
        console.log("effect has run")
        getRecipie()
    }, [])

    const getRecipie = async () => {

        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
        // const response = await fetch(`https://randomuser.me/api/?results=50`)
        const data = await response.json()
        setReceipies(data.hits)
        console.log(data.hits);
    }
    return (
        <div className="App">
            <form className="search-form">
                <input className="search-bar" type="text" />
                <button className="search-button" type="submit">
                    search
        </button>
            </form>
            {receipies.map(receipie => (
                <Receipie />
            ))}
        </div>
    );
}

export default App;
