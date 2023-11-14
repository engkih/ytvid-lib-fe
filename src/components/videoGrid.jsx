import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function VideoGrid () {
    return (
        <Box sx={{p: 2}} >
            <Grid container spacing={2} sx={{direction: {sm: 'column', md: 'row'}, justifyContent: {xs: 'center', sm: 'normal'}}}>
                <Grid item>
                <Card sx={{ maxWidth: 345, minWidth: 300}}>
      <CardActionArea>
        <CardMedia
            objectFit="cover"
          component="img"
          height="140"
          image="https://picsum.photos/300/400"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
                </Grid>


                <Grid item>
                <Card sx={{ maxWidth: 345, minWidth: 300}}>
      <CardActionArea>
        <CardMedia
            objectFit="cover"
          component="img"
          height="140"
          image="https://picsum.photos/300/400"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
                </Grid>
            </Grid>

        </Box>
    )
}

export default VideoGrid;