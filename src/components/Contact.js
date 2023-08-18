import * as React from 'react';
import Box from '@mui/material/Box';
import {TextField, Grid, Typography, Button} from '@mui/material';

export default function Contact() {
  return (
    <Box
      validate
      sx={{
        maxWidth: '100%',
        border:"2px black solid",
        borderRadius: "5px",
        boxShadow: "2px 2px grey"
        
      }}
    > <Grid container display="flex" flexDirection="row" justifyContent="center" alignItems="center">
      <Grid item xs={10}>
        <Typography variant="h5">Name :</Typography>
      <TextField fullWidth label="Name" id="fullWidth" margin="normal" type="text" />
      </Grid>
      <Grid item xs={10}>
      <Typography variant="h5">Email :</Typography>
        <TextField fullWidth label="Email" id="fullWidth" margin="normal" type="email" />
         </Grid>
      <Grid item xs={10}>
      <Typography variant="h5">Phone No :</Typography>
          <TextField fullWidth label="Phone No" id="fullWidth" margin="normal" type="tel" />
           </Grid>
      <Grid item xs={10}>
      <Typography variant="h5">Message :</Typography>
            <TextField fullWidth label="Message" id="fullWidth" margin="normal" multiline minRows="6" type="text" />
    </Grid>
    </Grid>
       <Box sx={{marginTop:"15px", marginBottom:"10px"}}>
        <Grid container display="flex" justifyContent="center">
            <Grid item>
        <Button variant="contained">Submit</Button>
            </Grid>
        </Grid>
        </Box>
    </Box>
  );
}