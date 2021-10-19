import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import './homesection.styles.css';

const HomeSection = ({children}) => {
    return(
        <div>
            <Link to='/all-books'>
                <div>
                    <h3>{children}</h3>
                </div>
            </Link>
        </div>
    );   
}

export default HomeSection  

/*
<div className=''>
                <Link to='/all-books'>
                    <div className=''>
                        <h3>{children}/h3>
                    </div>
                </Link>
            
            </div>
*/




