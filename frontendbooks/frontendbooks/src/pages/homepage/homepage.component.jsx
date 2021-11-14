import React from 'react';
import { Link } from 'react-router-dom';
import HomeSection from '../../components/homesection/homesection.component';
import { Container, Row, Col } from 'react-bootstrap';

import './homepage.styles.css';
import FilterItems from '../../components/filtering/filtering.component';

const HomePage = () => {

    return(
        <div className='home-container'>
            <Container fluid>
                <Row>
                    <Col className='home-page-col'>
                        <div className='links-div'>
                            <Link to='/all-books/no_filter' className='links'>
                                Books
                            </Link>
                            <Link to='/all-books/no_filter' className='links'>
                                Authors
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    
}

export default HomePage