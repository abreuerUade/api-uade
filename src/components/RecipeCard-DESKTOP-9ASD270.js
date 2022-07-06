import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import PublishIcon from '@mui/icons-material/Publish';
import ShareIcon from '@mui/icons-material/Share';
import  DeleteIcon  from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, CardContent, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import {  pink, yellow } from '@mui/material/colors';
import { useState } from 'react';
import useAuth from '../auth/useAuth';
import urlWebServices from '../controllers/webServices';
import { useNavigate } from 'react-router-dom';



export default function RecipeReviewCard(prop) {

  const { user } = useAuth()
  let navigate = useNavigate();
  const [isFav, setIsFav] = useState(false)

  let isHeart = isFav ? "red" : "grey"
  //const cardHeight= !!prop.height ? prop.height : 200 

  function toggleHeart() {
    setIsFav(prevHeart => !prevHeart)
  }

  function handleDelete(){
    const recetasBorrador = JSON.parse(localStorage.getItem(user.email))
    const recetasDelete = recetasBorrador.filter(item => item.recipes._id !== prop.item.recipes._id)
    localStorage.removeItem(user.email)
    localStorage.setItem(user.email,recetasDelete)
    console.log(recetasBorrador);
    navigate('/recipeManager');
  }

  // function uploadLocalImages(){
  //   const imagenes = prop.item.recipes.images;
  //   prop.item.recipes.images = []
  //   const url = urlWebServices.uploadFileImg;
  //   console.log(imagenes);
  //   imagenes.forEach(  img =>  {
    
  //       try {
          
  //       const rta = fetch(url,{
  //         method: 'POST', 
  //         mode: "cors",
  //         headers:{
  //           'Accept':'application/json',
  //           'Authorization': 'Bearer ' + localStorage.getItem("x"),
  //           'Origin':'http://localhost:3000',
  //           'Content-Type': 'application/json'},
  //         body: JSON.stringify({data: img}),
				
	// 		  }).then(res => res.json()).then(data =>{
  //         console.log(data.secure_url)
  //         prop.item.recipes.images.push(data.secure_url)
  //       })
        
  //       console.log('rta');    
        
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })
    
  //   //handleDelete()
  // }

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
    // uploadLocalImages()
    let uris = await uploadLocalImages2(prop.item.recipes.images)
    // prop.item.recipes.images = uris
    console.log('length', uris.length)
    for (let x = 0; x < uris.length; x++) {
      console.log('??', uris[x])
    }
    prop.item.recipes.images = uris
    // console.log(JSON.stringify({images: prop.item.recipes.images}))
    try {
      console.log("3d");
      let data = await fetch(url,{
        method: 'POST', 
        mode: "cors",
        headers:{
          'Accept':'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem("x"),
          'Origin':'http://localhost:3000',
          'Content-Type': 'application/json'},
          body: JSON.stringify(prop.item.recipes)
          
        })
        console.log("4"); 
        console.log(data);
      } catch (error) {
        console.error(error);
      }
      navigate('/recipeManager');


  }

  function handleEdit() {

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
      <Link to={`/fullrecipeId=${prop.item._id}`} state={prop.item.recipes}>
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
            <IconButton onClick={toggleHeart} aria-label="add to favorites">
              <FavoriteIcon  sx={{ color: `${isHeart}` } } /> 
            </IconButton>

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
