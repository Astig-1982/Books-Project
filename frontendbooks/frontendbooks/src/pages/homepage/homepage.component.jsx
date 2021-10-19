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
                        <HomeSection logIn sectionLink={'log in'}>
                            Log In
                        </HomeSection>
                        <HomeSection logIn sectionLink={'log in'}>
                            Books
                        </HomeSection>
                        <HomeSection logIn sectionLink={'log in'}>
                            Authors
                        </HomeSection>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    
}

export default HomePage