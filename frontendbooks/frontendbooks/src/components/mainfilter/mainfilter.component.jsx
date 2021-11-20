import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SortItems from '../filtering/filtering.component';

import './mainfilter.styles.css';

const MainFilter = () => {

    const [theBooks, getBooks] = useState('')
    const [error, getError] = useState('')

    useEffect(() => {
        // this function calls the API and retrieves the books
        const getAllBooks = async() => {
            try {
                const response = await fetch('http://127.0.0.1:8000/all_books/')
                const books = await response.json()
                getBooks(books)
                }
            catch(error) {
                getError('there is an error')
                }
        }

        getAllBooks()
    }, [])
    console.log(theBooks)
    return(
        <div>
            {theBooks.map((book) => (
                        <SortItems className='sort-items' filter_method={`author=${book.author.name}`}>{book.author.name}</SortItems>
            ))}
        </div>
    );   
}

export default MainFilter

/* {theBooks.map((book) => (
                        <SortItems className='sort-items' filter_method={`author=${book.author.name}`}>{book.author.name}</SortItems>
            ))}
*/