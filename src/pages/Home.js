import React from 'react';
import { Grid, Container } from '@mui/material';
import Navbar from '../components/Navbar'
import RecipeCard from '../components/RecipeCard'
import Filterbar from '../components/Filterbar'
import recetas from '../recetas.js';
import Footer from '../components/Footer'


export default function Home(props){
    const userName = props.userName
    const userPic = props.pic

    const recipeElements = recetas.map(receta => {
        return (<Grid item xs={3} sm={4} key={receta.id} >
                    <RecipeCard item={receta}   />            
                </Grid>)
            }) 
    
    return (   
        <>
        <Navbar text="Home" userName={userName} pic={userPic}  />
        
        <Container sx={{ width: '100%', marginTop: "15px" }}>
            <Filterbar />
            <Grid container sx={{display: 'flex',justifyContent:"center",alignItems:"center"}} 
                   
                  spacing={{ xs: 2, md: 4}} 
                  columns={{ xs: 5, sm: 8, md: 14, lg: 14, xl:14 }}
                  >
                
                {recipeElements}
                
            </Grid>
        </Container>
        <Footer />
        </>
        
        );
    }