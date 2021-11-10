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
                            <div> by {book.author.name}</div>
                            <div> by {book.author.nationality.name} </div>
                            <div>{book.genre1.name} {book.genre2 ? book.genre2.name : null} {book.genre3 ? book.genre3.name : null}</div>
                            <div> by {book.period.name}</div>
                            <div> by {book.period.time_frames}</div>    
                        </Card.Text>
                        <Card.Text className='book-details'>   
                        </Card.Text>
                    </Card.Body>
                </Card>  
        </div>
    );   
}

export default BookDisplay

/* <div className='book-genre'>{book.genre1.name} {book.genre2} {book.genre3}</div>
                            <div className='book-period'>{book.period.name} {book.type}</div>
                            <Button variant="primary" className='book-action'>Go somewhere</Button> */



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