import { Grid, Typography } from '@mui/material'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Box } from '@mui/system'

const about = () => {
  return (<div id="about"
  style={{
    backgroundColor: "#231526", display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center','z-index': 10 , position:'relative'}}
><Typography align="center" style={{color:'white' }} variant="h2">
<Grid container>
<Grid item xs={12}>
            <Box sx={{ m: 4 , align:'center'}} >About me
</Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ m: 4 , fontSize: 26}}>Student graduated from the national school of electronics and telecommunications, specialized in system
and Information and Communication Technologies, and currently a master's student in Computer Science and Telecommunications, </Box>
<Box sx={{ m: 4 , fontSize: 26}}>I look forward to getting involved in the great challenges and progress in this field.</Box>
<Box sx={{ m: 4 , fontSize: 26}}>I speak French and English fluently. I am enthusiastic about the prospect of working alongside a professional team, where I could use my technical know-how and my human skills</Box>
<Box sx={{ m: 4 , fontSize: 26}}>optimistic and self-motivated organized and pays close attention to detail. With a strong capacity for interpersonal and analytical thinking, I am always ready to acquire new knowledge, and wish to seize every opportunity to get out of the comfort zone, take up new challenges and live different experiences. I am also proud of my work, and I
see it as a representation of myself.</Box>

          </Grid>
          </Grid>
    </Typography></div>
    
  )
}

export default about