import * as React from 'react';
import {forwardRef} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Snackbar, Alert} from '@mui/material'
import NavbarWelcome from '../components/NavbarWelcome';

const theme = createTheme();

export default function ForgotPasswordSuccess() {

const SnackbarAlert = forwardRef(
  function SnackbarAlert(props, ref){
    return <Alert elevation={6} ref={ref} {...props}></Alert>
  }
)
  return (
    <ThemeProvider theme={theme}>
        <NavbarWelcome />
        <Container style={{width:'50%', mt: '20px'}}>
          
            <Snackbar open="true" autoHideDuration={4000} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
              <SnackbarAlert severity="success">
                Email sent successfully
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
          <Typography align='center' component="h3">
            An email as been sent to your email. 
            <br></br>
            If you didn't receive anything, please check out spam folder or wait some minutes and try again :)
          </Typography>
          <Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              href= "/"
            >
              Return to welcome page
            </Button>
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