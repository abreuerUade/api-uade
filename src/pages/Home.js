import React from 'react';
import { Grid, Container } from '@mui/material';
import Navbar from '../components/Navbar.js'
import RecipieCard from '../components/RecipieCard'
import Filterbar from '../components/Filterbar'
import recetas from '../recetas.js';

export default function Home(prop){

    const recipieElements = recetas.map(receta => {
        return (<Grid item xs={3} sm={4} key={receta.id} >
                    <RecipieCard item={receta} />            
                </Grid>)
            }) 
    
    return (   
        <div>
        <Navbar text="HOME" user={prop} />
        
        <Container sx={{ width: '100%', marginTop: "15px" }}>
            <Filterbar />
            <Grid container justifyContent="space-evenly"
                  alignItems="center" 
                  spacing={{ xs: 2, md: 2 }} 
                  columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl:12 }}
                  >
                
                {recipieElements}
                
            </Grid>
        </Container>
        </div>
        
        );
    }