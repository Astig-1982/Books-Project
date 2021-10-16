import React, { useState, useEffect} from 'react';

import './homepage.styles.css';



const HomePage = () => {

    useEffect(() => {
        console.log("I am using useEffect")
    }, [])

    return(
        <div className='home-page'>
            <h1>The Books Universe</h1>
        </div>
    );
};

export default HomePage;
