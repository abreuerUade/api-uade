import React from 'react';
import { Grid, Container} from '@mui/material';
import RecipeCard from './RecipeCard'
import recetas from '../recetas.js';
import useAuth from '../auth/useAuth';



export default function Published(){

    const { user } = useAuth()
    

    const recipeElements = recetas.map(receta => {
        return (receta.creator.creatorId === user.id && <Grid item xs={3} sm={4} key={receta.id} >
                    <RecipeCard item={receta} state={'myRecipes'}   />            
                </Grid>)
            }) 

    
    
    return (   
        <Container sx={{ width: '100%', marginTop: "15px" }}>
            
            <Grid container sx={{display: 'flex',justifyContent:"center",alignItems:"center"}} 
                   
                  spacing={{ xs: 2, md: 4}} 
                  columns={{ xs: 5, sm: 8, md: 14, lg: 14, xl:16 }}
                  >
                
                {recipeElements}
                
            </Grid>
        </Container> 
        );
    }