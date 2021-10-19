import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; // yarn add reselect

import { hello } from '../../redux/books/books.selectors';
import { getBooks, getError } from '../../redux/books/books.actions';


const BooksPage = ({ hello,books, getBooks }) => {

    useEffect(() => {
        // this function calls the API and retrieves the books
        const getAllBooks = async() => {
            try {
                const response = await fetch('http://127.0.0.1:8000/all_books/')
                const books = await response.json()
                getBooks(books)
                }
            catch(error) {
                getError('There was an error loading.')
                }
        }

        getAllBooks()
    }, [])

    return(
        <div className='home-page'>
            <h1>Books</h1>
            <h1>{hello}</h1>
            {books.map((book) => (
                    <h2 key={book.id}>{book.name}</h2>
                ))} 
        </div>
        
    );
};

const mapStateToProps = createStructuredSelector({
    hello: hello
});

const mapDispatchToProps = dispatch => ({
    getBooks: books => dispatch(getBooks(books)),
    getBooks: error => dispatch(getError(error))
});

 export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
