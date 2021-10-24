import React from 'react';
import { Link } from 'react-router-dom';

import './homesection.styles.css';

const HomeSection = ({ children, books, authors }) => {
    return(
        <div >
            <Link to='/all-books' className='links'>
                <div className={`${books ? 'books-div' : authors ? 'authors-div' : ''} home-section-div`}>
                    <h3>{children}</h3>
                </div>
            </Link>
        </div>
    );   
}

export default HomeSection  