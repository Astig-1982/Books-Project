import React from 'react';
import { Link } from 'react-router-dom';

import './bookdisplay.styles.css';

const BookDisplay = ({ book }) => {
    return(
        <div className='book-div'>
            <Link to={`/all-books/book-detailed/${book.id}`}>
                <img src={book.image} className='book-image' /> 
                <h3>{book.name}</h3>
            </Link>
        </div>
    );   
}

export default BookDisplay