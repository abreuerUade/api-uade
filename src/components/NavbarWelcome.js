import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
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

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
      <AppBar position="fixed">
        <Grid container alignItems={'center'}>
          <Toolbar disableGutters style={{display:'flex',justifyContent:'center', width:'100%'}}> 
                
                {}
                
                <Grid item><Box sx={{p:1,display: 'inline-flex', alignItems: 'center' }} >
                
                    <img  src={process.env.PUBLIC_URL + "images/only_logo_white_large.png"} alt="" 
                            width={"55px"} />
                    
                    <img  src={process.env.PUBLIC_URL + "images/logo_white_large_name.png"} alt="" 
                            width={"200px"} hspace={"50"}  />

                    <img  src={process.env.PUBLIC_URL + "images/only_logo_white_large.png"} alt="" 
                                            width={"55px"} />
                     </Box>
                </Grid>
                
          </Toolbar>
          </Grid>
           
      </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
