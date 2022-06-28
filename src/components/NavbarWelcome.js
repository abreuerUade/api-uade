import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
// import { Typography } from '@mui/material';
// import Avatar from '@mui/material/Avatar';
// import { Modal } from '@mui/material';
// import Login from '../pages/Login';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import useAuth from '../auth/useAuth';
import { Grid } from '@mui/material';


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

  // const { login } = useAuth()

    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => {
    //   login()
    //   setOpen(true)}
    // const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
      <AppBar position="fixed">
        <Grid container alignItems={'center'}>
          <Toolbar disableGutters style={{display:'flex',justifyContent:'center', width:'100%'}}> 
                
                {/* <Grid item xs="" sx={{p:2}}><Typography onClick={handleOpen} variant="button"></Typography></Grid> */}
                
                <Grid item><Box sx={{p:1,display: 'inline-flex', alignItems: 'center' }} >
                
                    <img  src={process.env.PUBLIC_URL + "images/only_logo_white_large.png"} alt="" 
                            width={"55px"} />
                    
                    <img  src={process.env.PUBLIC_URL + "images/logo_white_large_name.png"} alt="" 
                            width={"200px"} hspace={"50"}  />

                    <img  src={process.env.PUBLIC_URL + "images/only_logo_white_large.png"} alt="" 
                                            width={"55px"} />
                     </Box>
                </Grid>
                
               {/* <Grid item xs=""sx={{p:2}}>
                <Tooltip title="LOG IN">
                  <IconButton onClick={handleOpen} sx={{ p: 0 }}>
                    <Avatar alt="log in" 
                        sx={{ width: 46, height: 46 }} 
                    />
                  </IconButton>
                </Tooltip>
                </Grid> 
            
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Login />
                </Modal> */}
                
          </Toolbar>
          </Grid>
           
      </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
