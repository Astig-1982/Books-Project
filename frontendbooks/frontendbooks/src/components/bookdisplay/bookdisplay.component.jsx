import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'

import './bookdisplay.styles.css';

const BookDisplay = ({ book }) => {
    return(
        <div >
            <Link to=''>
            <Card.Img src={book.image} className='book-image' /> 
                <h3>{book.name}</h3>
            </Link>
        </div>
    );   
}

export default BookDisplay