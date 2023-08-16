import React from "react";
import { Box, Typography } from "@mui/material";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

function Content(props) {
  return <Box>{props.children}</Box>;
}

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <Home />;
    }
  };

  return (
    <Box>
      <Typography variant="h2">{currentPage.name}</Typography>
      <Content>{renderPage()}</Content>
    </Box>
  );
}

export default Page;