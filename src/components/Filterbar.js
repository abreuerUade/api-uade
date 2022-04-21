import * as React from 'react';
import { Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import FilterListIcon from '@mui/icons-material/FilterList';





const ResponsiveFilterBar = () => {

    const [order, setOrder] = React.useState('');

    const handleChange = (event) => {
      setOrder(event.target.value);
    };
 

  return (
    
    <Box boxShadow={3} sx={{ display:'flex',justifyContent: 'space-around', alignContent:'center', marginBottom:"10px" }}>
        
        <FilterListIcon sx={{marginTop:'10px'}} fontSize='large' color='primary' />
        
        <TextField margin='dense' size='small' id="ingredientes" label="Ingretients" variant="outlined" />
        
        <TextField margin='dense' size='small' id="categoria" label="Category" variant="outlined" />
        
        <FormControl size='small' sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="demo-simple-select-label">Order By</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={order}
                label="Order By"
                autoWidth
                onChange={handleChange}
                >
                <MenuItem value={"Difficulty"}>Difficulty</MenuItem>
                <MenuItem value={"Rating"}>Rating</MenuItem>
                </Select>
        </FormControl>
        
       
    </Box>
  );
};
export default ResponsiveFilterBar;
