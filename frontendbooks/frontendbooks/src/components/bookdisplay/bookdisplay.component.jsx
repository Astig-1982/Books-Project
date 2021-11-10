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
                        <Card.Title className='book-title'>{book.name}</Card.Title>
                        <Card.Text className='book-author'>
                            <div> by {book.author}</div>
                        </Card.Text>
                        <Card.Text className='book-details'>
                            <div className='book-genre'>{book.genre1} {book.genre2} {book.genre3}</div>
                            <div className='book-period'>{book.period} {book.type}</div>
                        </Card.Text>
                        <Button variant="primary" className='book-action'>Go somewhere</Button>
                    </Card.Body>
                </Card>  
        </div>
    );   
}

export default BookDisplay



/*
<Link to={`/all-books/book-detailed/${book.id}`}>
                <div className='link-div'>
                    <img src={book.image} className='book-image' />
                    <div className='book-details'>
                        <span>{book.name}</span>
                    </div>
                </div> 
            </Link>
*/