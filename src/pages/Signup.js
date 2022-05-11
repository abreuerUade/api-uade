import * as React from 'react';
import {useState, forwardRef} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Snackbar, Alert} from '@mui/material'

const theme = createTheme();

export default function SignUp() {
const [openError, setOpenError] = useState(false);
const [errors, setErrors] = useState([]);


const SnackbarAlert = forwardRef(
  function SnackbarAlert(props, ref){
    return <Alert elevation={6} ref={ref} {...props}></Alert>
  }
)

const validateFields = () => {
  const numbersCondition= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+"];
  const atString = ["@"];
  var mensajesError = [];
  var firstName = document.getElementById('firstName');
  var surname = document.getElementById('lastName');
  var username = document.getElementById('username');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var confirmPassword = document.getElementById('confirmPassword');
  var phone = document.getElementById('phone');
  var country = document.getElementById('country');
  var city = document.getElementById('city');


    //Validating that required fields are not null or empty
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
    mensajesError.push("Error. Email address cannot be empty");
  }

  if (password.value === null || password.value === ''){
    mensajesError.push("Error. Password cannot be empty");
  }

  if (confirmPassword.value === null || confirmPassword.value === ''){
    mensajesError.push("Error. Please confirm password. It cannot be empty");
  }
  if (password.value !== confirmPassword.value){
    mensajesError.push("Error. Passwords are not the same");
  }
  
  if (numbersCondition.some(x => firstName.value.includes(x)) ||
       numbersCondition.some(x => surname.value.includes(x))       
       ) {
    mensajesError.push("Error. Numbers are not allowed as first or last name");
  }

  if (numbersCondition.some(x => country.value.includes(x))||
      numbersCondition.some(x => city.value.includes(x))         
  ) {
    mensajesError.push("Error. Numbers are not allowed as location");
    }

  if (!atString.some(x => email.value.includes(x))) {
    mensajesError.push("Error. Email should has a valid format");
  }

  const phoneNumberDigits= phone.value.split("")     
  if (!phoneNumberDigits.every( digit => numbersCondition.includes(digit))) {
      mensajesError.push("Error. Please enter a valid phone number");
  }

  return mensajesError

};

  const validateFunction = () => {
    var listOfErrors= validateFields();
    var numberOfErrors = listOfErrors.length === 0
    debugger      
    if (numberOfErrors){
      //There are no errors    
      window.location.href="/welcome";
      //Goes to welcome
    }
    else {
      setOpenError(true)
      setErrors(listOfErrors)
      //In this case changeDisabled(); is not executed
    }

    };

  const handleErrorClose = ( Event, reason) => {
    if (reason === 'clickaway'){
    return
  }
  setOpenError(false)
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
        <Container style={{width:'50%'}}>
            <Snackbar open={openError} autoHideDuration={4000} onClose={handleErrorClose} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
              <SnackbarAlert onClose={handleErrorClose} severity="error">
                {errors[0]}
              </SnackbarAlert>
            </Snackbar>
          </Container>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="confirmPassword"
                  label="Confirm password"
                  name="confirmPassword"
                  type="password"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  id="phone"
                  autoComplete="new-phone"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="country"
                  fullWidth
                  id="country"
                  label="Country"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={validateFunction}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Box sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <img  src={process.env.PUBLIC_URL + "/images/logo_large.png"} alt="" 
            width={"200px"} />
      </Box>
    </ThemeProvider>
  );
}