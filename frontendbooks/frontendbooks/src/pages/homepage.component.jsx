import React, { useState, useEffect} from 'react';


const HomePage = () => {

    const [books, getBooks] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
        const getAllBooks = async() => {
            try {
                const response = await fetch('http://127.0.0.1:8000/books/')
                const books = await response.json()
                getBooks(books)
                }
            catch(error) {
                setError('There was an error loading.')
                }
        }

        getAllBooks()
    }, [])

    return(
        <div className='home-page'>
            {books.map((book) => (
                    <h2 key={book.id}>{book.name}</h2>
                ))}
        </div>
        
    );
};

export default HomePage;

