import React from 'react';
import { Link } from 'react-router-dom';

import './bookdisplay.styles.css';

const BookDisplay = ({ book }) => {
    return(
        <div className='book-div'>
            <Link to={`/all-books/book-detailed/${book.id}`}>
                <div className='link-div'>
                    <img src={book.image} className='book-image' />
                    <div className='book-details'>
                        <span>{book.name}</span>
                    </div>
                </div> 
            </Link>
        </div>
    );   
}

export default BookDisplay