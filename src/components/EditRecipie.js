import { Container, Grid, Box, List, TextField, Button } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import {  blueGrey } from '@mui/material/colors';
import PhotoUpload from './PhotoUpload'

export default function EditRecipie(){
    
    const colorGrey = blueGrey[50]

    //const newRecipie = {};
    

    return (
        <>
        <Container sx={{marginTop: "50px"}}>
            <Grid container spacing={{ xs: 2, md: 2 }}>
                <Grid item xs={12}>
                    <Box boxShadow={3} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',    
                        height: 70,
                        backgroundColor: `${colorGrey}`,
                        borderRadius: '16px'
                        }}>
                        <TextField
                            sx={{ backgroundColor: 'white' }} 
                            id="outlined-basic" 
                            label="Recipe Name" 
                            variant="outlined" 
                            />
                    </Box>
                </Grid>

                <Grid item mt={3} xs={10} sm={6} md={6} xl={6}  > 
                    <Box boxShadow={3} sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-around',
                        backgroundColor: `${colorGrey}`,
                        borderRadius: '16px',
                        height: 300
                        }}>
                        <Box sx={{py:3}}>
                            <PhotoUpload />
                        </Box>
                        
                    </Box>
                </Grid>

                <Grid item  mt={3} xs={12} sm={6} md={6} xl={6} > 
                    <Box boxShadow={3} sx={{
                        display: 'flex',
                        
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
                            <TextField
                            sx={{ backgroundColor: 'white', maxWidth:'200px', marginLeft:'20px', marginRight:'20px' }} 
                            id="outlined-basic" 
                            label="Add Item" 
                            variant="outlined"
                            size="small" 
                            />
                            <Button variant="contained">ADD</Button>
                        
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
                        <Box display={'flex'} alignItems={'center'}>
                            <Typography fontSize={18} mt={2} variant='h6' >
                            &emsp; Difficulty: 
                            </Typography>
                            <TextField
                                sx={{backgroundColor: 'white',mt:'10px', marginLeft:'10px'}}
                                id="outlined-number"
                                label="Number"
                                type="number"
                                size='small'
                                InputProps={{ inputProps: { min: 0, max: 10 } }}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                />
                        </Box>

                        <TextField
                            sx={{backgroundColor: 'white',mt:'20px'}}
                            id="outlined-textarea"
                            label="Description"
                            placeholder="Description"
                            multiline
                            fullWidth
                            />               
                        
                    </Box>
                </Grid>
       
                <Grid mt={3} item xs={12}>
                    
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        height: 100,
                        backgroundColor: `${colorGrey}`,
                        borderRadius: '16px',
                        padding: 1
                        }}>

                        <Button variant="contained" color="error">
                            Discharge
                        </Button>
                        <Button variant="contained" color="success">
                            Save Changes
                        </Button>
                    </Box>
                
                </Grid>                    
            </Grid>
        </Container>
        </>
        );
    }