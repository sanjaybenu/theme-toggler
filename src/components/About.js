import React from 'react'
import {Typography, Grid} from '@mui/material'

const About =()=>{
    return (
        <Grid container direction="row" alignItems="stretch">
           <Grid item>
        <Typography variant="h6" paragraph="true" className="about">
          My name is Sanjay Chopra and I am based in Melbourne, Australia. I am a
          full stack web developer with expertise in HTML, CSS, Javascript,
          Node.js, SQL, NoSQL, React and MERN stack. I have experience in building
          scalable, secure and reliable web applications using various frameworks
          and technologies. I enjoy solving complex problems and learning new
          skills. I am passionate about creating high-quality code that follows
          best practices and industry standards. <br />
          <br />
          I am known to be a problem solver , a team man and have highly developed
          communication skills. <br />
          <br />
          I am always looking for new challenges and opportunities to grow as a
          developer.
          <br />
          <br />
          Please look around my portfolio to get to know me better.
          <br />
          <br />
          If you want to know more or want to contact me for collaboration on a
          project or any other opportunity, please send me a message through the
          contact page.
        </Typography>
        </Grid>
        </Grid>
    )
}

export default About