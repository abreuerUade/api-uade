import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import '../../cssComponents/buttonComp.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function About(props) {

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
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
                            <h1>About</h1>
                            <br></br>
                            asdasd
                        </Box>
                    </Paper>
            </Grid>
        </Grid>
    </Container>
      );
    }