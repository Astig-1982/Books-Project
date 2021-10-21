import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import './homesection.styles.css';

const HomeSection = ({ children, login, books, authors }) => {
    return(
        <div className='home-section-div'>
            <Link to='/all-books'>
                <div  className={`${login ? 'login' : books ? 'books' : authors ? 'authors' : ''}`} >
                    <h3>{children}</h3>
                </div>
            </Link>
        </div>
    );   
}

export default HomeSection  




