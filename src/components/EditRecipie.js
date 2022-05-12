import { Container, Grid, Box, List, ListItem, TextField, Button } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import {  blueGrey } from '@mui/material/colors';
import PhotoUpload from './PhotoUpload'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import {  pink } from '@mui/material/colors';
import  DeleteIcon  from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import UnitsMenu from '../components/UnitsMenu'


export default function EditRecipie(){
    
    const colorGrey = blueGrey[50]
    
    var newRecipe = {}
    var newRecipeArray = []

    const [name, setName] = React.useState("")
    const [ingredients, setIngredients] = React.useState("")
    const [qty, setQty] = React.useState("")
    const [ingArray, setIngArray] = React.useState([])
    const [difficulty, setDifficulty] = React.useState(0)
    const [description, setDescription] = React.useState("")

    function handleName (event) {
        setName(event.target.value )
    }

    function handleIngredients (event) {
        setIngredients(event.target.value )
    }

    function handleQty (event) {
        setQty(event.target.value )
    }

    function handleAddIng () {
        setIngArray(prevArray => [...prevArray, ingredients])
        setIngredients("")
    }

    function handleDifficulty (event) {
        setDifficulty(event.target.value)
    }
    function handleDescription (event) {
        setDescription(event.target.value)
    }

    const ingArrayElements = ingArray.map((item) => {
        return (<ListItem key={item.id}>
                <DinnerDiningIcon color='white'/>&nbsp;&nbsp;&nbsp;
                <Typography variant='subtitle1'>{item}</Typography>
                <IconButton aria-label="delete item">
                    <DeleteIcon  sx={{ color: pink[800] } } /> 
                </IconButton>
            </ListItem>
    )})

    function handleSave () {

        newRecipe.name = name
        newRecipe.ingredients = ingArray
        newRecipe.difficulty = difficulty
        newRecipe.description = description
        
        newRecipeArray.push(newRecipe)
        
        setName("")
        setIngArray([])
        setDifficulty(0)
        setDescription("")


    }

    function handleDischarge() {

        setName("")
        setIngArray([])
        setDifficulty(0)
        setDescription("")

    }

    return (
        <>
        
        <Container sx={{marginTop: "50px"}}>
            <Grid container spacing={{ xs: 2, md: 2 }}>
                <Grid item xs={12}>
                    <Box boxShadow={3} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',    
                        height: 70,
                        backgroundColor: `${colorGrey}`,
                        borderRadius: '16px'
                        }}>
                        <TextField
                            sx={{ backgroundColor: 'white' }} 
                            id="outlined-basic" 
                            label="Recipe Name" 
                            variant="outlined"
                            onChange={handleName}
                            value={name} 
                            />
                    </Box>
                </Grid>

                <Grid item mt={3} xs={10} sm={6} md={6} xl={6}  > 
                    <Box boxShadow={3} sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-around',
                        backgroundColor: `${colorGrey}`,
                        borderRadius: '16px',
                        height: 300
                        }}>
                        <Box sx={{py:3}}>
                            <PhotoUpload />
                        </Box>
                        
                    </Box>
                </Grid>

                <Grid item  mt={3} xs={12} sm={6} md={6} xl={6} > 
                    <Box boxShadow={3} sx={{
                        display: 'flex',
                        
                        alignItems: 'flex-start',
                        height: 300,
                        backgroundColor: `${colorGrey}`,
                        borderRadius: '16px',
                        overflow: "hidden",
                        overflowY: "scroll",
                        padding: 1
                        }}>
                        
                        <List > 
                            <Typography mb={1} variant='h6' >&emsp;Ingredients: </Typography>
                            <TextField
                            sx={{ backgroundColor: 'white', maxWidth:'150px', marginLeft:'20px', marginRight:'10px' }} 
                            id="outlined-basic" 
                            label="Add Item" 
                            variant="outlined"
                            size="small"
                            onChange={handleIngredients}
                            value={ingredients} 
                            />
                            <TextField
                            sx={{ backgroundColor: 'white', maxWidth:'80px', marginRight:'10px' }} 
                            id="outlined-basic" 
                            label="Qty"
                            type="number"
                            InputProps={{ inputProps: { min: 0 } }}
                            step={0.5} 
                            variant="outlined"
                            size="small"
                            onChange={handleQty}
                            value={qty} 
                            />
                            <UnitsMenu />
                            <Button sx={{marginLeft:'10px'}} onClick={handleAddIng} variant="contained">ADD</Button>
                        {ingArrayElements}
                       </List>
                    </Box>
                </Grid>

                

                <Grid mt={3} item xs={12}>
                    <Box boxShadow={3} sx={{
                        p: 2,    
                        backgroundColor: `${colorGrey}`,
                        borderRadius: '16px'
                        }}>
                        <Typography variant='h5' >&emsp;Preparation: </Typography>
                        <Box display={'flex'} alignItems={'center'}>
                            <Typography fontSize={18} mt={2} variant='h6' >
                            &emsp; Difficulty: 
                            </Typography>
                            <TextField
                                sx={{backgroundColor: 'white',mt:'10px', marginLeft:'10px'}}
                                id="outlined-number"
                                label="Number"
                                type="number"
                                size='small'
                                InputProps={{ inputProps: { min: 0, max: 10 } }}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                onChange={handleDifficulty}
                                value={difficulty}
                                />
                        </Box>

                        <TextField
                            sx={{backgroundColor: 'white',mt:'20px'}}
                            id="outlined-textarea"
                            label="Description"
                            placeholder="Description"
                            multiline
                            fullWidth
                            onChange={handleDescription}
                            value={description}
                            />               
                        
                    </Box>
                </Grid>
       
                <Grid mt={3} item xs={12}>
                    
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        height: 100,
                        backgroundColor: `${colorGrey}`,
                        borderRadius: '16px',
                        padding: 1
                        }}>

                        <Button onClick={handleDischarge} variant="contained" color="error">
                            Discharge
                        </Button>
                        <Button onClick={handleSave} variant="contained" color="success">
                            Save Changes
                        </Button>
                    </Box>
                
                </Grid>                    
            </Grid>
        </Container>
        </>
        );
    }