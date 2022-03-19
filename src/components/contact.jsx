import React from "react";
import { Typography, Grid, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { Card } from "@mui/material";
export const contact = () => {
  return (
    <div>
      {" "}
      <Typography variant="h2" color="black" sx={{ mt: 4 }}>
        <Grid container>
          <Grid item md={12} xs={12} align={"center"}>
            Contact
          </Grid>
          <Grid item md={5} xs={12}>
              <img src="assets/handshake.jpg" class="img-fluid" />
          </Grid>
          
          <Grid item md={6} xs={12} align={"center"} sx={{ mt: 2, m: 0.5 }}>
          <form action="https://formsubmit.co/2c6a356f49ba263ef092ef2401512fa3" method="POST">
            <TextField
            name="name"
              label="Name"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
            name="email"
            type="email"
              label="Email"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Text"
              variant="outlined"
              fullWidth
              rows={4}
              multiline
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
            >
              Submit
            </Button>
            </form>
          </Grid>
          
        </Grid>
      </Typography>
    </div>
  );
};
export default contact;
