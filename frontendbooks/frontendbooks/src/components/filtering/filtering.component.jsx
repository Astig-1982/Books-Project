import React from 'react';
import { Link } from 'react-router-dom';

import './filtering.styles.css';

const FilterItems = ({ filter_method, children }) => {
    return(
        <div className='filter-div'>
            <Link to={`/all-books/${filter_method}`}>
                {children}
            </Link>
        </div>
    );   
}

export default FilterItems