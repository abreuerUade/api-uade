import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider/Slider';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function Welcome(props){
    const userName = props.fullUser.firstName + props.fullUser.lastName
    const userPic = props.fullUser.profPic

    return (
               
     
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Navbar text="Welcome" userName={userName} pic={userPic} />
        <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            '& > :not(style)': {
                            m: 1,
                            width: 128,
                            height: 128,
                            },
                        }}
                        >
                        <Slider img={receta.images}/>
                    </Box>
                </Paper>
        </Grid>
    </Grid>
</Container>
        
    );
}