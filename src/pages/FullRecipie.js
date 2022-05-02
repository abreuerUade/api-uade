import { Container, Grid, Box, List, ListItem } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar'
import Typography from '@mui/material/Typography';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import { lightBlue, grey, cyan } from '@mui/material/colors';

import Slider from '../components/Slider/Slider';

export default function FullRecipie(props){

    const user = props.userName
    const pic = props.pic
    const receta = props.receta.item

    const ingColor = lightBlue[700]
    const nameColor = grey[100]
    const prepColor = cyan[900]

    const ingredientItems = receta.ingredients.map(item => {
        return (<ListItem key={item.id}>
                <DinnerDiningIcon/>&nbsp;&nbsp;&nbsp;
                <Typography variant='h6'color="common.white">{`${item.type} - ${item.qty} `}</Typography>
            </ListItem>
    )})


    return (
        <>
        <Navbar text="" userName={user} pic={pic}/>

        <Container sx={{marginTop: "50px"}}>
            <Grid container>
                <Grid item xs={12}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',    
                        height: 100,
                        backgroundColor: `${nameColor}`,
                        borderRadius: '16px'
                        }}>
                        <Typography variant='h3'>
                            {receta.name}
                        </Typography>
                    </Box>
                </Grid>

                <Grid item mt={3} xs={12} sm={6} xl={6} > 
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 300,
                        backgroundColor: `${ingColor}`,
                        borderRadius: '16px'
                        }}>
                         
                       <List>  
                       <Typography variant='h5' color="common.white">&emsp;Ingredients: </Typography>
                            {ingredientItems}

                       </List>
                    </Box>
                </Grid>

                <Grid item mt={3} xs={12} sm={6} xl={6} > 
                    <Slider img={receta.images} />
                </Grid>

                <Grid mt={3} item xs={12}>
                    <Box sx={{
                        p: 2,    
                        backgroundColor: `${prepColor}`,
                        borderRadius: '16px'
                        }}>
                        <Typography variant='h5' color="common.white">&emsp;Preparation: </Typography>
                        <Typography variant='h6' color="common.white">
                        &emsp; {receta.preparation}
                        </Typography>
                    </Box>
                </Grid>
       

            </Grid>
        </Container>
        </>
        );
    }