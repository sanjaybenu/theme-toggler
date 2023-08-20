import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { TextField, Grid, Typography, Button, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "danger",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  // modal
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //modal
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+|0)\d+$/;

    if (!name || !email || !phone || !message) {
      setAlert("Please fill in all fields");
      handleOpen();
      return;
    }

    if (!emailRegex.test(email)) {
      setAlert("Please enter a valid email");
      handleOpen();
      return;
    }

    if (!phoneRegex.test(phone)) {
      setAlert("Please enter a valid phone number");
      handleOpen();
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
        <Modal
          open="true"
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Information submitted successfully
            </Typography>
          </Box>
        </Modal>
      ) : (
        <Box
          sx={{
            maxWidth: "100%",
            border: "2px black solid",
            borderRadius: "5px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.7) ",
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
                name= "name"
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
                name="email"
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
                name="tel"
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
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
          </Grid>
          <Box sx={{ marginTop: "15px", marginBottom: "10px" }}>
            <Grid container display="flex" justifyContent="center">
              <Grid item>
                <Button variant="contained" onClick={handleSubmit}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {alert}
                </Typography>
              </Box>
            </Modal>
          </div>
        </Box>
      )}
    </>
  );
}
