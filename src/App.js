import { useState } from "react";
import { Paper, Typography, Switch, Box } from "@mui/material";
//import Grid from "@mui/material/Unstable_Grid2";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import Header from "./components/Header";
import Page from "./components/Page";
import Navigation from "./components/Navigation";
//import { Navigation } from "@mui/icons-material";

// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
//const avatar = require("./images/avatar.png");
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },

  typography: {
    h4: {
      color: "#ffffff", // White text color for dark theme
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },

  typography: {
    h4: {
      color: "#000000", // Black text color for light theme
    },
  },
});

function App() {
  const [theme, setTheme] = useState(darkTheme);
  const [btncolor, setBtncolor] = useState("secondary");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === darkTheme ? lightTheme : darkTheme));
    setBtncolor((prevColor) =>
      prevColor === "secondary" ? "default" : "secondary"
    );
  };
  const [pages] = useState([
    { name: "Home" },
    { name: "About" },
    { name: "Contact" },
    { name: "Portfolio" },
    { name: "Resume" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Navigation
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <Typography variant="subtitle2">Toggle Mode</Typography>

        <Switch
          onClick={toggleTheme}
          variant="contained"
          color={btncolor}
          sx={{ float: "right" }}
        />
      </Header>

      <Paper
        sx={{ height: "100vh", margin: "0 20", padding: "150px" }}
        elevation={8}
        maxWidth="sm"
      >
        {/* <>
          <Typography
            variant="h4"
            component="h5"
            sx={{ textAlign: "center", marginTop: 10, padding: 8 }}
          >
            Let us toggle dark/light mode using material ui react
          </Typography>
          <Grid container spacing={2} sx={{ margin: "auto" }} maxWidth="md">
            <Grid xs={3}>
              <Paper sx={{ height: 200, textAlign: "center" }} elevation={3}>
                <Typography>Hello I am an avatar</Typography>
                <img src={avatar} alt="other avatar" style={{ width: "70%" }} />
              </Paper>
            </Grid>
            <Grid xs={3}>
              <Paper
                sx={{
                  height: 200,
                  textAlign: "center",
                  backgroundImage: `url(${avatar})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                elevation={3}
              >
                Hello I am another avatar
              </Paper>
            </Grid>
            <Grid xs={3}>
              <Paper sx={{ height: 200, textAlign: "center" }} elevation={3}>
                <Typography variant="h7" component="h7">
                  Hello I am a paper
                </Typography>
              </Paper>
            </Grid>
            <Grid xs={3}>
              <Paper sx={{ height: 200, textAlign: "center" }} elevation={3}>
                Hello I am a paper
              </Paper>
            </Grid>
          </Grid>
          </> */}
        <Box>
          <Page currentPage={currentPage} />
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
