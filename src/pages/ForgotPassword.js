import * as React from "react";
import { useState, forwardRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Snackbar, Alert } from "@mui/material";
import NavbarWelcome from "../components/NavbarWelcome";
import urlWebServices from "../controllers/webServices";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function ForgotPassword() {
  const [openError, setOpenError] = useState(false);
  const [errors, setErrors] = useState([]);
  const [ email, setEmail ] =  useState("");
  const navigate = useNavigate()

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props}></Alert>;
  });

  const validateFields = () => {
    const atString = ["@"];
    var mensajesError = [];
    var email = document.getElementById("email");

    //Validating that required fields are not null or empty
    if (email.value === null || email.value === "") {
      mensajesError.push("Error. Email address cannot be empty");
    }

    if (!atString.some((x) => email.value.includes(x))) {
      mensajesError.push("Error. Email should has a valid format");
    }

    return mensajesError;
  };

  const sendResetMail = async () => {
    let url = urlWebServices.sendMail

    try {

      await fetch(url,{
        method: 'POST', 
				mode: "cors",
				headers:{
					'Accept':'application/json',
					'Origin':'http://localhost:3000',
					'Content-Type': 'application/json'},
				body: JSON.stringify({email: email}),

      }).then(res => res.json()).then(data => console.log(data))
      
    } catch (error) {
      console.error(error)
    }
  };

  const validateFunction = () => {
    var listOfErrors = validateFields();
    var numberOfErrors = listOfErrors.length === 0;
    
    if (numberOfErrors) {
      //There are no errors
      sendResetMail();
      //Goes to welcome
      navigate('/forgotpasswordsuccess')
    } else {
      setOpenError(true);
      setErrors(listOfErrors);
      //In this case changeDisabled(); is not executed
    }
  };

  const handleErrorClose = (Event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //const data = new FormData(event.currentTarget);
    
    
  };

  return (
    <ThemeProvider theme={theme}>
      <NavbarWelcome />
      <Container style={{ width: "50%" }}>
        <Snackbar
          open={openError}
          autoHideDuration={4000}
          onClose={handleErrorClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Recover your password
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={handleEmail}
                  value={email}
                  autoComplete="email"
                  helperText="An email will be sent with further instructions"
                />
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={validateFunction}
            >
              Send email
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Did you remember your password? Login here
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/logo_large.png"}
          alt=""
          width={"200px"}
        />
      </Box>
    </ThemeProvider>
  );
}
