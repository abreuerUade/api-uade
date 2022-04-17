import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Typography } from '@mui/material';



export default function RecipeReviewCard() {

  const [isFav, setIsFav] = React.useState(false)

  let isHeart = isFav ? "red" : "grey"

  function toggleHeart() {
    setIsFav(prevHeart => !prevHeart)
  }

  return (
    <Card sx={{ maxWidth: 300, minWidth: 270}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        src={require('../images/paella.jpg')} 
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={toggleHeart} sx={{ color: `${isHeart}` } } /> 
        </IconButton>
        <Typography variant="caption">34</Typography>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
    </Card>
  );
}
