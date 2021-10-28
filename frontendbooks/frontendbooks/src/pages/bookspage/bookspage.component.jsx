import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; // yarn add reselect

import { hello, books, error } from '../../redux/books/books.selectors';
import { getBooks, getError } from '../../redux/books/books.actions';
import BookDisplay from '../../components/bookdisplay/bookdisplay.component';


const BooksPage = ({ theBooks, getBooks, getError, error, match }) => {

    useEffect(() => {
        // this function calls the API and retrieves the books
        const getAllBooks = async() => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/all_books/${match.params.order_by}`)
                const books = await response.json()
                getBooks(books)
                }
            catch(error) {
                getError('there is an error')
                }
        }

        getAllBooks()
    }, [])
    
    return(
        
        <div className='home-page'>
            <h1>Books</h1>
            {error ? error 
            : theBooks.map((book) => (
                <BookDisplay key={book.id} book={book} />
            ))}
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
