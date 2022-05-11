import React from 'react';
import NavbarWelcome from '../components/NavbarWelcome';
import Slider from '../components/Slider/Slider';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import recetas from '../recetas.js';
import RecipeCard from '../components/RecipeCard'
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import HistoryIcon from '@mui/icons-material/History';
import Button from '@mui/material/Button';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import '../cssComponents/buttonComp.css';
import Footer from '../components/Footer';

export default function Welcome(props){
    
    const images = props.images.images

    
    const recetasHistory = recetas.slice(0,3)
    const recetasNew= recetas.slice(3,6)
    const recipeHistoryElements = recetasHistory.map(receta => {
        return (<Grid item xs={3} sm={4} key={receta.id} >
                    <RecipeCard item={receta} height={130} editable={false}  />            
                </Grid>)
            }) 
    const recipeNewElements = recetasNew.map(receta => {
        return (<Grid item xs={3} sm={4} key={receta.id} >
                    <RecipeCard item={receta} height={130} editable={false}   />            
                </Grid>)
            }) 

            

    return (
               
        <>
        <Container maxWidth="lg" sx={{ mt: 6, mb: 8 }}>
            <NavbarWelcome />
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', maxWidth:"800" }}>
                        <Box
                            
                            >
                            <Slider img={images} />
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
                </Grid>
            </Grid>
            <br></br> 
            <br></br> 
            <Box textAlign='center'>
                <Button className='btnCenter' variant="contained" href="/home">
                    See more recipes <ReceiptLongIcon></ReceiptLongIcon>
                </Button>       
            </Box>
            
        </Container>
        <Footer />
        </>
    );
}