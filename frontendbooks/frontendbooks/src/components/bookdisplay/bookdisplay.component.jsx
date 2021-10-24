import React from 'react';
import { Link } from 'react-router-dom';
import bookspageComponent from '../../pages/bookspage/bookspage.component';

import './bookdisplay.styles.css';

const BookDisplay = ({ book }) => {
    return(
        <div >
            <Link to=''>
                <div className='book-image'></div>
            </Link>
        </div>
    );   
}

export default BookDisplay