import "bootstrap/dist/css/bootstrap.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function footer() {
  return (
    <div style={{backgroundColor: "#211221",'z-index': 10 , position:'relative'}}>
      <Typography variant="h2" color="black">
        <Grid container align={'center'}>
          <Grid item md={4} xs={6}>
            <Box sx={{   m: 1.5  }}>
            <Button
           
                  onClick={() => {
                    window.open('tel:+21623911695');
                  }}
                variant="contained"
                style={{
                  fontFamily: "Josefin Sans",
                  maxWidth: "400px",
                  maxHeight: "300px",
                  minWidth: "150px",
                  minHeight: "20px",
                  color : '#211221' ,
                  backgroundColor : '#baabba'
                }}
              >  <CallIcon/>  Telephone : 23 911 695</Button>
            </Box>
          </Grid>
          
          <Grid item md={4} xs={6}>
            <Box sx={{   m: 1.5  }}>
            <Button
            onClick={() => {
              window.open('https://www.linkedin.com/in/youssefkaffel/');
            }}
                variant="contained"
                style={{
                  fontFamily: "Josefin Sans",
                  maxWidth: "300px",
                  maxHeight: "300px",
                  minWidth: "150px",
                  minHeight: "20px",
                  color : '#211221' ,
                  backgroundColor : '#baabba'
                }}
              >
               <LinkedInIcon/> LinkedIn
              </Button>
            </Box>
          </Grid>
          <Grid item md={4} xs={6}>
            <Box sx={{  m: 1.5 }}>
            <Button
            onClick={() => {
              window.open('https://twitter.com/youssefkaffel1');
            }}
                variant="contained"
                style={{
                  fontFamily: "Josefin Sans",
                  maxWidth: "300px",
                  maxHeight: "300px",
                  minWidth: "150px",
                  minHeight: "20px",
                  color : '#211221' ,
                  backgroundColor : '#baabba'
                }}
              >
               <TwitterIcon/> Twitter
              </Button>
            </Box>
          </Grid>
          <Grid item md={6} xs={6}>
            <Box sx={{ m: 1.5 }}>
            <Button
            onClick={() => {
              window.open('https://github.com/youssefkaffel');
            }}
                variant="contained"
                style={{
                  fontFamily: "Josefin Sans",
                  maxWidth: "300px",
                  maxHeight: "300px",
                  minWidth: "150px",
                  minHeight: "20px",
                  color : '#211221' ,
                  backgroundColor : '#baabba'
                }}
              >
               <GitHubIcon/> GitHub
              </Button>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box sx={{  m: 1.5  }}>
              <Button
              onClick={() => {
                window.open('mailto:youssef.kaffel99@gmail.com');
              }}
                variant="contained"
                style={{
                  fontFamily: "Josefin Sans",
                  maxWidth: "400px",
                  maxHeight: "300px",
                  minWidth: "150px",
                  minHeight: "20px",
                  color : '#211221' ,
                  backgroundColor : '#baabba'
                }}
              ><MailIcon/>Mail:youssef.kaffel99@gmail.com
             
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Typography>
    </div>
  );
}
