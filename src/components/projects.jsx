import React from 'react'
import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import  Carousel  from './carousel';

export const projects = () => {
  return (
    <div style ={{
        backgroundColor:'#c6a1f0'
      }
      }><Typography variant="h2" color="black" align="center">
    <Grid container>
      <Grid item xs={12}>
        <Box sx={{ m: 4 }}>What i've done</Box>
      </Grid>
      </Grid>
      <Carousel/>
    
  </Typography></div>
  )
}
export default projects;
