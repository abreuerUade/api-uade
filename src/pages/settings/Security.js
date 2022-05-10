import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../../cssComponents/buttonComp.css';
import {useState, forwardRef} from 'react';
import Switch from '../../components/Switch'
import Paper from '@mui/material/Paper';
import {Snackbar, Alert} from '@mui/material'

export default function Security(props) {

  const [botonDesactivado, setBotonDesactivado] = useState(true);
  const [campoDesactivado, setCampoDesactivado] = useState(true);
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [errors, setErrors] = useState([]);


  const SnackbarAlert = forwardRef(
    function SnackbarAlert(props, ref){
      return <Alert elevation={6} ref={ref} {...props}></Alert>
    }
  )
    const changeDisabled = () => {
    setCampoDesactivado(prevState => !prevState);
    setBotonDesactivado(prevState => !prevState);
  }; 

  


  const validateFields = () => {
    const phonenumbersCondition = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+"];
    const atString = ["@"];
    var mensajesError = [];
    var password = document.getElementById('password');
    var alternativeemail = document.getElementById('alternativeemail');
    var phone = document.getElementById('phone');
    const phoneNumberDigits= phone.value.split("")     
    if (!phoneNumberDigits.every( digit=>phonenumbersCondition.includes(digit))) {
        mensajesError.push("Error. Please enter a valid phone number");
    }

    if (password.value === null || password.value === ''){
      mensajesError.push("Error. Current password cannot be empty");
    }
    
    if (!atString.some(x => alternativeemail.value.includes(x))) {
      mensajesError.push("Error. Email should has a valid format");
    }
    return mensajesError

  };

  const newF = () => {
    var listOfErrors= validateFields();
    var numberOfErrors = listOfErrors.length === 0
    debugger      
    if (numberOfErrors){
      //There are no errors    
      setOpen(true)
      changeDisabled();
      //pop up exitoso   


    }
    else {
      setOpenError(true)
      setErrors(listOfErrors)
      //changeDisabled(); is not executed
    }
 
  };

  const handleClose = ( Event, reason) => {
    if (reason === 'clickaway'){
    return
  }
  setOpen(false)
  }
  
  const handleErrorClose = ( Event, reason) => {
    if (reason === 'clickaway'){
    return
  }
  setOpenError(false)
  }


  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Container style={{width:'50%'}}>
              
                        {/* DONT DELETE. TAKED AS REFERENCE. THIS IS STANDAR SNACKBAR
                        <div id="alertsite">
                            <Snackbar message= "The information has been updated successfully!" autoHideDuration={4000} open={open} onClose={handleClose} 
                            anchorOrigin={{vertical: 'top', horizontal: 'center'}}></Snackbar>
                        </div> */}
                        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                            <SnackbarAlert onClose={handleClose} severity="success">
                                The information has been updated successfully!
                            </SnackbarAlert>
                        </Snackbar>
                        <Snackbar open={openError} autoHideDuration={4000} onClose={handleErrorClose} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                            <SnackbarAlert onClose={handleErrorClose} severity="error">
                                {errors[0]}
                            </SnackbarAlert>
                        </Snackbar>
                    </Container>
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
                        <Switch text="Two-Factor Authentication (SFA)" disabled={campoDesactivado}></Switch>
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
    </Container>
  );
}