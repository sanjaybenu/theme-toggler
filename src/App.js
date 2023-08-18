import { useState } from "react";
import { Paper, Box, IconButton, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import Page from "./components/Page";
import Header from "./components/Header";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
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
      
      <Header
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      >
        <Grid container direction="row" alignItems="center" justifyContent="flex-end" >
          <Grid item >
        {theme===darkTheme?(<IconButton aria-label="Dark Mode" disableRipple="true" onClick={toggleTheme}>
<DarkModeIcon sx={{marginRight:"25px", color:"grey"}} />
</IconButton>): (<IconButton aria-label="Light Mode" disableRipple="true" onClick={toggleTheme}>
<LightModeIcon sx={{marginRight:"25px", color:"white"}} />
</IconButton>)}
</Grid>
</Grid>

      </Header>

      <Paper
        sx={{ minHeight: "100vh", margin: "auto", padding: "50px" }}
        elevation={8}
        maxWidth="sm"
        square="true"
      >
        
        <Box>
          <Page currentPage={currentPage} />
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
