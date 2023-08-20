import { useState } from "react";
import { Paper, Box, IconButton, Grid, CssBaseline, Typography} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Page from "./components/Page";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "./App.css";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)", // Set the background color here
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)", // Set the background color here
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
});

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme,
    );
  };
  const [pages] = useState([
    { name: "Home" },
    { name: "About" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <ThemeProvider theme={theme}>
      <Header
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Grid item>
            <Typography variant="caption" sx={{fontSize:".5rem"}}>{theme.palette.mode} mode</Typography>
            {theme === darkTheme ? (
              <IconButton
                aria-label="Dark Mode"
                disableRipple={true}
                onClick={toggleTheme}
              >
                <DarkModeIcon sx={{ marginRight: "25px", color: "grey" }} />
              </IconButton>
            ) : (
              <IconButton
                aria-label="Light Mode"
                disableRipple={true}
                onClick={toggleTheme}
              >
                <LightModeIcon sx={{ marginRight: "25px", color: "white" }} />
              </IconButton>
            )}
          </Grid>
        </Grid>
      </Header>
      <CssBaseline />
      <Paper
        sx={{ minHeight: "100vh", margin: "auto", padding: "50px" }}
        elevation={8}
        maxWidth="xs"
        square={true}
      >
        <Box>
          <Page currentPage={currentPage} />
        </Box>
        <Box display="flex" alignItems="center">
        </Box>
      </Paper>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
