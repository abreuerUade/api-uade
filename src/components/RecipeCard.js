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




export default function RecipeReviewCard(prop) {


  const [isFav, setIsFav] = useState(false)

  let isHeart = isFav ? "red" : "grey"
  //const cardHeight= !!prop.height ? prop.height : 200 

  function toggleHeart() {
    setIsFav(prevHeart => !prevHeart)
  }

  function handleDelete(){

  }

  function handleEdit() {

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
      <Link to={`/fullrecipeId=${prop.item._id}`} state={prop}>
      <CardMedia 
        component="img"
        height="194"
        src={prop.item.recipes.images[0]}
        alt="Paella dish"
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

            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Box>}

          {prop.state !== 'online' && <Box>
            {prop.state === 'modify' &&<IconButton onClick={handleEdit} aria-label="add to favorites">
              <EditIcon  color= 'success' /> 
            </IconButton>}
            <IconButton onClick={handleEdit} aria-label="add to favorites">
              <DeleteIcon  sx={{ color: pink[500] } } /> 
            </IconButton>
            {prop.state === 'modify' && <IconButton onClick={handleDelete} aria-label="add to favorites">
              <PublishIcon  sx={{ color: yellow[800] } } /> 
            </IconButton>}

          </Box>}

          </CardActions>
    </Card>
  );
}
