import * as React from "react";
import {useState} from 'react'
import Box from "@mui/material/Box";
import { TextField, Grid, Typography, Button } from "@mui/material";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d+$/;

    if (!name || !email || !phone || !message) {
      alert("Please fill in all fields");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number");
      return;
    }

    setSubmitted(true);

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");

    setTimeout(() => {
      setSubmitted(false);
    }, 2000);
  };
  return (
    <>
    {submitted ? (
      <Box sx={{textAlign:"center"}}>
        <Typography variant="h5">Information submitted successfully!</ Typography>
        </Box>
      ):
    (<Box
      sx={{
        maxWidth: "100%",
        border: "2px black solid",
        borderRadius: "5px",
        boxShadow: "3px 6px grey ",
      }}
    >
      {" "}
      <Grid
        container
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={10}>
          <Typography variant="h5">Name :</Typography>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h5">Email :</Typography>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h5">Phone No :</Typography>
          <TextField
            fullWidth
            label="Phone No"
            margin="normal"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h5">Message :</Typography>
          <TextField
            fullWidth
            label="Message"
            margin="normal"
            multiline
            minRows="6"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Grid>
      </Grid>
      <Box sx={{ marginTop: "15px", marginBottom: "10px" }}>
        <Grid container display="flex" justifyContent="center">
          <Grid item>
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
    )}
   </>
  );
  
}
