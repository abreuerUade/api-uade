import { Container, Grid, Box, List, ListItem } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar'
import Typography from '@mui/material/Typography';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import {  blueGrey } from '@mui/material/colors';
import { Rating } from '@mui/material';
import Footer from '../components/Footer'
import Slider from '../components/Slider/Slider';
import urlWebServices from '../controllers/webServices';
import { useState, useEffect } from 'react';

export default function FullRecipe(){

    const [props, setProps] = useState(
        {
            profilePic: "",  
            recipes: {
                name: "", 
                category: "", 
                ingredients: [],
                difficulty: "",
                description: "",
                images: [],
            }
        }
    )

useEffect(() => {
        console.log("first")
        
        const fetchReceta = async () => {
            try {
                
                    const param = window.location.href.split('=')[1]
                    const url = urlWebServices.recetasGet + '/' + param
                    console.log(url)
                    const rta = await fetch(url)
                    const data = await rta.json()
                    console.log(data)
                    setProps(data[0])
            }

            catch (error) {
                console.log(error)
            }
        }

        fetchReceta()
        return () => {
          }
    },[])

                
    const colorGrey = blueGrey[50]

        const ingredientItems = props.recipes.ingredients.map((item, index) => {
            return (<ListItem key={index}>
                    <DinnerDiningIcon color='white'/>&nbsp;&nbsp;&nbsp;
                    <Typography variant='subtitle1'>{item}</Typography>
                </ListItem>
        )})


    return (
        <>
        <Navbar />

        <Container sx={{marginTop: "50px"}}>
            <Grid container spacing={{ xs: 2, md: 2 }}>
                <Grid item xs={12}>
                    <Box boxShadow={3} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',    
                        height: 50,
                        backgroundColor: `${colorGrey}`,
                        borderRadius: '16px'
                        }}>
                        <Typography variant='h4'>
                            {props.recipes.name.toUpperCase()}
                        </Typography>
                        
                        <Rating name="size-large" defaultValue={2} size="large" />

                    </Box>
                </Grid>

                <Grid item mt={3} xs={10} sm={6} md={6} xl={6}  > 
                    <Box alignItems="center" boxShadow={3} sx={{
                        backgroundColor: `${colorGrey}`,
                        borderRadius: '16px'
                        }}>
                       <Box sx={{py:3}}> 
                        <Slider img={props.recipes.images} />
                        </Box>
                        
                    </Box>
                </Grid>

                <Grid item  mt={3} xs={12} sm={6} md={6} xl={6} > 
                    <Box boxShadow={3} sx={{
                        display: 'flex',
                        justifyItems: 'center',
                        alignItems: 'flex-start',
                        height: 300,
                        backgroundColor: `${colorGrey}`,
                        borderRadius: '16px',
                        overflow: "hidden",
                        overflowY: "scroll",
                        padding: 1
                        }}>
                        
                       <List >  
                            <Typography mb={1} variant='h6' >&emsp;Ingredients: </Typography>
                            {ingredientItems}

                       </List>
                    </Box>
                </Grid>

                

                <Grid mt={3} item xs={12}>
                    <Box boxShadow={3} sx={{
                        p: 2,    
                        backgroundColor: `${colorGrey}`,
                        borderRadius: '16px'
                        }}>
                        <Typography variant='h5' >&emsp;Preparation: </Typography>
                        <Typography fontSize={18} mt={2} variant='h6' >
                        &emsp; Difficulty: {props.recipes.difficulty}
                        </Typography>
                        <Typography mt={2} variant='subtitle1' >
                        &emsp; {props.recipes.description}
                        </Typography>
                    </Box>
                </Grid>
       

            </Grid>
        </Container>
        <Footer />
        </>
        );
    }