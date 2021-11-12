import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'

import './bookdisplay.styles.css';

const BookDisplay = ({ book }) => {
    
    return(
        
        <div className='book-div'>
                <Card className='book-card'>
                    <Link to={`/all-books/book-detailed/${book.id}`}>
                        <Card.Img className='book-image' variant="top" src={book.image} />
                    </Link>
                    <Card.Body>
                        <Card.Title className='book-title'><h5>{book.name}</h5></Card.Title>
                        <Card.Text className='book-author'>
                            <div className='book-details-1'>{book.period.name} {book.type.name}</div>
                            <div> By {book.author.name}</div>
                            <div className='book-genre'>{book.genre1.name} {book.genre2 ? book.genre2.name : null} {book.genre3 ? book.genre3.name : null}</div>
                        </Card.Text>
                    </Card.Body>
                </Card>  
        </div>
    );   
}

export default BookDisplay