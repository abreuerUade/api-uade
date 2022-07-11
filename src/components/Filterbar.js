import * as React from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import FilterListIcon from '@mui/icons-material/FilterList';


const ResponsiveFilterBar = ({search, setSearch}) => {

    

    const handleChange = (event) => {
      setSearch(prev => {
        return {
          ...prev,
          [event.target.name]: event.target.value
        }
      })
    };
 

  return (
    
    <Box boxShadow={3} sx={{ display:'flex',justifyContent: 'space-around', alignContent:'center', marginBottom:"10px" }}>
        
        <FilterListIcon sx={{marginTop:'10px'}} fontSize='large' color='primary' />
        
        <TextField onChange={handleChange} value={search.ingredients} name='ingredients' margin='dense' size='small' id="ingredientes" label="Ingredients" variant="outlined" />
        
        <TextField onChange={handleChange} value={search.category} name='category' margin='dense' size='small' id="categoria" label="Category" variant="outlined" />
        
        <TextField onChange={handleChange} value={search.user} name='user' margin='dense' size='small' id="categoria" label="User" variant="outlined" />
       
    </Box>
  );
};
export default ResponsiveFilterBar;
