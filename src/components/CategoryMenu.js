import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {

  const categorySetting = ["Fast Food", "Salads", "Soups", "Bakery", "Italian", "Chinese", "Japanese", 
    "Middle East", "Deserts", "Mexican", "Pizza", "Pasta", "Vegetarian"].sort()

  const [units, setUnits] = React.useState('');

  const handleChange = (event) => {
    setUnits(event.target.value);
  };

  return (
    
      <FormControl sx={{minWidth: '200px'}} >
        <InputLabel  id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={units}
          label="Category"
          onChange={handleChange}
        >
           {categorySetting.map(cat => <MenuItem value={`${cat}`}>cat</MenuItem>  )} 
          
        </Select>
      </FormControl>
   
  );
}
