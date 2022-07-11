import * as React from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useState } from 'react';


const ResponsiveFilterBar = ({onCategoryFilter}) => {

  const [category, setCategory] = useState("");

  const handleCategoryChange = (event) => {
    const{value} = event.target;
    setCategory(value);
    onCategoryFilter(value);
  }

  return (
    
    <Box boxShadow={3} sx={{ display:'flex',justifyContent: 'space-around', alignContent:'center', marginBottom:"10px" }}>
        
        <FilterListIcon sx={{marginTop:'10px'}} fontSize='large' color='primary' />
        
        <TextField margin='dense' size='small' id="ingredientes" label="Ingredients" variant="outlined" />
        
        <TextField margin='dense' size='small' id="categoria" label="Category" variant="outlined" onChange={handleCategoryChange}/>
        
        <TextField margin='dense' size='small' id="categoria" label="User" variant="outlined" />
       
    </Box>
  );
};
export default ResponsiveFilterBar;
