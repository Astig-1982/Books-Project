import React from 'react';
import { Link } from 'react-router-dom';
import { defaultMemoize } from 'reselect';

import './homesection.styles.css';

const HomeSection = ({ children, books, authors, order_by }) => {
    return(
        <div>
            <Link to={`/all-books/${order_by}`} className='links'>
                <div className={`${books ? 'books-div' : authors ? 'authors-div' : ''} home-section-div`}>
                    <h3>{children}</h3>
                </div>
            </Link>
        </div>
    );   
}

export default HomeSection  




