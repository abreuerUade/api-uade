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
import { Box, CardContent, Typography } from '@mui/material';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';




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
          <Avatar src={process.env.PUBLIC_URL + `/images/${prop.item.creator.pic}`} />
            
      
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${prop.item.name}`}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        src={process.env.PUBLIC_URL + `/images/${prop.item.imgSrc}`} 
        alt="Paella dish"
      />
      <CardContent sx={{display: 'flex', justifyContent:"space-between"}}>
          <Typography variant="Subtitle2">Difficulty: {`${prop.item.dificulty}`}</Typography>
          <Box>
            <Rater total={5} rating={prop.item.rate} interactive={false} />
            <Typography variant="caption">&nbsp;&nbsp;&nbsp;{`${prop.item.rate}`}</Typography>
          </Box>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={toggleHeart} aria-label="add to favorites">
          <FavoriteIcon  sx={{ color: `${isHeart}` } } /> 
        </IconButton>
        
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        
        
      </CardActions>
    </Card>
  );
}
