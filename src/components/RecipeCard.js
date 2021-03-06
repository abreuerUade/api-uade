import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import PublishIcon from '@mui/icons-material/Publish';
import ShareIcon from '@mui/icons-material/Share';
import  DeleteIcon  from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, CardContent, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import {  pink, yellow } from '@mui/material/colors';
import useAuth from '../auth/useAuth';
import urlWebServices from '../controllers/webServices';
import { useNavigate } from 'react-router-dom';



export default function RecipeReviewCard(prop) {

  const { user } = useAuth()
  let navigate = useNavigate();  

  async function handleDelete(){

    if (prop.state === 'myRecipes'){
      const url = urlWebServices.recetas

      try {
        
        await fetch(url, {
          method: 'DELETE',
          mode: "cors",
          headers:{
            'Accept':'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("x"),
            'Origin':'http://localhost:3000',
            'Content-Type': 'application/json'},
          body: JSON.stringify({_id: prop.item.recipes._id}),
        })
        .then(res => console.log(res))
        .then(document.location.reload(true))
        

      } catch (error) {
        console.error(error)
      }

    }else {

      const recetasBorrador = JSON.parse(localStorage.getItem(user.email))
      const recetasDelete = recetasBorrador.filter(item => item.recipes._id !== prop.item.recipes._id)
      localStorage.removeItem(user.email)
      localStorage.setItem(user.email,recetasDelete)
      console.log(recetasBorrador);
      navigate('/recipeManager');
    }
    
  }
  
  async function uploadLocalImages2(imagenes){
    const url = urlWebServices.uploadFileImg;
    let imageUrisPromises = []

    for (let x = 0; x < imagenes.length; x++) {
      try {
        imageUrisPromises.push(fetch(url,{
            method: 'POST', 
            mode: "cors",
            headers:{
              'Accept':'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem("x"),
              'Origin':'http://localhost:3000',
              'Content-Type': 'application/json'},
            body: JSON.stringify({data: imagenes[x]}),
          
        }))
      } catch (error) {
        console.error(error);
      }
    }

    let imageUris = await Promise.all(imageUrisPromises)

    let uris = []
    for (let x = 0; x < imageUris.length; x++) {
      uris.push((await imageUris[x].json()).secure_url)
    }
    handleDelete()
    return uris
  }

  async function handleUpload() {
    
    const url = urlWebServices.recetas
    let uris = await uploadLocalImages2(prop.item.recipes.images)
    for (let x = 0; x < uris.length; x++) {
      console.log('??', uris[x])
    }
    prop.item.recipes.images = uris
    try {
      
      await fetch(url,{
        method: 'POST', 
        mode: "cors",
        headers:{
          'Accept':'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem("x"),
          'Origin':'http://localhost:3000',
          'Content-Type': 'application/json'},
          body: JSON.stringify(prop.item.recipes)
          
        })
 
      } catch (error) {
        console.error(error);
      }
      navigate('/recipeManager');


  }

  function handleEdit() {
    let recetasUsuario = JSON.parse(localStorage.getItem(user.email))
    let receta = recetasUsuario.filter(item => item !== prop.item.recipes._id)
    navigate('/recipeManager', {state: receta})
    
  }

  function handleShare() {
    navigator.clipboard.writeText(`http://localhost:3000/fullrecipeId=${prop.item.recipes._id}`);
  }

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
  const fechaRaw = new Date(prop.item.recipes.fechaCreacion)
  const fecha = `${monthNames[fechaRaw.getMonth()]} ${fechaRaw.getDate()}, ${fechaRaw.getFullYear()}`

  return (
    <Card sx={{ maxWidth: 300, minWidth: 250}}>
      <CardHeader
        avatar={
          <Avatar src= {prop.item.profilePic} />
            
      
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${prop.item.recipes.name}`}
        subheader={fecha}
      />
      <Link to={`/fullrecipeId=${prop.item.recipes._id}`} state={prop.item.recipes}>
      <CardMedia 
        component="img"
        height="194"
        src={prop.item.recipes.images[0]}
        alt="Photo not found"
      />
      </Link>
      <CardContent sx={{display: 'flex', justifyContent:"space-between",alignContent:'center'}}>
          <Typography variant="Subtitle2">Difficulty: {`${prop.item.recipes.difficulty}`}</Typography>
          <Box sx={{display: 'flex', alignContent:'center'}} >
            <Rating size='small' name="half-rating-read" value={prop.item.recipes.puntaje} precision={0.1} readOnly />
            <Typography variant="caption">&nbsp;&nbsp;&nbsp;{`${prop.item.recipes.puntaje}`}</Typography>
          </Box>

        </CardContent>
          <CardActions sx={{display: 'flex', justifyContent:"space-between",alignContent:'center'}} disableSpacing>

          {prop.state !== 'modify' && <Box sx={{padding: '0px'}}>
            <IconButton onClick={handleShare} aria-label="share">
              <ShareIcon />
            </IconButton>
          </Box>}

          {prop.state !== 'online' && <Box>
            {prop.state === 'modify' &&<IconButton onClick={handleEdit} aria-label="add to favorites">
              <EditIcon  color= 'success' /> 
            </IconButton>}
            <IconButton onClick={handleDelete} aria-label="add to favorites">
              <DeleteIcon  sx={{ color: pink[500] } } /> 
            </IconButton>
            {prop.state === 'modify' && <IconButton onClick={handleUpload} aria-label="add to favorites">
              <PublishIcon  sx={{ color: yellow[800] } } /> 
            </IconButton>}

          </Box>}

          </CardActions>
    </Card>
  );
}
