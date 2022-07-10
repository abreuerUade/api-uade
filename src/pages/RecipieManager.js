import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EditRecipie from '../components/EditRecipie'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Container, Grid } from '@mui/material';
import Published from '../components/Published'
import RecipeCard from '../components/RecipeCard'
import useAuth from '../auth/useAuth';


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ReciepieManager(props) {

  const { user } = useAuth();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!localStorage.getItem(user.email)) {
    localStorage.setItem(user.email, JSON.stringify([]))
}

  const tempRecipes = JSON.parse(localStorage.getItem(user.email))
   
  const tempRecipeElements = tempRecipes.map(recipe => 
    {return <Grid item xs={3} sm={4} key={recipe.temp_id} >
        <RecipeCard item={recipe} state={'modify'}   /> </Grid>} )
  
    //console.log(tempRecipeElements);
  return (
    <>
    <Navbar />
    <Container sx={{marginTop: "50px"}} >
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="CREATE" {...a11yProps(0)} />
          <Tab label="MODIFY" {...a11yProps(1)} />
          <Tab label="PUBLISHED" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <EditRecipie edit={JSON.stringify(props) === '{}' ? null : props.receta} />
      </TabPanel>
      <TabPanel value={value} index={1}>
          
            <Grid container sx={{display: 'flex',justifyContent:"center",alignItems:"center"}} 
                  spacing={{ xs: 2, md: 4}} 
                  columns={{ xs: 5, sm: 8, md: 14, lg: 14, xl:16 }}
                  >
                 
              {tempRecipeElements}   
        
             </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Published />
      </TabPanel>
    </Box>
    </Container>
    <Footer />
    </>
  );
}
