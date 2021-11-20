import React from 'react';
import { Link } from 'react-router-dom';
import SortItems from '../filtering/filtering.component';

import './mainfilter.styles.css';

const MainFilter = ({theBooks}) => {
    return(
        <div>
            {theBooks.map((book) => (
                        <SortItems className='sort-items' filter_method={`author=${book.author.name}`}>{book.author.name}</SortItems>
            ))}
        </div>
    );   
}

export default MainFilter