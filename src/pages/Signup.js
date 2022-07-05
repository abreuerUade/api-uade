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
import {Snackbar, Alert, Input} from '@mui/material'
import NavbarWelcome from '../components/NavbarWelcome';
import urlWebServices from '../controllers/webServices'

import { useNavigate } from 'react-router-dom';

const theme = createTheme();



export default function SignUp() {

  const [previewSource, setPreviewSource] = useState('')

	const [openError, setOpenError] = useState(false);
	const [errors, setErrors] = useState([]);
	let navigate = useNavigate();
	const [userForm, setUserForm] = useState({
		"firstName": "",
		"lastName": "",
		"phone": "",
		"email": "",
		"pwd": "",
		"recipes": []
	})

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        previewPic(file) 
    }

    const previewPic = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        }
    }

	function handleForm(event) {
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

	const validateFields = () => {
	const numbersCondition= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+"];
	const atString = ["@"];
	var mensajesError = [];
	var firstName = document.getElementById('firstName');
	var surname = document.getElementById('lastName');
	
	var email = document.getElementById('email');
	var password = document.getElementById('password');
	var confirmPassword = document.getElementById('confirmPassword');
	var phone = document.getElementById('phone');



		//Validating that required fields are not null or empty
	if (firstName.value === null || firstName.value === ''){
		mensajesError.push("Error. First name cannot be empty");
	}
	if (surname.value === null || surname.value === ''){
		mensajesError.push("Error. Last name cannot be empty");
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

	if (!atString.some(x => email.value.includes(x))) {
		mensajesError.push("Error. Email should has a valid format");
	}

	const phoneNumberDigits= phone.value.split("")     
	if (!phoneNumberDigits.every( digit => numbersCondition.includes(digit))) {
		mensajesError.push("Error. Please enter a valid phone number");
	}

	return mensajesError

	};

	const createUser = async (userForm) => {
		const urlReg = urlWebServices.register;

		const formData = new URLSearchParams();
		formData.append('firstName', userForm.firstName);
		formData.append('lastName', userForm.lastName);
		formData.append('email', userForm.email);
		formData.append('phone', userForm.phone);
		formData.append('pwd', userForm.pwd);
		formData.append('recipes', userForm.recipes);

    let rtaUpload = await uploadImage(previewSource);     
    formData.append('profilePic', rtaUpload.secure_url) 

		try {
			
			let rta = await fetch(urlReg,{
				method: 'POST', 
				mode: "cors",
				headers:{
					'Accept':'application/x-www-form-urlencoded',
				   // 'x-access-token': WebToken.webToken,
					'Origin':'http://localhost:3000',
					'Content-Type': 'application/x-www-form-urlencoded'},
				body: formData,
				
			});
			
			return rta;
		} catch (error) {
			console.log("error",error);
		}
		
	}

    const uploadImage = async (img) => {
        if (!img) return;
        
        const url = urlWebServices.uploadUserImg;

        try {
            let data = await fetch(url,{
				method: 'POST', 
				mode: "cors",
				headers:{
					'Accept':'application/x-www-form-urlencoded',
				   // 'x-access-token': WebToken.webToken,
					'Origin':'http://localhost:3000',
					'Content-Type': 'application/json'},
				body: JSON.stringify({data: img}),
				
			}).then(res => res.json())
            
			console.log(data);
			return data;
        } catch (error) {
            console.error(error);
        }
    }


	const validateFunction = async () => {
		var listOfErrors= validateFields();
		var numberOfErrors = listOfErrors.length === 0
		     
		if (numberOfErrors){
		//There are no errors
		
		await createUser(userForm);
		navigate('/login');
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2} >
            <Grid item xs={12} sm={6} sx={{
            marginTop: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
                
                <label htmlFor="contained-button-file">
                    <Input sx={{display:'none'}} accept="image/*" id="contained-button-file" multiple type="file" onChange={handleFileInput} />
                    <Button  variant="contained" component="span">
                    Profile Pic
                    </Button>
                </label>
                
                
              </Grid>
              <Grid item xs={12} sm={6} sx={{
                    marginTop: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Avatar alt="Profile Picture" 
                       src={previewSource} 
                        sx={{ width: 80, height: 80 }} 
                />
                </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
					          onChange={handleForm}
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
				  onChange={handleForm}
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
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  id="phone"
                  autoComplete="new-phone"
				  onChange={handleForm}
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  name="country"
                  fullWidth
                  id="country"
                  label="Country"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                />
              </Grid> */}
              
            </Grid>
            <Button
              //type="submit"
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