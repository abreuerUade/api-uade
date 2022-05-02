import { Container, Grid, Box, List, ListItem } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar'
import Typography from '@mui/material/Typography';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import { lightBlue, grey, cyan } from '@mui/material/colors';
import { Rating } from '@mui/material';

import Slider from '../components/Slider/Slider';

export default function FullRecipie(props){

    const user = props.userName
    const pic = props.pic
    const receta = props.receta.item

    const ingColor = lightBlue[700]
    const nameColor = grey[200]
    const prepColor = cyan[700]

    const ingredientItems = receta.ingredients.map(item => {
        return (<ListItem key={item.id}>
                <DinnerDiningIcon color='white'/>&nbsp;&nbsp;&nbsp;
                <Typography variant='h6'color="common.white">{`${item.type} - ${item.qty} `}</Typography>
            </ListItem>
    )})


    return (
        <>
        <Navbar text="" userName={user} pic={pic}/>

        <Container sx={{marginTop: "50px"}}>
            <Grid container>
                <Grid item xs={12}>
                    <Box boxShadow={3} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',    
                        height: 100,
                        backgroundColor: `${nameColor}`,
                        borderRadius: '16px'
                        }}>
                        <Typography variant='h3'>
                            {receta.name.toUpperCase()}
                        </Typography>
                        
                        <Rating name="size-large" defaultValue={2} size="large" />

                    </Box>
                </Grid>

                <Grid item mt={3} xs={12} sm={6} md={6} xl={6} > 
                    <Slider img={receta.images} />
                </Grid>

                <Grid item mt={3} xs={12} sm={6} md={6} xl={6} > 
                    <Box boxShadow={3} sx={{
                        display: 'flex',
                        justifyItems: 'center',
                        alignItems: 'flex-start',
                        height: 400,
                        backgroundColor: `${ingColor}`,
                        borderRadius: '16px'
                        }}>
                        
                       <List >  
                            <Typography variant='h5' color="common.white">&emsp;Ingredients: </Typography>
                            {ingredientItems}

                       </List>
                    </Box>
                </Grid>

                

                <Grid mt={3} item xs={12}>
                    <Box boxShadow={3} sx={{
                        p: 2,    
                        backgroundColor: `${prepColor}`,
                        borderRadius: '16px'
                        }}>
                        <Typography variant='h5' color="common.white">&emsp;Preparation: </Typography>
                        <Typography mt={2} variant='h6' color="common.white">
                        &emsp; Difficulty: {receta.dificulty}
                        </Typography>
                        <Typography mt={2} variant='h6' color="common.white">
                        &emsp; {receta.preparation}
                        </Typography>
                    </Box>
                </Grid>
       

            </Grid>
        </Container>
        </>
        );
    }