import React from 'react';
import { Grid, Container } from '@mui/material';
import Navbar from '../components/Navbar.js'
import RecipieCard from '../components/RecipieCard'

export default function Home(){


    return (   
        <div
        ><Navbar />
        <Container sx={{ width: '100%', marginTop: "30px" }}>
            <Grid container justifyContent="center"
                  alignItems="center" 
                  spacing={{ xs: 2, md: 3 }} 
                  columns={{ xs: 4, sm: 8, md: 10, lg: 12, xl: 12}}
                  >
                <Grid item xs={4}>
                    <RecipieCard />
                </Grid>
                <Grid item xs={4}>
                    <RecipieCard />
                </Grid>
                <Grid item xs={4}>
                    <RecipieCard />
                </Grid>
                <Grid item xs={4}>
                    <RecipieCard />
                </Grid>
                <Grid item xs={4}>
                    <RecipieCard />
                </Grid>
                <Grid item xs={4}>
                    <RecipieCard />
                </Grid>
                <Grid item xs={4}>
                    <RecipieCard />
                </Grid>
                <Grid item xs={4}>
                    <RecipieCard />
                </Grid>
                <Grid item xs={4}>
                    <RecipieCard />
                </Grid>
                <Grid item xs={4}>
                    <RecipieCard />
                </Grid>
                <Grid item xs={4}>
                    <RecipieCard />
                </Grid>
                <Grid item xs={4}>
                    <RecipieCard />
                </Grid>
                <Grid item xs={4}>
                    <RecipieCard />
                </Grid>

            </Grid>
        </Container>
        </div>
        
        );
    }