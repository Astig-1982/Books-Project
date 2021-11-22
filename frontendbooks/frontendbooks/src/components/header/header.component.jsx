import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Row } from 'react-bootstrap'

import './header.styles.css';

const Header = () => {
    
    return(
        <div>
            <Navbar className='navbar' expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link className='navbar-brand-link' to=''> 
                            BOOKS CORNER
                        </Link>   
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='books' href="#home">
                            <Link to='/all-books/no_filter' className='links'>
                                BOOKS
                            </Link>
                        </Nav.Link>
                        <Nav.Link className='authors' href="#link">
                            <Link to='/all-books/no_filter' className='links'>
                                AUTHORS
                            </Link>
                        </Nav.Link>
                        <Nav.Link className='filter'>
                            FILTER
                        </Nav.Link>        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );   
}

export default Header
