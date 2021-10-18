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
                    <Col className='pull-right'>
                        <Link to='/all-books'>
                            <HomeSection logIn sectionLink={'log in'} />
                        </Link>
                    </Col>
                    <Col className=''>
                        <Link to='/all-books'>
                            <HomeSection sectionLink={'books'} />
                        </Link>
                    </Col>
                    <Col className=''>
                        <Link to='/all-books'>
                            <HomeSection authors sectionLink={'authors'} />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    
}

export default HomePage