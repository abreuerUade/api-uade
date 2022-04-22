import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const settings = ['MyAccount', 'My Recipies', 'Logout'];

const Navbar = (props) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
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
              
        <Typography variant="h4">
            {`${props.text}`}
        </Typography>

          <Box sx={{display:'flex', alignContent:'center', flexGrow: 0 }}>

           <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Donato" 
                      src={process.env.PUBLIC_URL + "images/donato.jpg"} 
                        sx={{ width: 56, height: 56 }} 
                />
              </IconButton>
            </Tooltip>
            <Menu
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">

                    <Link style={{textDecoration: "none", color:"black" }} 
                          to={setting === "Logout" ? `/login` : `/${setting}`}>
                          {setting}
                    </Link>
                        
                      
                  </Typography>
                </MenuItem>
                 ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
