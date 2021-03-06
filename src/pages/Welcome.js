import React from 'react';
import NavbarWelcome from '../components/NavbarWelcome';
import Slider from '../components/Slider/SliderWelcome';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import RecipeCard from '../components/RecipeCard'
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import HistoryIcon from '@mui/icons-material/History';
import Footer from '../components/Footer';
import { Card, Divider } from '@mui/material';
import { Typography } from '@mui/material';
import { CardContent } from '@mui/material';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import { StepLabel, Stepper, Step } from '@mui/material';
import images from '../images'
import { useRef } from 'react';
import { useState } from 'react';
import urlWebServices from '../controllers/webServices'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'




export default function Welcome(){
    
    const effectRan = useRef(false);     
    const [recetas, setRecetas] = useState([]);
    const urlRecetas = urlWebServices.recetasGet;
    let navigate = useNavigate(); 

    useEffect(() => {
        
        if(effectRan.current === false){
            const fetchRecetas = async () => {
                const rta = await fetch(urlRecetas,{
                    method: 'GET', 
                    mode: "cors",
                    headers:{
                        'Accept':'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem("x"),
                        'Origin':'http://localhost:3000',
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                setRecetas(rta)
            }

            fetchRecetas();
        }

        return () => effectRan.current = true;
    }, [urlRecetas])
    
    const allImages = images    
    
    const steps = [
        'Log-in or Create an account!',
        'Search for recipes or create yor own',
        'Customize your feed by rating recipes',
        'Start cooking!',
      ];
    const recetasHistory = recetas.slice(0,3)
    const recetasNew= recetas.slice(3,6)
    const recipeHistoryElements = recetasHistory.map((receta) => {
        return (<Grid item xs={3} sm={4} key={receta.recipes._id} >
                    <RecipeCard item={receta} height={130} state={'online'}  />            
                </Grid>)
            }) 
    const recipeNewElements = recetasNew.map(receta => {
        return (<Grid item xs={3} sm={4} key={receta.recipes._id} >
                    <RecipeCard item={receta} height={130} state={'online'}    />            
                </Grid>)
            }) 

    function changebackground(e){
        e.target.style.changebackground = 'red';
    }
    
    const routeChange = () =>{ 
        let path = `/login`; 
        navigate(path);
      }
   

    return (
               
        <>
        <Container maxWidth="lg" sx={{ mt: 6, mb: 8 }}>
            <NavbarWelcome />
            
            <Grid container spacing={2}>
                
                
                <Grid item xs={12} md={12} lg={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', maxWidth:"800" }}>
                        <Box
                            
                            >
                            <Slider img={allImages} />
                        </Box>
                    </Paper>
                    <br></br>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', maxWidth:"800" }}>
                        <Box
                            sx={{
                                display: 'flex',
                                '& > :not(style)': {
                                m: 1,
                                width: 1200,
                                height: 370,
                                },
                            }}
                            >
                            <h3>Top New</h3> 
                            <div><NewReleasesIcon/></div>
                                
                            <br></br>
                            <br></br>
                            {recipeNewElements}
                        </Box>
                    </Paper>
                    <br></br>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', maxWidth:"800" }}>
                        <Box
                            sx={{
                                display: 'flex',
                                '& > :not(style)': {
                                m: 1,
                                width: 1200,
                                height: 370,
                                },
                            }}
                            >
                            <h3>History</h3>
                            <div><HistoryIcon/></div>
                            {recipeHistoryElements}

                        </Box>
                    </Paper>
                    <br></br>
                    <Card sx={{p:2, display:'flex', flexDirection:'column', maxWidth:"800", boxShadow:5, borderRadius:2}} onMouseUp={changebackground} onClick={routeChange} >
                           <Card sx={{display: 'flex', bgcolor:'#6AB9D9', borderRadius:2, boxShadow:5}}>
                              <CardContent>
                                <Typography gutterBottom variant="h2" component="div" sx={{color:'white', display:'inline', fontWeight:'normal'}}>
                                    Getting <b>started</b>
                                </Typography>
                
                                <MicrowaveIcon sx={{color:'white', ml:78, alignContent:'center', fontSize:50}}/>

                                <Typography gutterBottom variant="body1" color="white" sx={{fontWeight:'normal'}}>
                                    How to use <b>App-Etite!</b> <Typography variant="body1" color="white"></Typography>
                                </Typography>
                                
                                <Stepper sx={{mt:3}} alternativeLabel>
                                        {steps.map((label,index) => (
                                            <Step key={index}>
                                                <StepLabel sx={{boxShadow:1, pt:1, borderRadius:2, bgcolor:'white'}}>{label}</StepLabel>
                                                <Divider sx={{display:'block'}}></Divider>
                                            </Step>
                                        ))}
                                </Stepper>

                              </CardContent>
                           </Card>       
                    </Card>
                </Grid>
            </Grid>
            <br></br> 
            <br></br>           
           
            
        </Container>
        <Footer />
        </>
    );
}