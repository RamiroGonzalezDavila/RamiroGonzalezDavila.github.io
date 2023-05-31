import React from 'react'
import NavBar from '../components/NavBar';
import GameCard from './GameCard';
import './GameDev.css'
import Container from 'react-bootstrap/Container';
import PlanetExp from '../assets/PlanetExplorer.png';
import AralsRev from '../assets/AralsRevenge.png';
import AlienInv from '../assets/AlienInvasion.png';
import sumath from '../assets/sumath.jpg';
import Grid from '@mui/material/Grid';
import {TextoPlanetExp, TextoAlienInv, TextoAralsRev, TextoSumath} from '../assets/GameData';

function GameDevelopment(){
return (
    <Container style={{height: '100%', width: '100%'}}>
        <NavBar/>
        <h1 style={{fontSize:"50px", paddingBottom:"40px"}}>Game development work</h1>
        <Grid container spacing={5}>
            <Grid item xs={4}>
                <item><GameCard img={PlanetExp} title={"Planet Explorer: A Journey Through Time"} text={TextoPlanetExp} genre={"Adventure, Puzzle, Education"} plat={"3D Web"}/></item>
            </Grid>
            <Grid item xs={4}>
                <item><GameCard img={AralsRev} title={"Aral's Revenge"} text={TextoAralsRev} genre={"Action, Adventure"} plat={"2D Web"}/></item>
            </Grid>
            <Grid item xs={4}>
                <item><GameCard img={AlienInv} title={"Alien Invasion"} text={TextoAlienInv} genre={"Tower defense, Action"} plat={"3D Widows Desktop"}/></item>
            </Grid>
            <Grid item xs={4}>
                <item><GameCard img={sumath} title={"Sumath"} text={TextoSumath} genre={"Educational"} plat={"2D Android Mobile"}/></item>
            </Grid>
           
        </Grid>
        
    </Container>
)
}



export default GameDevelopment