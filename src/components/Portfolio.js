import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Project from "./Project";

const blogging = require("../images/Go-Blogging-Tech.png");
const recipe = require("../images/Recipe-Bank.png");
const travel = require("../images/AIO-App.png");
const weather = require("../images/Weather-App-With-Map.png");
const text = require("../images/Text-Editing-Everywhere.png");
const schedule = require("../images/Scheduler-App.png");

const Projects = [
  {
    title: "Go-Blogging Tech",
    desc: " This application is aimed at technical professionals in the fields of coding, programming, data management, app development. The objective of this app is to create a community of technical professionals, who come to this app to read and share their thoughts on new technologies, frameworks, libraries and tips and tricks.",
    github: "https://github.com/sanjaybenu/go-blogging-tech",
    deployedapp: "https://go-blogging-tech.herokuapp.com/",
    image: blogging,
  },
  {
    title: "recipe-bank",
    desc: "This application is designed for food lovers and anyone that wants to cook something new. Through this app users can read recipes posted by users,make comments or read comments on a recipe and can post their own recipes and share with the community. This allows the user to experience different kinds of culture and cuisines such as middle eastern, indian, french, japanese etc.",
    github: " https://github.com/sanjaybenu/recipe-bank",
    deployedapp: "https://your-recipe-bank.herokuapp.com/",
    image: recipe,
  },
  {
    title: "aio-travel-app",
    desc: "The objective of this app is to provide a one stop shop to the travellers of today to research a location of their choice. The app provides the user, information on weather, choice of local restaurants and local news of the selected location. The app also provides a handy currency conversion tool to check value of their currency in local currency",
    github: "https://github.com/Stuartteh1995/aio-travel-app",
    deployedapp: "https://stuartteh1995.github.io/aio-travel-app/",
    image: travel,
  },
  {
    title: "weather-app-with-map",
    desc: "Weather Dashboard provides the current weather conditions and 5 days forecast of the selected city. It also stores the history of the city to repopulate weather of that city",
    github: "https://github.com/sanjaybenu/Weather-App-with-map",
    deployedapp: "https://sanjaybenu.github.io/Weather-App-with-map/",
    image: weather,
  },
  {
    title: "text-editing-anywhere",
    desc: "This downloadable App is for anyone who wants to create notes or code snippets on the go. The notes can be created with or with internet connection. ",
    github: "https://github.com/sanjaybenu/text-editing-anywhere",
    deployedapp: " https://text-editing-anywhere-fad9ad3ec068.herokuapp.com/",
    image: text,
  },
  {
    title: "my-daily-scheduler-app",
    desc: " This app provides a tool to an employee, so that the employee can create a daily work plan. The app shows the current day and time on the top of the page and has color coded hourly slots",
    github: "https://github.com/sanjaybenu/My-Daily-Schedule-App",
    deployedapp: "https://sanjaybenu.github.io/My-Daily-Schedule-App/",
    image: schedule,
  },
];

const Portfolio = () => {
    return (
      <Grid container spacing={2} direction="row" alignItems="stretch">
        
          {Projects.map((project, index) => (
            <Grid item xs={12}  md={4}>
            <Project project={project} key={index} />
            </Grid>
          ))}
       
      </Grid>
    );
  };
  
  export default Portfolio;