import * as React from 'react';
import {useState, forwardRef, useRef} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Snackbar, Alert} from '@mui/material'
import ReCAPTCHA from "react-google-recaptcha";
import useAuth from '../auth/useAuth';

const theme = createTheme();

export default function LogIn() {
  const [openError, setOpenError] = useState(false);
  const [errors, setErrors] = useState([]);
  const [captchaValid, setCaptchaValid] = useState(false);

  const captcha = useRef(null);

  const { login } = useAuth()
  

  const onChange = () => {
    
    if (captcha.current.props.sitekey){
      console.log("The user has been validated not as a bot");
      setCaptchaValid(true);
    }


  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  const SnackbarAlert = forwardRef(
    function SnackbarAlert(props, ref){
      return <Alert elevation={6} ref={ref} {...props}></Alert>
    }
  )

  const validateFields = () => {
    var mensajesError = [];
    
    var username = document.getElementById('username');
    var password = document.getElementById('password'); 
  
    //Validating that required fields are not null or empty
    if (username.value === null || username.value === ''){
      mensajesError.push("Error. Username cannot be null");
    }
    if (password.value === null || password.value === ''){
      mensajesError.push("Please, enter your password");
    }
    if (!captchaValid) {
      mensajesError.push("Please, validate captcha");
    }

  
    return mensajesError
  };
  
  
  const validateFunction = () => {
    var listOfErrors= validateFields();
    var numberOfErrors = listOfErrors.length === 0
    
    if (numberOfErrors){
      //There are no errors  
      
      const rta = login(document.getElementById('username').value,document.getElementById('password').value);
      //TODO: rta actualmente devuelve una promise. Tengo que buscar la forma de que devuelva el status y obtener el 401
      // const rta2 = 401
      const rta2 = 400
      
      if (rta2 === 401){
        setOpenError(true);
        setErrors(["Please, enter a valid username"])

      }
      //window.location.href="/home";
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
  setOpenError(false);
  }

  return (    
      <ThemeProvider theme={theme}>
      <Container sx={{backgroundColor:'white',
                      borderRadius:'15px'
                      }}  
                      component="main" maxWidth="xs">
        <Container style={{width:'50%'}}>            
          <Snackbar open={openError} autoHideDuration={4000} onClose={handleErrorClose} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
            <SnackbarAlert onClose={handleErrorClose} severity="error">
              {errors[0]}
            </SnackbarAlert>
          </Snackbar>
        </Container>
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
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <div>
              <ReCAPTCHA 
                ref={captcha}
                sitekey="6Lef8-EfAAAAANeSJlmWdzmQ29HC2TeR85FsiN4m" 
                onChange={onChange}/>
            </div>
    
            {captchaValid === false && <div>
              Validate captcha  
            </div>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={validateFunction}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgotpassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <img  src={process.env.PUBLIC_URL + "/images/logo_large.png"} alt="" 
            width={"200px"} />
      </Box>
      </Container>
      
    </ThemeProvider>
    
    
  );
}