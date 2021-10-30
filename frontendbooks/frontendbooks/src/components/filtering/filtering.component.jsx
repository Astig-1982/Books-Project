import React from 'react';
import { Link } from 'react-router-dom';

import './filtering.styles.css';

const FilterItems = () => {
    return(
        <div className='filter-div'>
            <Link to='/all-books/a_to_z'>
                Order By Name
            </Link>
        </div>
    );   
}

export default FilterItems