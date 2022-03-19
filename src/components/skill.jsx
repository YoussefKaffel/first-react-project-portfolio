import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function skill({skill}) {
  return (
    <Card item md={4}  sx={{ maxWidth: 350 }} elevation={12} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="270"
        image={skill.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" fontFamily={'Josefin Sans'} >
          {skill.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontFamily={'Josefin Sans'}>
         {skill.description}
        </Typography>
      </CardContent>
      
    </Card>
  );
}
