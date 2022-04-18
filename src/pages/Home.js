import React from 'react';
import { Grid, Container } from '@mui/material';
import Navbar from '../components/Navbar.js'
import RecipieCard from '../components/RecipieCard'
import recetas from '../recetas.js';

export default function Home(){

    const recipieElements = recetas.map(receta => {
        return (<Grid item xs={4}>
                    <RecipieCard name={receta.name}
                                 src={receta.imgSrc}
                                 dificulty={receta.dificulty}
                                 pic={receta.creator.pic}  
                                 />            
                </Grid>)
            }) 

    return (   
        <div
        ><Navbar />
        <Container sx={{ width: '100%', marginTop: "30px" }}>
            <Grid container justifyContent="center"
                  alignItems="center" 
                  spacing={{ xs: 2, md: 3 }} 
                  columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl:16 }}
                  >

                {recipieElements}
                
            </Grid>
        </Container>
        </div>
        
        );
    }