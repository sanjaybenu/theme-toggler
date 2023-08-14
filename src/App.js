import { useState } from 'react';
import { Paper, Typography, Container, Button, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';

// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
const avatar = require('./images/avatar.png')
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    box: {
      backgroundColor: '#000000', // Black background for dark theme
    },
    
  },

  typography: {
    h4: {
      color: '#ffffff', // White text color for dark theme
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    box: {
      backgroundColor: '#FFFFFF', // White background for light theme
    },
    
  },
  
  typography: {
    h4: {
      color: '#000000', // Black text color for light theme
    },
  },
});

function App() {
  const [theme, setTheme]= useState(darkTheme)
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === darkTheme ? lightTheme : darkTheme);

}
  return (
    <>
    <ThemeProvider theme={theme}>
    <Box sx={{textAlign:'center'}}> <Button onClick={toggleTheme} variant="contained" color="secondary" sx={{ marginTop: 2}}>
          Toggle Theme
        </Button></Box>
      <Paper sx={{width:1000, height:'100vh', margin:'auto'}}>
    <Typography variant="h4" component="h5" sx={{textAlign:'center', marginTop:10, padding:8}}>Let us make dark/light mode using material ui react</Typography>
   <Grid container spacing={2} sx={{width:800, margin:'auto'}}>
    <Grid xs={3}>
    <Paper sx={{height:200,textAlign:'center'}} elevation={3}><Typography>Hello I am a paper</Typography><img src={avatar} alt="other avatar" style={{width:'70%'}}/></Paper>
    </Grid>
    <Grid xs={3}>
    <Paper sx={{height:200,textAlign:'center', backgroundImage:`url(${avatar})`, backgroundSize:'cover', backgroundPosition:'center'}} elevation={3} >Hello I am a paper</Paper>
    </Grid>
    <Grid xs={3}>
    <Paper sx={{height:200,textAlign:'center'}} elevation={3}>
    <Typography variant="h5" component="h6">
    Hello I am a paper
    </Typography>
    </Paper>
    
    </Grid>
    <Grid xs={3}>
    <Paper sx={{height:200,textAlign:'center'}} elevation={3}>Hello I am a paper</Paper>
    </Grid>
    </Grid>
    </Paper>
   
    </ThemeProvider>
    </>
  );
}

export default App;
