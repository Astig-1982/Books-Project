import React from 'react';
import { Link } from 'react-router-dom';
import HomeSection from '../../components/homesection.component';
import { Container, Row, Col } from 'react-bootstrap';

import './homepage.styles.css';

const HomePage = () => {

    return(
        <div className='home-container'>
            <Container>
                <Row>
                    <Col className='home-page-col'>
                        <div className='home-page-div books-div'>
                            <HomeSection books booksDiv>
                                Books
                            </HomeSection>
                        </div>
                    </Col>
                    <Col className='home-page-div home-page-col'>
                        <div className='authors-div'>
                            <HomeSection authors authorsDiv>
                                Authors
                            </HomeSection>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    
}

export default HomePage