import React from 'react';
import { Link } from 'react-router-dom';
import HomeSection from '../../components/homesection.component';
import { Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {

    return(
        <div>
            <Container >
                <Row>
                    <Col>
                        <Link to='/all-books'>
                            <HomeSection sectionLink={'log in'} />
                        </Link>
                    </Col>
                    <Col>
                        <Link to='/all-books'>
                            <HomeSection sectionLink={'books'} />
                        </Link>
                    </Col>
                    <Col>
                        <Link to='/all-books'>
                            <HomeSection sectionLink={'authors'} />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    
}

export default HomePage