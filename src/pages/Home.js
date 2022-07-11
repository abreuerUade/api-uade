import React, { useState, useEffect, useRef } from 'react';
import { Grid, Container} from '@mui/material';
import Navbar from '../components/Navbar'
import RecipeCard from '../components/RecipeCard'
import Filterbar from '../components/Filterbar'
import Footer from '../components/Footer'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import urlWebServices from '../controllers/webServices'

export default function Home(){
    const effectRan = useRef(false);     
    const [recetas, setRecetas] = useState([]);
    const urlRecetas = urlWebServices.recetasGet; 
    
    const style = {
        marginBottom : 15,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    };

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
    console.log(recetas)

    const handleFilterCategory = (category) => {
        const filteredData = recetas.filter((receta) =>{
            const catReceta = '{receta.recipes.category}';
            if(category.toLowerCase() !== '' && catReceta.toLowerCase().includes(category.toLowerCase())){
                return receta;
            }
        });
        setRecetas(filteredData);
    } //TODO: 

    const recipeElements = recetas.map(receta => {
        return (<Grid item xs={3} sm={4} key={receta.recipes._id} >
                    <RecipeCard item={receta} state={'online'}  />            
                </Grid>)
            })
            
    return (   
        <>
        <Navbar />
        
        <Container sx={{ width: '100%', marginTop: "15px" }}>
            <Filterbar onCategoryFilter={handleFilterCategory}/>
            <Grid container sx={{display: 'flex',justifyContent:"center",alignItems:"center"}} 
                   
                  spacing={{ xs: 2, md: 4}} 
                  columns={{ xs: 5, sm: 8, md: 14, lg: 14, xl:16 }}
                  >
                
                {recipeElements}
                
            </Grid>
        </Container>
        <Link to='/recipeManager'>
            <Fab sx={style} color="primary" aria-label="add">
                <AddIcon />
            </Fab> 
        </Link>
        <Footer />
        </>
        
        );
    }