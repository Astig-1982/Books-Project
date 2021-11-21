import React, { useEffect, useState } from 'react';
import SortItems from '../filtering/filtering.component';

import './booktypesfilter.styles.css';

const BookTypesFilter = ({history}) => {

    const [theTypes, getTypes] = useState('')
    const [theHook, getHooks] = useState('')
    const [error, getError] = useState('')

    useEffect(() => {
        // this function calls the API and retrieves the books
        const getAllBooks = async() => {
            try {
                const response = await fetch('http://127.0.0.1:8000/book_types/')
                const authors = await response.json()
                getTypes(authors)
                }
            catch(error) {
                getError('there is an error')
                }
        }

        getAllBooks()
    }, [theHook])
    
    return(
        <div>
            {theTypes? theTypes.map((type) => (
                        <SortItems className='sort-items' filter_method={`type=${type.name}`}>{type.name}</SortItems>
            )) : 'loading...'}
        </div>
    );   
}

export default BookTypesFilter