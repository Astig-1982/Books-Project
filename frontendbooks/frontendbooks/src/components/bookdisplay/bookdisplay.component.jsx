import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'

import './bookdisplay.styles.css';

const BookDisplay = ({ book }) => {
    
    return(
        
        <div className='book-div'>
                <Card className='book-card' style={{ width: '10rem' }}>
                    <Link to={`/all-books/book-detailed/${book.id}`}>
                        <Card.Img className='book-image' variant="top" src={book.image} />
                    </Link>
                    <Card.Body>
                        <Card.Title>{book.name}</Card.Title>
                        <Card.Text>
                            {book.author}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
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