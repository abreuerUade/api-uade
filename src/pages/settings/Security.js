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

export default function Security(props) {

  const { user } = useAuth()

  const [botonDesactivado, setBotonDesactivado] = useState(true);
  const [campoDesactivado, setCampoDesactivado] = useState(true);
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [errors, setErrors] = useState([]);
  const [pwdForm, setPwdForm] = useState({oldPwd:'', pwd: '', confPwd: '', email:user.email})

  const handleChangePwd = (event) => {
    setPwdForm(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value}
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

  const changePwd = async () => {
        
    let url = urlWebServices.resetPwd;

    await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers:{
            'Accept':'application/json',
            'Origin':'http://localhost:3000',
            'Content-Type': 'application/json'},
        body: JSON.stringify(pwdForm),

    }).then(res => res.text())
    
    
}

  const handleSave = async () => {

    
          
    if (true){
      //There are no errors
      setOpen(true)
      changeDisabled();
      let rta = await changePwd()

      console.log(rta);
      
    



    }
    else {
      setOpenError(true)

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
                                type="password"
                                disabled={campoDesactivado}
                                value={pwdForm.oldPwd}
                                name='oldPwd'
                                onChange={handleChangePwd}
                                required
                                label="Current Password"
                                id="password"
                                fullWidth             
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                                type="password"
                                disabled={campoDesactivado}
                                value={pwdForm.pwd}
                                name='pwd'
                                onChange={handleChangePwd}
                                label="New Password"
                                id="newpsw"
                                fullWidth            
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                                type="password"
                                disabled={campoDesactivado}
                                value={pwdForm.confPwd}
                                name='confPwd'
                                onChange={handleChangePwd}
                                label="Confirm New Password"
                                id="confirmnewpsw"
                                fullWidth            
                            />
                        </Grid>
                     
                        </Grid>
                        <br></br>
                        
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
    </Container>
  );
}