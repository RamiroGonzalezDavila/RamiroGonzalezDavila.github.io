import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';




function GameCard(props){
    return (
        <Card style={{width:'100%', height:"100%", color:"black"}}>
            <Card.Img style={{height:"15rem"}} variant="top" src={props.img}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>Description: {props.text}</Card.Text>
                <Card.Text>Genre: {props.genre}</Card.Text>
                <Card.Text>Platform: {props.plat}</Card.Text>
                <Link to={`/GamePage/${props.title}`}>See More</Link>
            </Card.Body>
        </Card>
    )
    }
    
    
    
    export default GameCard