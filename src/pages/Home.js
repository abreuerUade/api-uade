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

    const [search, setSearch] = useState({name: '' ,ingredients: '', category: '', user:''});
    
    const urlRecetas = urlWebServices.recetasGet;

    console.log(search);
    
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

    
    const recetasFilter = recetas.filter(item =>
        (item.recipes.name).toLowerCase().includes((search.name).toLowerCase()) && 
        (item.recipes.category).toLowerCase().includes((search.category).toLowerCase()) &&
        ((item.firstName).toLowerCase().includes((search.user).toLowerCase()) || 
        (item.lastName).toLowerCase().includes((search.user).toLowerCase())) &&
        (item.recipes.ingredients).toString().toLowerCase().includes((search.ingredients).toLowerCase())

        
        )
    
    const recipeElements = recetasFilter.map(receta => {
        return (<Grid item xs={3} sm={4} key={receta.recipes._id} >
                    <RecipeCard item={receta} state={'online'}  />            
                </Grid>)
            }) 
    
    return (   
        <>
        <Navbar />
        
        <Container sx={{ width: '100%', marginTop: "30px" }}>
            <Filterbar search={search} setSearch={setSearch} />
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