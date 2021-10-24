import React, { useState, useEffect } from 'react';
import './bookdetailed.styles.css';

const BookDetailed = () => {

    const [detailedBook, setDetailedBook] = useState('book in detailed')

    return(
        <div className='book-detailed'>
            hello book detailed
            <h1>{detailedBook}</h1>
        </div>
    );   
}

export default BookDetailed