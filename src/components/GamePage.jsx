import React from 'react'
import Container from 'react-bootstrap/Container';
import NavBar from '../components/NavBar';



function GamePage(props){
    return (
        <Container style={{height: '100vh', width: '100%'}}>
        <NavBar/>
        <h1 style={{fontSize:"50px", paddingBottom:"40px"}}>{this.props.match.params.test}</h1>
        
        </Container>
    )
    }
    
    
    
    export default GamePage