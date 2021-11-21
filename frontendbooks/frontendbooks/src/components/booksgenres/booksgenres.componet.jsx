import React, { useEffect, useState } from 'react';
import SortItems from '../filtering/filtering.component';

import './booksgenres.styles.css';

const BooksGenresFilter = ({history}) => {

    const [theGenres, getGenres] = useState('')
    const [theHook, getHooks] = useState('')
    const [error, getError] = useState('')

    useEffect(() => {
        // this function calls the API and retrieves the books
        const getAllBooks = async() => {
            try {
                const response = await fetch('http://127.0.0.1:8000/book_types/')
                const authors = await response.json()
                getGenres(authors)
                }
            catch(error) {
                getError('there is an error')
                }
        }

        getAllBooks()
    }, [theHook])
    
    return(
        <div>
            {theGenres? theGenres.map((genre) => (
                        <SortItems className='sort-items' filter_method={`type=${genre.name}`}>{genre.name}</SortItems>
            )) : 'loading...'}
        </div>
    );   
}

export default BooksGenresFilter