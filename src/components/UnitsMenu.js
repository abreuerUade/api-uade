import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [units, setUnits] = React.useState('');

  const handleChange = (event) => {
    setUnits(event.target.value);
  };

  return (
    
      <FormControl sx={{minWidth: '80px'}} >
        <InputLabel  size='small' id="demo-simple-select-label">Units</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={units}
          label="Units"
          onChange={handleChange}
          size='small'
        >
          <MenuItem value={'u.'}>units</MenuItem>  
          <MenuItem value={'gr.'}>grams</MenuItem>
          <MenuItem value={'ml.'}>ml</MenuItem>
          <MenuItem value={'spoons'}>spoons</MenuItem>
        </Select>
      </FormControl>
   
  );
}
