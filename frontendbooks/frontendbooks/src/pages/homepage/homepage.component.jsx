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
                        <HomeSection books booksDiv>
                            Books
                        </HomeSection>
                    </Col>
                    <Col className='home-page-div home-page-col'>
                        <HomeSection authors authorsDiv>
                            Authors
                        </HomeSection>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    
}

export default HomePage