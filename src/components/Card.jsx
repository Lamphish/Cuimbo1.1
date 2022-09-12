import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './static/body.css'

export default function card() {
  return (
    <div className='card__inner'>
        <Card id="about" sx={{ 
            maxWidth: 1638, 
            maxHeight: 500, 
            width: '30%',
            height: '50%',
            margin: "5px",
            background: "linear-gradient(90deg, rgba(255,168,96,1) 0%, rgba(93,102,255,1) 100%);"
            }}>
            <CardMedia id="aboutIMG"
            component="img"
            height="60%"
            image="https://source.unsplash.com/random"
            alt="green iguana"
            />
            <CardContent sx={{margin: "0px",
                            padding: "19px 15px 3px 16px"}}>
            <Typography gutterBottom variant="h5" component="div">
                Lizard
            </Typography>
            <Typography  variant="body3" color="">
                Use the Cuimbo Playground
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">TEST IT</Button>
            </CardActions>
        </Card>
        <Card sx={{ 
            maxWidth: 1638, 
            maxHeight: 500, 
            width: '30%',
            height: '50%',
            margin: "5px",
            background: "linear-gradient(90deg, rgba(255,168,96,1) 0%, rgba(93,102,255,1) 100%);"
            }}>
            <CardMedia
            component="img"
            height="60%"
            image="https://source.unsplash.com/random"
            alt="green iguana"
            />
            <CardContent sx={{margin: "0px",
                            padding: "19px 15px 3px 16px"}}>
            <Typography gutterBottom variant="h5" component="div">
                Lizard
            </Typography>
            <Typography  variant="body3" color="">
                Use the Cuimbo Playground
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">TEST IT</Button>
            </CardActions>
        </Card>
        <Card sx={{ 
            maxWidth: 1638, 
            maxHeight: 500, 
            width: '30%',
            height: '50%',
            margin: "5px",
            background: "linear-gradient(90deg, rgba(255,168,96,1) 0%, rgba(93,102,255,1) 100%);"
            }}>
            <CardMedia
            component="img"
            height="60%"
            image="https://source.unsplash.com/random"
            alt="green iguana"
            />
            <CardContent sx={{margin: "0px",
                            padding: "19px 15px 3px 16px"}}>
            <Typography gutterBottom variant="h5" component="div">
                Lizard
            </Typography>
            <Typography  variant="body3" color="black">
                Use the Cuimbo Playground
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">TEST IT</Button>
            </CardActions>
        </Card>
        <Card sx={{ 
            maxWidth: 1638, 
            maxHeight: 500, 
            width: '30%',
            height: '50%',
            margin: "5px",
            background: "linear-gradient(90deg, rgba(255,168,96,1) 0%, rgba(93,102,255,1) 100%);"
            }}>
            <CardMedia
            component="img"
            height="60%"
            image="https://source.unsplash.com/random"
            alt="green iguana"
            />
            <CardContent sx={{margin: "0px",
                            padding: "19px 15px 3px 16px"}}>
            <Typography gutterBottom variant="h5" component="div">
                Lizard
            </Typography>
            <Typography  variant="body3" color="">
                Use the Cuimbo Playground
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">TEST IT</Button>
            </CardActions>
        </Card>
        <Card sx={{ 
            maxWidth: 1638, 
            maxHeight: 500, 
            width: '30%',
            height: '50%',
            margin: "5px",
            background: "linear-gradient(90deg, rgba(255,168,96,1) 0%, rgba(93,102,255,1) 100%);"
            }}>
            <CardMedia
            component="img"
            height="60%"
            image="https://source.unsplash.com/random"
            alt="green iguana"
            />
            <CardContent sx={{margin: "0px",
                            padding: "19px 15px 3px 16px"}}>
            <Typography gutterBottom variant="h5" component="div">
                Lizard
            </Typography>
            <Typography  variant="body3" color="">
                Use the Cuimbo Playground
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">TEST IT</Button>
            </CardActions>
        </Card>
        <Card sx={{ 
            maxWidth: 1638, 
            maxHeight: 500, 
            width: '30%',
            height: '50%',
            margin: "5px",
            background: "linear-gradient(90deg, rgba(255,168,96,1) 0%, rgba(93,102,255,1) 100%);"
            }}>
            <CardMedia
            component="img"
            height="60%"
            image="https://source.unsplash.com/random"
            alt="green iguana"
            />
            <CardContent sx={{margin: "0px",
                            padding: "19px 15px 3px 16px"}}>
            <Typography gutterBottom variant="h5" component="div">
                Lizard
            </Typography>
            <Typography  variant="body3" color="">
                Use the Cuimbo Playground
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">TEST IT</Button>
            </CardActions>
        </Card>
    </div>
  );
}