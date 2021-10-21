import React from 'react';
import { Link } from 'react-router-dom';
import HomeSection from '../../components/homesection.component';
import { Container, Row, Col } from 'react-bootstrap';

import './homepage.styles.css';

const HomePage = () => {

    return(
        <div>
            <Container >
                <Row className='home-page-row'>
                    <Col>
                        <div className='home-page-div'>
                            <HomeSection login>
                                Log In
                            </HomeSection>
                            <HomeSection books>
                                Books
                            </HomeSection>
                            <HomeSection authors>
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