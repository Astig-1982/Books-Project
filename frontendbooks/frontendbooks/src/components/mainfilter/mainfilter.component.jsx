import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SortItems from '../filtering/filtering.component';
import { Container, Row, Col } from 'react-bootstrap';

import './mainfilter.styles.css';
import AuthorsFilter from '../authorsfilter/authorsfilter.component';
import BookTypesFilter from '../booktypesfilter/booktypesfilter.component';
import BooksGenresFilter from '../booksgenres/booksgenres.componet';

const MainFilter = () => {
    
    return(
        <div>
            <Container className='main-filter-container'>
                <Row className='main-filter-row'>
                    <Col xs={4}>
                        <div className='filter-divs'>
                            <AuthorsFilter />
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className='filter-divs'>
                            <BookTypesFilter />
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className='filter-divs'>
                            <BooksGenresFilter />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );   
}

export default MainFilter