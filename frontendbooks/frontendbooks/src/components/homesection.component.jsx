import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import './homesection.styles.css';

const HomeSection = ({ children, booksDiv, authorsDiv }) => {
    return(
        <div className={`${booksDiv ? 'books-div' : authorsDiv ? 'authors-div' : ''} home-section-div`}>
            <Link to='/all-books' className='links'>
                <div>
                    <h3>{children}</h3>
                </div>
            </Link>
        </div>
    );   
}

export default HomeSection  




