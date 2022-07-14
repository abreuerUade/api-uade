import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../../cssComponents/buttonComp.css';
import {useState, forwardRef} from 'react';
import Paper from '@mui/material/Paper';
import {Snackbar, Alert} from '@mui/material'
import useAuth from '../../auth/useAuth';
import urlWebServices from '../../controllers/webServices';

export default function ProfileInformation() {

  const { user } = useAuth()

  const [botonDesactivado, setBotonDesactivado] = useState(true);
  const [campoDesactivado, setCampoDesactivado] = useState(true);
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [errors, setErrors] = useState([]);
  const [userForm, setUserForm] = useState({firstName: user.firstName, lastName: user.lastName, email:user.email})

  const hanldeUserForm = (event) => {
    setUserForm(prevForm => {
			return {
				...prevForm,
				[event.target.name]: event.target.value
			}
		})
  }


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
    const numbersCondition= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const atString = ["@"];
    var mensajesError = [];
    
    

    if (userForm.firstName === null || userForm.firstName === ''){
      mensajesError.push("Error. First name cannot be empty");
    }
    if (numbersCondition.some(x => userForm.firstName.includes(x)) ||
         numbersCondition.some(x => userForm.lastName.includes(x))
                
         ) {
      mensajesError.push("Error. Numbers are not allowed");
    }
    if (!atString.some(x => userForm.email.includes(x))) {
      mensajesError.push("Error. Email should has a valid format");
    }
    
    if (userForm.lastName === null || userForm.lastName === ''){
      mensajesError.push("Error. Last name cannot be empty");
    }
    
    if (userForm.email === null || userForm.email === ''){
      mensajesError.push("Error. Email cannot be empty");
    }

    return mensajesError

  };

  const updateLocal = () => {
    let localUser = JSON.parse(localStorage.getItem("user"))
    localUser.firstName = userForm.firstName 
    localUser.lastName = userForm.lastName
    localStorage.setItem("user", JSON.stringify(localUser))
  }

  const handleSave =async () => {
    var listOfErrors= validateFields();
    var numberOfErrors = listOfErrors.length === 0
    const url = urlWebServices.user

    if (numberOfErrors){
      //There are no errors    
      setOpen(true)
      changeDisabled();
      

      await fetch(url, {
        method: "PUT",
        mode: "cors",
        headers:{
          'Accept':'application/json',
					'Origin':'http://localhost:3000',
          'Authorization': 'Bearer ' + localStorage.getItem("x"),
					'Content-Type': 'application/json'},

				body: JSON.stringify(userForm),
        })
        
        
        updateLocal()

        document.location.reload(true)
      }

      //pop up exitoso   


    
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
                        value={userForm.firstName}
                        onChange={hanldeUserForm}
                        name='firstName'
                        required
                        label="Primary Name"
                        id="firstname"              
                        helperText="Only your first name"
                  />
                </Grid>
                <Grid item xs={8} sm={8} md={8} lg={8}>
                  <TextField
                        disabled={campoDesactivado}
                        value={userForm.lastName}
                        onChange={hanldeUserForm}
                        name='lastName'
                        required
                        label="Last Name"
                        id="lastName" 
                        fullWidth               
                  />
                </Grid>
                
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <TextField
                        disabled
                        value={userForm.email}
                        onChange={hanldeUserForm}
                        name='email'
                        required
                        label="Email"
                        id="email"
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
                    onClick= {handleSave}   
                    disabled={botonDesactivado}          
                    className="css-sghohy-MuiButtonBase-root-MuiButton-root btnRight"  
                    sm={8} md={8}>
                      Save
              </Button>
            </Box>  
          </Paper>
        </Grid>
      </Grid>
      <div id= 'ErrorList'></div>
  </Container>
  );
}