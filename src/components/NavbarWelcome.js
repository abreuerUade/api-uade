import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import { Typography } from '@mui/material';
import { Modal } from '@mui/material';
import Login from '../pages/Login';


function HideOnScroll(props) {
  const { children } = props;
  
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


export default function NavbarWelcome() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
      <AppBar position="fixed" >
      <Container maxWidth="xxl">
        <Toolbar disableGutters style={{display:'flex', justifyContent:"space-between", width:'100%'}}>
              
                <Box onClick={handleOpen} sx={{display: 'inline-flex', alignItems: 'center' }} >
                
                    <img  src={process.env.PUBLIC_URL + "images/only_logo_white_large.png"} alt="" 
                            width={"55px"} />
                    
                    <img  src={process.env.PUBLIC_URL + "images/logo_white_large_name.png"} alt="" 
                            width={"200px"} hspace={"50"}  />

                    <img  src={process.env.PUBLIC_URL + "images/only_logo_white_large.png"} alt="" 
                                            width={"55px"} />
                </Box>         
                
                <Typography onClick={handleOpen} variant="button"> LOG IN </Typography>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Login />
                </Modal>
        
        </Toolbar>
      </Container>
    </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
