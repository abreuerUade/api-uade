import React, { useState, useEffect, useRef } from 'react';
import { Grid, Container} from '@mui/material';
import RecipeCard from './RecipeCard'
import useAuth from '../auth/useAuth';
import urlWebServices from '../controllers/webServices'


export default function Published(){

    const { user } = useAuth()

    const effectRan = useRef(false);     
    const [recetas, setRecetas] = useState([]);
    const urlRecetas = urlWebServices.recetasGet;

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
                const shuffledArray = rta.sort((a, b) => 0.5 - Math.random());
                setRecetas(shuffledArray)
            }

            fetchRecetas();
        }

        return () => effectRan.current = true;
    }, [urlRecetas])
    

    const recipeElements = recetas.map(receta => {
        return (receta.email === user.email && <Grid item xs={3} sm={4} key={receta.recipes._id} >
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