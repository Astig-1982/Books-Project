import React, { useState, useEffect } from 'react';
import './bookdetailed.styles.css';

const BookDetailed = ({match}) => {

    const [detailedBook, setDetailedBook] = useState('book in detailed')
    const [error, setError] = useState('')

    useEffect(() => {
        // this function calls the API and retrieves the book in detailed
        const getAllBooks = async() => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/all_books/book_detailed/${match.params.book_id}`)
                const book = await response.json()
                setDetailedBook(book)
                }
            catch(error) {
                setError('there is an error')
                }
        }

        getAllBooks()
    }, [])

    console.log(detailedBook)
    console.log(error)
    return(
        <div className='book-detailed'>
            <h1>{error}</h1>
            <h1>{detailedBook.name}</h1>
        </div>
    );   
}

export default BookDetailed

// props.match.params.id