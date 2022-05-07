import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../../cssComponents/buttonComp.css';
import {useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '../../components/Switch'

export default function ProfileInformation(props) {

  const [botonDesactivado, setBotonDesactivado] = useState(true);
  const [campoDesactivado, setCampoDesactivado] = useState(true);

  const changeDisabled = () => {
    setCampoDesactivado(prevState => !prevState);
    setBotonDesactivado(prevState => !prevState);
  }; 

  return (
    // <
    <Container maxWidth="sm">
      <Typography
      sx={{ display: 'inline' }}
      component="span"
      variant="h5"
      color="text.primary"
      >
        Notification
      </Typography>
      <div>
        <br></br>
      </div>
      <Box>
        <FormGroup>
            <FormControlLabel control={<Checkbox disabled={campoDesactivado}/> } label="Newsletter" />
            <FormControlLabel control={<Checkbox disabled={campoDesactivado}/> } label="Receive a notification when my recipe has a reaction
" />
            <FormControlLabel control={<Checkbox disabled={campoDesactivado}/> } label="Receive a notification when a new recipe is uploaded" />
            <Switch text="Receive previous notifications through the app" disabled></Switch>
            <Switch text="Receive previous notifications by email" disabled={campoDesactivado}></Switch>            
        </FormGroup>
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
              onClick={changeDisabled}    
              disabled={botonDesactivado}          
              className="css-sghohy-MuiButtonBase-root-MuiButton-root btnRight"  
              sm={8} md={8}>
                Save
        </Button>
      </Box>  
    </Container>
  );
}