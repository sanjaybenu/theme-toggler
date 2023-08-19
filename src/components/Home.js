import React from "react";
import { Fade } from "react-awesome-reveal";
import Typist from "react-typist-component";
import { Typography, Grid } from "@mui/material";

const Home = () => {
  const languages = [
    "JavaScript ",
    "React ",
    "HTML ",
    "CSS ",
    "NodeJs ",
    "SQL ",
    "NoSQL ",
    "Progressive Web Apps ",
    "MERN Stack ",
  ];
  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ textAlign: "center" }}
    >
      <Grid item>
        <Fade duration={3000} cascade={true} direction="up">
          <Typography variant="h1">Hello There</Typography>
          <Typography variant="h3">My Name is Sanjay Chopra</Typography>
          <Typography variant="h4">
            A{" "}
            <Typography variant="h4" sx={{ color: "darkviolet" }}>
              Full
            </Typography>{" "}
            Stack Web Developer
          </Typography>
          <Typography variant="h4" paragraph="true">
            an amatuer photographer and drone pilot
          </Typography>
          <Typography variant="h4" paragraph="true">
            I am proficient in
          </Typography>
        </Fade>
        <Typography variant="h4" paragraph="true">
          <span>
            <Typist typingDelay={300} loop={true} startDelay={5500}>
              {languages.map((language) => (
                <React.Fragment key={language}>
                  <Typography variant="h3" sx={{ color: "darkviolet" }}>
                    {language}
                  </Typography>

                  <Typist.Backspace count={language.length} />
                </React.Fragment>
              ))}
              <Typography
                variant="h2"
                sx={{ color: "darkblue", fontWeight: "700" }}
              >
                Welcome to my World{" "}
              </Typography>
              <Typist.Backspace count={22} />
            </Typist>
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
