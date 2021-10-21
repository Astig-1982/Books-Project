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
                        <HomeSection>
                            Log In
                        </HomeSection>
                        <HomeSection>
                            Books
                        </HomeSection>
                        <HomeSection>
                            Authors
                        </HomeSection>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    
}

export default HomePage