import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography, Button, Card } from "@mui/material";
import { Box } from "@mui/system";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";

const intro = () => {
  
  
  return (
    <div id="intro"
      style={{
        backgroundColor: "#e0e0e0",
     minHeight:'100vh' , display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center'}}
    >

      <Typography variant="h2" color="black">
        <Grid container>
          <Grid item md={7} xs={12}>
            <Box sx={{ ml: 16, m: 12 }}>
              Hello !
              <Typewriter
                options={{
                  autoStart: true,
                  loop: false,
                }}
                onInit={(typewriter) => {
                  typewriter

                    .typeString("My Name is Youssef Kaffel")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("I am a Master student")
                    .pauseFor(1500)
                    .deleteChars(14)
                    .typeString("Developper")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Welcome to my WebSite")
                    .pause()
                    .start();
                }}
              />{" "}
            </Box>
            <Box alignContent={"center"} sx={{ m: 2, ml: 16 }}>
              <Button
                variant="outlined"
                color="secondary"
                style={{
                  backgroundColor: "transparent",
                  fontFamily: "Josefin Sans",
                  maxWidth: "300px",
                  maxHeight: "300px",
                  minWidth: "250px",
                  minHeight: "80px",
                }}
              >
                Contact
              </Button>
            </Box>
          </Grid>
          <Grid item md={4} xs={12} style={{backgroundColor:'transparent', borderRadius:'50%', float:'right' ,margin : 8,marginTop:24}}>
            <img style={{'z-index': 10 , position:'relative',borderRadius:'50%',boxShadow : '1px 1px 18px 6px rgba(0, 0, 255, .2)'}} src="assets/photo.png" class="img-fluid"/>
          </Grid>
        </Grid>
      </Typography>
    </div>
  );
};

export default intro;
