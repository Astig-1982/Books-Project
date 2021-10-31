import React, { useEffect, useState, useHistory } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; // yarn add reselect

import { hello, books, error } from '../../redux/books/books.selectors';
import { getBooks, getError } from '../../redux/books/books.actions';
import BookDisplay from '../../components/bookdisplay/bookdisplay.component';
import { Link } from 'react-router-dom';
import FilterItems from '../../components/filtering/filtering.component';


const BooksPage = ({ theBooks, getBooks, getError, error, match, history }) => {

    const [books_order, setOrder] = useState('')
    
    useEffect(() => {
        // this function calls the API and retrieves the books
        const getAllBooks = async() => {
            try {
                {const response = await fetch(`http://127.0.0.1:8000/all_books/${match.params.order_by}`)
                const books = await response.json()
                getBooks(books)
                setOrder(`${match.params.order_by}`)}
                }
            catch(error) {
                getError('there is an error')
                }
        }

        getAllBooks()
    }, [history.location.pathname])
    
    return(
        <div className='home-page'>
            <h1>Books</h1>
            <FilterItems filter_method={'a_to_z'}>Order By Name</FilterItems>
            <FilterItems filter_method={'default_order'}>Default Order</FilterItems>
            <div className='books-display'>
                {error ? error 
                : theBooks.map((book) => (
                    <BookDisplay key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    hello: hello,
    theBooks: books,
    error: error
});

const mapDispatchToProps = dispatch => ({
    getBooks: books => dispatch(getBooks(books)),
    getError: error => dispatch(getError(error))
    
});

 export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
