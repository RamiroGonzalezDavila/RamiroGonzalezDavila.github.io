import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function GameCard(props){
    return (
        <Card style={{width:'20rem', color:"black"}}>
            <Card.Img style={{height:'15rem'}} variant="top" src={props.img}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Button variant='primary'>See More</Button>
            </Card.Body>
        </Card>
    )
    }
    
    
    
    export default GameCard