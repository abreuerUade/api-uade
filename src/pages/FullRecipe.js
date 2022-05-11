import { Container, Grid, Box, List, ListItem } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar'
import Typography from '@mui/material/Typography';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import {  blueGrey } from '@mui/material/colors';
import { Rating } from '@mui/material';
import Footer from '../components/Footer'
import Slider from '../components/Slider/Slider';

export default function FullRecipe(props){

    const user = props.userName
    const pic = props.pic
    const receta = props.receta.item
    
    
    const colorGrey = blueGrey[50]
    

    const ingredientItems = receta.ingredients.map(item => {
        return (<ListItem key={item.id}>
                <DinnerDiningIcon color='white'/>&nbsp;&nbsp;&nbsp;
                <Typography variant='subtitle1'>{`${item.type} - ${item.qty} `}</Typography>
            </ListItem>
    )})


    return (
        <>
        <Navbar text="Full Recipe" userName={user} pic={pic}/>

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
                            {receta.name.toUpperCase()}
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
                        <Slider img={receta.images} />
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
                        &emsp; Difficulty: {receta.dificulty}
                        </Typography>
                        <Typography mt={2} variant='subtitle1' >
                        &emsp; {receta.preparation}
                        </Typography>
                    </Box>
                </Grid>
       

            </Grid>
        </Container>
        <Footer />
        </>
        );
    }