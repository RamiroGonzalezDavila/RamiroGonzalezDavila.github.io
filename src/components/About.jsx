import React from 'react'
import NavBar from './NavBar';
import './About.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fotoPer from '../assets/FotoProfesional.jpeg';
import GamePic from '../assets/Gaming.png';
import {TextoAboutMe, TextoProfesionalInterest} from '../assets/GameData';

function About(){
return (
    <Container style={{height: '100%', width: '100%'}}>
        <NavBar/>
        <h1 style={{fontSize:"50px", paddingBottom:"30px"}}>Hi there, welcome to my portfolio</h1>
        <Container>
            <Row className='row align-items-center' style={{marginBottom:"50px"}}>
                <Col className='col-sm-4'>
                <img src={fotoPer} style={{ height: "300px"}} />
                </Col>
                <Col className='col-sm-8' style={{fontSize:"25px"}}>
                {TextoAboutMe}
                </Col>
            </Row>
            <Row className='row align-items-center' style={{marginBottom:"50px"}}>
                <Col className='col-sm-8' style={{fontSize:"25px"}}>
                {TextoProfesionalInterest}
                </Col>
                <Col className='col-sm-4'>
                <img src={GamePic} style={{ height: "300px"}} />
                </Col>
            </Row>
        </Container>
    </Container>
)
}



export default About