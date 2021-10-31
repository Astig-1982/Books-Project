import React from 'react';
import { Link } from 'react-router-dom';

import './filtering.styles.css';

const SortItems = ({ sort_method, children }) => {
    return(
        // this link will open BooksPage component and will pass it the filter_method 
        // the filter_method will then be added to the API call which will pass it to the urls of base app (books app) in django
        <div className='filter-div'>
            <Link to={`/all-books/${sort_method}`}> 
                {children}
            </Link>
        </div>
    );   
}

export default SortItems
