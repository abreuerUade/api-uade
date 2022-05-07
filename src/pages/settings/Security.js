import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../../cssComponents/buttonComp.css';
import {useState} from 'react';
import Switch from '../../components/Switch'
import Paper from '@mui/material/Paper';

export default function Security(props) {

  const [botonDesactivado, setBotonDesactivado] = useState(true);
  const [campoDesactivado, setCampoDesactivado] = useState(true);

  const changeDisabled = () => {
    setCampoDesactivado(prevState => !prevState);
    setBotonDesactivado(prevState => !prevState);
  }; 

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="h5"
                    color="text.primary"
                    >
                        Security 
                    </Typography>
                    <div>
                        <br></br>
                    </div>
                    <Box>
                        <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                                disabled={campoDesactivado}
                                defaultValue={`${props.user.password}`}
                                required
                                label="Current Password"
                                id="password"
                                fullWidth             
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                                disabled={campoDesactivado}
                                label="New Password"
                                id="newpsw"
                                fullWidth            
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                                disabled={campoDesactivado}
                                label="Confirm New Password"
                                id="confirmnewpsw"
                                fullWidth            
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                                disabled={campoDesactivado}
                                defaultValue={`${props.user.alternativeEmail}`}
                                label="Alternative Email"
                                id="alternativeemail"
                                fullWidth            
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                                disabled={campoDesactivado}
                                defaultValue={`${props.user.phone}`}
                                label="Phone Number"
                                id="phone"
                                fullWidth            
                            />
                        </Grid>
                        
                        </Grid>
                        <br></br>
                        <Switch text="Two-Factor Authentication (SFA)"></Switch>
                        <br></br>
                        <br></br>
                        <Button 
                            id='modifybutton'
                            variant="contained" 
                            onClick={changeDisabled}     
                            disabled={!botonDesactivado} 
                            className="css-sghohy-MuiButtonBase-root-MuiButton-root btnLeft" 
                            sm={8} md={8}>
                                Modify
                        </Button>
                        <Button 
                            id='savebutton'
                            variant="contained" 
                            onClick={changeDisabled}    
                            disabled={botonDesactivado}          
                            className="css-sghohy-MuiButtonBase-root-MuiButton-root btnRight"  
                            sm={8} md={8}>
                                Save
                        </Button>
                    </Box>  
                </Paper>
            </Grid>
        </Grid>
    </Container>
  );
}