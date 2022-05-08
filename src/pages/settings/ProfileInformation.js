import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../../cssComponents/buttonComp.css';
import {useState} from 'react';
import Paper from '@mui/material/Paper';

export default function ProfileInformation(props) {

  const [botonDesactivado, setBotonDesactivado] = useState(true);
  const [campoDesactivado, setCampoDesactivado] = useState(true);

  const changeDisabled = () => {
    setCampoDesactivado(prevState => !prevState);
    setBotonDesactivado(prevState => !prevState);
  }; 

  const validateFields = () => {
    var mensajesError = [];
    var firstName = document.getElementById('firstname');
    var surname = document.getElementById('surname');
    var username = document.getElementById('username');
    var email = document.getElementById('email');

    var horror = document.getElementById('horror');
    if (firstName.value === null || firstName.value === ''){
      mensajesError.push("Error. First name cannot be empty");
    }
    if (surname.value === null || surname.value === ''){
      mensajesError.push("Error. Last name cannot be empty");
    }
    if (username.value === null || username.value === ''){
      mensajesError.push("Error. Username cannot be empty");
    }
    if (email.value === null || email.value === ''){
      mensajesError.push("Error. Email cannot be empty");
    }

    horror.innerHTML = mensajesError.join (', ')

  };

  const newF= () => {
    validateFields();
    changeDisabled();    
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
              Profile Information 
            </Typography>
            <div>
              <br></br>
            </div>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                  <TextField
                        disabled={campoDesactivado}
                        defaultValue={`${props.user.firstName}`}
                        required
                        label="Primary Name"
                        id="firstname"              
                        helperText="Only your first name"
                  />
                </Grid>
                <Grid item xs={8} sm={8} md={8} lg={8}>
                  <TextField
                        disabled={campoDesactivado}
                        defaultValue={`${props.user.lastName}`}
                        required
                        label="Last Name"
                        id="surname" 
                        fullWidth               
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <TextField
                        disabled={campoDesactivado}
                        defaultValue={`${props.user.userName}`}
                        required
                        label="Username"
                        id="username"
                        fullWidth             
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <TextField
                        disabled={campoDesactivado}
                        defaultValue={`${props.user.mail}`}
                        required
                        label="Email"
                        id="email"
                        fullWidth            
                  />
                </Grid>

              <Grid item xs={4} sm={4} md={4} lg={4}>
                <TextField
                      disabled={campoDesactivado}
                      label="Country"
                      id="country"       
                      size = 'medium'       
                />
              </Grid>
              <Grid item xs={8} sm={8} md={8} lg={8}>
                <TextField
                      disabled={campoDesactivado}
                      label="City"
                      id="city" 
                      fullWidth               
                />
              </Grid>
                
              </Grid>
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
                    onClick= {newF}   
                    disabled={botonDesactivado}          
                    className="css-sghohy-MuiButtonBase-root-MuiButton-root btnRight"  
                    sm={8} md={8}>
                      Save
              </Button>
            </Box>  
          </Paper>
        </Grid>
      </Grid>
      <div id= 'horror'></div>
  </Container>
  );
}