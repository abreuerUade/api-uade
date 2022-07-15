import React, { useState, forwardRef } from 'react'

import { useNavigate } from 'react-router-dom'
import urlWebServices from '../controllers/webServices'
import NavbarWelcome from '../components/NavbarWelcome'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Snackbar, Alert} from '@mui/material'

const theme = createTheme();

export default function NewPassword () {
    
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [openError, setOpenError] = useState(false);
    const [userForm, setUserForm] = useState({
		"email": "",
		"pwd": "",
	})

    const resetPwd = async (userForm) => {
        
        let url = urlWebServices.resetPwd;
        await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/json'},
            body: JSON.stringify(userForm),

        }).then(res => res.json()).then(data => console.log(data))
        
        navigate('/login')
    }
    
    const validateFields = () => {
        const atString = ["@"];
        var mensajesError = [];
        
        var email = document.getElementById('email');
        var password = document.getElementById('password');
        var confirmPassword = document.getElementById('confirmPassword');

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
    
        if (!atString.some(x => email.value.includes(x))) {
            mensajesError.push("Error. Email should has a valid format");
        }   
    
        return mensajesError
    
    };

    const validateFunction = async () => {
		var listOfErrors= validateFields();
		var numberOfErrors = listOfErrors.length === 0
		     
		if (numberOfErrors){
		//There are no errors
		
		await resetPwd(userForm);
		navigate('/login');
		//Goes to welcome
		}
		else {
		setOpenError(true)
		setErrors(listOfErrors)
		//In this case changeDisabled(); is not executed
		}

    };

    function handleForm(event) {
		setUserForm(prevForm => {
			return {
				...prevForm,
				[event.target.name]: event.target.value
			}
		})
	}
    const handleErrorClose = ( Event, reason) => {
		if (reason === 'clickaway'){
		return
	}
	setOpenError(false)
	}

    
	const SnackbarAlert = forwardRef(
        function SnackbarAlert(props, ref){
            return <Alert elevation={6} ref={ref} {...props}></Alert>
        }
        )

    return (
        <ThemeProvider theme={theme}>
            <NavbarWelcome />
            <Container style={{width:'50%', marginTop:'30px'}}>

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
                    <br></br>
                <Typography component="h1" variant="h5">
                    Reset your password
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2} >
                        <Grid item xs={12} sm={6} sx={{
                        marginTop: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        }}>
                  
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={handleForm}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            name="pwd"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            onChange={handleForm}
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
                    </Grid>  
                </Box>
            </Box>
            <Button
                  //type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={validateFunction}
                >
                  Reset Password
            </Button>                        
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
