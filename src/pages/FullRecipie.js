import { Container, Grid, Box, List, ListItem } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar'
import Typography from '@mui/material/Typography';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

export default function FullRecipie(props){

    const user = props.userName
    const pic = props.pic
    const receta = props.receta.item

    const ingredientItems = receta.ingredients.map(item => {
        return (<ListItem key={item.id}>
                <DinnerDiningIcon/>&nbsp;&nbsp;&nbsp;
                <Typography variant='h6'>{`${item.type} - ${item.qty} `}</Typography>
            </ListItem>
    )})


    return (
        <>
        <Navbar text="Full Reciepie" userName={user} pic={pic}/>

        <Container sx={{marginTop: "50px"}}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='h3'>
                        {receta.name}
                    </Typography>
                </Grid>

                <Grid item> 
                    <Box sx={{
                        width: 500,
                        height: 300,
                        backgroundColor: 'primary.light',
                        borderRadius: '16px'
                        }}>
                       <List>  
                            {ingredientItems}

                       </List>
                    </Box>

                </Grid>

            </Grid>
        </Container>
        </>
        );
    }