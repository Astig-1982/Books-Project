import React, { useState, useEffect} from 'react';

const HomePage = () => {

    const [books, getBooks] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        const getAllBooks = async() => {
            try {
                const response = await fetch('http://127.0.0.1:8000/books/');
                const books = await response.json()
                getBooks(books)
                }
            catch(error) {
                setError(error)
                }
        }

        getAllBooks()
    }, [])

    console.log({error})
    console.log({books})
    return(
        <div className='home-page'>
            <h1>The Books Universe</h1>
        </div>
        
    );
};

export default HomePage;

