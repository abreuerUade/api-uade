import { Container, Grid, Box, List } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import {  blueGrey } from '@mui/material/colors';
import { Rating } from '@mui/material';

export default function EditRecipie(){
    
    const colorGrey = blueGrey[50]

    return (
        <>
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
                            
                        </Typography>
                        
                        <Rating name="size-large" defaultValue={2} size="large" />

                    </Box>
                </Grid>

                <Grid item mt={3} xs={10} sm={6} md={6} xl={6}  > 
                    <Box alignItems="center" boxShadow={3} sx={{
                        backgroundColor: `${colorGrey}`,
                        borderRadius: '16px',
                        height: 300
                        }}>
                       <Box sx={{py:3}}>
                        
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
                        &emsp; Difficulty: 
                        </Typography>
                        
                    </Box>
                </Grid>
       

            </Grid>
        </Container>
        </>
        );
    }