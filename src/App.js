import { useState } from "react";
import { Paper, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import Page from "./components/Page";
import Header from "./components/Header";
import StyledSwitch from "./components/StyledSwitch";
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
  const [btncolor, setBtncolor] = useState("secondary");
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
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
      <Header
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      >
        <StyledSwitch
          onClick={toggleTheme}
          variant="contained"
          color={btncolor}
        />
      </Header>

      <Paper
        sx={{ height: "100vh", margin: "auto", padding: "50px" }}
        elevation={8}
        maxWidth="sm"
      >

        <Box>
          <Page currentPage={currentPage} />
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
