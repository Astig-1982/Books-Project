import React, { useEffect, useState, useHistory } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; // yarn add reselect
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { hello, books, error } from '../../redux/books/books.selectors';
import { hidden, toggledFilter } from '../../redux/mainfilter/mainfilter.selectors';
import { getBooks, getError } from '../../redux/books/books.actions';
import BookDisplay from '../../components/bookdisplay/bookdisplay.component';
import SortItems from '../../components/filtering/filtering.component';

import './bookspage.styles.css';
import MainFilter from '../../components/mainfilter/mainfilter.component';


const BooksPage = ({ theBooks, getBooks, getError, error, match, history, hidden }) => {

    const [books_order, setOrder] = useState('')
    

    
    useEffect(() => {
        // this function calls the API and retrieves the books
        const getAllBooks = async() => {
            try {
                {const response = await fetch(`http://127.0.0.1:8000/all_books/?${match.params.filter_method}`)
                /*
                    This url will be sent to base.urls path('all_books/', views.all_books, name='all_books')
                    ${match.params.filter_method} is being sent from App.js, which gets it from SortItems component
                    Depending what the this param is, the view will sort the books
                    This is achieved in the view by the following conditional: if '{match.params.filter_method}' in request.GET -- check 'Solid Properties'
                */
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
    console.log(hidden)
    return(
        <div className='home-page'>
            <Container>
                <div className='title'>
                    <h1>Books</h1>
                </div>
                {hidden
                ? <MainFilter />
                : null}
                <div className='order-by-div'>
                    <SortItems className='sort-items' filter_method={'sort=default_order'}>Default Order</SortItems>
                    <SortItems className='sort-items' filter_method={'sort=name'}>Order By Name</SortItems>
                </div>
                <Row className='books-row'>
                    {error ? error 
                    : theBooks.map((book) => (
                        <Col xs={3} className='books-display'><div><BookDisplay key={book.id} book={book} /></div></Col>
                    ))}     
                </Row>
            </Container>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    hello: hello,
    theBooks: books,
    error: error,
    hidden: toggledFilter
});

const mapDispatchToProps = dispatch => ({
    getBooks: books => dispatch(getBooks(books)),
    getError: error => dispatch(getError(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
