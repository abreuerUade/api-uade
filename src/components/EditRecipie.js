import { Container, Grid, Box, List, ListItem, TextField, Button, MenuItem, Select, InputLabel, FormControl, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import {  blueGrey } from '@mui/material/colors';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import {  pink } from '@mui/material/colors';
import  DeleteIcon  from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import useAuth from '../auth/useAuth';
import { styled } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Slider from '../components/Slider/Slider.js';

export default function EditRecipie(props){

    if (props.edit) {
        console.log(props)
        
    }
    
    const { user } = useAuth()

    const [images, setImages] = useState([]);
    
    const colorGrey = blueGrey[50]

    const Input = styled('input')({
        display: 'none',
      });
    
    const categorySetting = ["Fast Food", "Salads", "Soups", "Bakery", "Italian", "Chinese", "Japanese", 
    "Middle East", "Deserts", "Mexican", "Pizza", "Pasta", "Vegetarian"].sort()

    const [name, setName] = React.useState("")
    const [ingredients, setIngredients] = React.useState("")
    const [category, setCategory] = React.useState("")
    const [qty, setQty] = React.useState("")
    const [qtyUnit, setQtyUnit] = React.useState("")
    const [ingArray, setIngArray] = React.useState([])
    const [difficulty, setDifficulty] = React.useState(0)
    const [description, setDescription] = React.useState("")
    const [newRecipeArray, setnewRecipeArray] = React.useState(JSON.parse(localStorage.getItem(user.email)))
    
    const handleFileInput = (e) => {
        const file = e.target.files[0];
        previewPic(file) 
    }

    useEffect(() => {
        
    },[images])

    const addToImageArray = (img) => {
        if(images.length === 0){
            setImages([img])

        }else{
            setImages(prev => [...prev, img])
        }
    }

    const previewPic = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        
        reader.onloadend = () => {
            addToImageArray(reader.result)
        }
    }
 
    function handleName (event) {
        setName(event.target.value )
    }

    function handleIngredients (event) {
        setIngredients(event.target.value )
    }
    
    function handleCategory (event) {
        setCategory(event.target.value )
    }

    function handleQty (event) {
        setQty(event.target.value )
    }
    
    function handleQtyUnit (event) {
        setQtyUnit(event.target.value )
    }

    function handleAddIng () {
        const newIngredient = {
            id: (ingArray.length +1),
            qty: `${qty} ${qtyUnit}`,
            type: ingredients

        }
        setIngredients(newIngredient)
        setIngArray(prevArray => [...prevArray, newIngredient])
        setIngredients("")
        setQty(0)
        setQtyUnit("")
    }
    
    function handleDifficulty (event) {
        setDifficulty(event.target.value)
    }
    function handleDescription (event) {
        setDescription(event.target.value)
    }
    
    function handleDelete (id){
        setIngArray(prevArray => prevArray.filter(item => item.id !== id))
    }
    
    const ingArrayElements = ingArray.map((item) => {
        return (<ListItem key={item.id}>
                <DinnerDiningIcon color='white'/>&nbsp;&nbsp;&nbsp;
                <Typography variant='subtitle1'>{`${item.type} - ${item.qty}`}</Typography>
                <IconButton onClick={() => handleDelete(item.id)} aria-label="delete item">
                    <DeleteIcon  sx={{ color: pink[800] } } /> 
                </IconButton>
            </ListItem>
    )})
    
    function handleSave () {
        
        const ingStringArray = ingArray.map(item =>`${item.type} - ${item.qty}`)
        
        let newRecipe =  {
            
            firstName: user.firstName,
            lastName: user.lastName,
            profilePic: user.profilePic,  
            recipes: {
                _id: newRecipeArray.length,
                name: name, 
                category: category, 
                ingredients: ingStringArray,
                difficulty: difficulty,
                fechaCreacion: new Date(),
                description: description,
                images: images,
                puntaje:0
            }
        }
        
        setnewRecipeArray(prevArray => [...prevArray, newRecipe])
        setName("")
        setIngArray([])
        setImages([])
        setDifficulty(0)
        setDescription("")
        
               
    }
    useEffect(() => {
        localStorage.setItem(`${user.email}`, JSON.stringify(newRecipeArray))
    },[newRecipeArray, user.email])
    
    function handleDischarge() {

        setName("")
        setIngArray([])
        setDifficulty(0)
        setDescription("")
        setCategory("")

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
                            name="name" 
                            id="outlined-basic" 
                            label="Recipe Name" 
                            variant="outlined"
                            onChange={handleName}
                            value={name} 
                            />
                        <FormControl  sx={{minWidth: '200px'}} >
                            <InputLabel   id="demo-simple-select-label">Category</InputLabel>
                            <Select sx={{ backgroundColor: 'white' }} 
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="category"
                            value={category}
                            label="Category"
                            onChange={handleCategory}
                            >
                            {categorySetting.map((cat, index )=> <MenuItem key={index} value={cat}>{cat}</MenuItem>  )} 
                            
                            </Select>
                        </FormControl>    
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
                        <Stack  sx={{ width: '100%' }}>
                        <Box >
                            <Slider img={images} />
                        </Box>

                        <Box >
                            <label htmlFor="contained-button-file">
                                <Input sx={{display:'none'}} accept="image/*" id="contained-button-file" multiple type="file" onChange={handleFileInput} />
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                        </Box>
                        </Stack>
                        
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
                            <FormControl sx={{minWidth: '80px'}} >
                                <InputLabel  size='small' id="demo-simple-select-label">Units</InputLabel>
                                <Select sx={{ backgroundColor: 'white' }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={qtyUnit}
                                label="Units"
                                onChange={handleQtyUnit}
                                size='small'
                                >
                                <MenuItem value={'u.'}>units</MenuItem>  
                                <MenuItem value={'gr.'}>grams</MenuItem>
                                <MenuItem value={'ml.'}>ml</MenuItem>
                                <MenuItem value={'spoons'}>spoons</MenuItem>
                                </Select>
                            </FormControl>
                            
                            <Button sx={{marginLeft:'10px', marginBottom:'10px'}} onClick={handleAddIng} variant="contained">ADD</Button>
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
                                name="difficulty"
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