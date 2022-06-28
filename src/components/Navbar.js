import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import { Button } from '@mui/material';


function HideOnScroll(props) {
  const { children } = props;
  
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


export default function Navbar() {

const { user, isLogged, logout } = useAuth()


const [anchorElUser, setAnchorElUser] = React.useState(null);

const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
};
  
const handleCloseUserMenu = () => {
    setAnchorElUser(null);
};

function handleLogout () {
  handleCloseUserMenu()
  logout()
}

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
      <AppBar position="fixed" >
      <Container maxWidth="xxl">
        <Toolbar disableGutters style={{display:'flex', justifyContent:"space-between", width:'100%'}}>
          
          <Link to='/home'>
            <Box sx={{display: 'inline-flex', alignItems: 'center' }} >
              
                <img  src={process.env.PUBLIC_URL + "images/only_logo_white_large.png"} alt="" 
                      width={"55px"} />
              
                <img  src={process.env.PUBLIC_URL + "images/logo_white_large_name.png"} alt="" 
                      width={"150px"} hspace={"30"}  />
            </Box>         
          </Link>
              

          <Box sx={{display:'flex', alignContent:'center' }}>
            {isLogged() ? <Typography marginTop={2} marginRight={2}>{`${user.firstName} ${user.lastName}`}</Typography>
            : 
            <Link style={{textDecoration: "none", color:"black" }} 
                          to={'/Account'}>
            <Button sx={{color: 'white'}} variant="text">LOGIN</Button></Link> }

           <Tooltip title="Login">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Donato" 
                      src={isLogged() ? `${user.profilePic}` : ""} 
                        sx={{ width: 56, height: 56 }} 
                />
              </IconButton>
            </Tooltip>
            {isLogged() && <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
              <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                
                    <Link style={{textDecoration: "none", color:"black" }} 
                          to={'/Account'}>Account
                    </Link>
                        
                      
                  </Typography>
                </MenuItem>
                <MenuItem  onClick={handleLogout}>
                  <Typography textAlign="center"> Logout </Typography>
                </MenuItem>
            </Menu>}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
