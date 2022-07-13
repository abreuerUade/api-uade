import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';




function Copyright() {
  return (
    <Typography variant="body2" color="common.white">
      {'Copyright © '}
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {

  
  
  const redes = {display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'}

  return (
    
      
      <Box
        component="footer"
        sx={{
          color:'common.white',
          justifyContent: 'space-between',
          display:'flex',
          alignItems: 'center',
          py: 3,
          px: 2,
          mt: 10,
          backgroundColor: '#3E4450',

        }}
      >
        <Box maxWidth="sm">
          <Link to={'/'} style={{textDecoration: "none", color:"white" }}>
            <Typography variant="body1">
              App-Etite! all rights reserved
            </Typography>
            <Copyright />
          </Link>
        </Box>
        
          <Typography  variant="body1">  ABOUT US  </Typography>
        
          <Typography  variant="body1">  CONTACT  </Typography>

          <Typography  variant="body1">  LEGALS  </Typography>

        <Box sx={redes}>
            <Box>
              <Typography  variant="body1">
                FOLLOW US!! 
              </Typography>
              <hr></hr>
            </Box>
            <Box>
                <img src={process.env.PUBLIC_URL + "images/facebook.png"} alt="" width='35px' height='35px' />
                <img src={process.env.PUBLIC_URL + "images/instagram.png"} alt="" width='35px' height='35px'/>
                <img src={process.env.PUBLIC_URL + "images/tik-tok.png"} alt="" width='35px' height='35px' />
                <img src={process.env.PUBLIC_URL + "images/twitter.png"} alt="" width='35px' height='35px' />
                <img src={process.env.PUBLIC_URL + "images/whatsapp.png"} alt="" width='35px' height='35px' />
                <img src={process.env.PUBLIC_URL + "images/youtube.png"} alt="" width='35px' height='35px' />
          </Box>
        </Box>
      </Box>
    
  );
}