import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Skill from "./skill";
import Silk from "./silk"
import { dskills } from "../data/dskills";
export const skills = () => {
  return (
    <div  id="skills" style={{zIndex:"10" , margin:0,
      padding:0,
      overflowX:"hidden"}}>
      <Typography variant="h2" color="black" align="center">
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ m: 2 }}>What i'm great at</Box>
          </Grid>
          </Grid>
        </Typography>
      
      
      <Silk />
    </div>
  );
};
export default skills;
