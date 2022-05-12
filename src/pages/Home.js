import React from 'react';
import { Grid, Container} from '@mui/material';
import Navbar from '../components/Navbar'
import RecipeCard from '../components/RecipeCard'
import Filterbar from '../components/Filterbar'
import recetas from '../recetas.js';
import Footer from '../components/Footer'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';


export default function Home(props){
    const userName = props.userName
    const userPic = props.pic

    const style = {
        marginBottom : 15,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    };
    

    const recipeElements = recetas.map(receta => {
        return (<Grid item xs={3} sm={4} key={receta.id} >
                    <RecipeCard item={receta} editable={false}  />            
                </Grid>)
            }) 
    
    return (   
        <>
        <Navbar text="Home" userName={userName} pic={userPic}  />
        
        <Container sx={{ width: '100%', marginTop: "15px" }}>
            <Filterbar />
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