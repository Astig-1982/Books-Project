import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const HomeSection = () => {
    return(
        <div>
            <h1>BOOKS UNIVERSE</h1>
            <Link to='/all-books'>
                All Books
            </Link>
        </div>
    )
    
}

export default HomeSection