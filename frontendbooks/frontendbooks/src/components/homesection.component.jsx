import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import './homesection.styles.css';

const HomeSection = ({sectionLink, logIn, authors}) => {
    return(
        <div>
            <div className={`${logIn ? 'login' : ''} ${authors ? 'authors' : ''} home-section`}>
                <h3>{sectionLink}</h3>
            </div>
        </div>
    );   
}

export default HomeSection
