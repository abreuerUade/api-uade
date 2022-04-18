import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardContent, Typography } from '@mui/material';




export default function RecipeReviewCard(prop) {

  const [isFav, setIsFav] = React.useState(false)

  let isHeart = isFav ? "red" : "grey"

  function toggleHeart() {
    setIsFav(prevHeart => !prevHeart)
  }

  return (
    <Card sx={{ maxWidth: 300, minWidth: 270}}>
      <CardHeader
        avatar={
          <Avatar src={process.env.PUBLIC_URL + `/images/${prop.pic}`} />
            
      
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${prop.name}`}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        src={process.env.PUBLIC_URL + `/images/${prop.src}`} 
        alt="Paella dish"
      />
      <CardContent>
          <Typography variant="Subtitle2">Difficulty: {`${prop.dificulty}`}</Typography>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={toggleHeart} sx={{ color: `${isHeart}` } } /> 
        </IconButton>
        
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        
        
      </CardActions>
    </Card>
  );
}
