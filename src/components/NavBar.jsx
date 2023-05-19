import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {BrowserRouter, Link} from "react-router-dom";


function NavBar(){
return (
    <Container style={{marginBottom:"50px"}}>
    <Navbar bg="dark" variant="dark" fixed="top"  expand="sm">
        <Container style={{margin:"0"}}>
            <Navbar.Brand >Portfolio</Navbar.Brand>
            <Nav className='me-auto'>
                <Nav.Link><Link to="/">About</Link></Nav.Link>
                <Nav.Link><Link to="/GameDevP">GameDevP</Link></Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    </Container>
)
}



export default NavBar