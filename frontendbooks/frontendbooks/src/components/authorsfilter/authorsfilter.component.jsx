import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SortItems from '../filtering/filtering.component';

import './authorsfilter.styles.css';

const AuthorsFilter = ({history}) => {

    const [theAuthors, getAuthors] = useState('')
    const [theHook, getHooks] = useState('')
    const [error, getError] = useState('')

    useEffect(() => {
        // this function calls the API and retrieves the books
        const getAllBooks = async() => {
            try {
                const response = await fetch('http://127.0.0.1:8000/all_authors/')
                const authors = await response.json()
                getAuthors(authors)
                }
            catch(error) {
                getError('there is an error')
                }
        }

        getAllBooks()
    }, [theHook])
    
    return(
        <div>
            {theAuthors? theAuthors.map((author) => (
                        <SortItems className='sort-items' filter_method={`author=${author.name}`}>{author.name}</SortItems>
            )) : 'loading...'}
        </div>
    );   
}

export default AuthorsFilter