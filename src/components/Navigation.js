import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
//import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

//import "./style.css";

const Navigation = (props) => {
  const { pages = [], currentPage, setCurrentPage } = props;

  useEffect(() => {
    document.title = currentPage.name;
  }, [currentPage]);

  return (
    <AppBar position="static"  id="nav"  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',  width:"50%", boxShadow:"none", flexDirection:"row"}}>
      <Container>
        <Toolbar>
            {pages.map((Page) => (
              <Button
                key={Page.name}
                color={currentPage.name === Page.name ? "secondary" : "inherit"}
                onClick={() => setCurrentPage(Page)}
              >
                {Page.name}
              </Button>
            ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;



// import React from "react";
// import { AppBar, Toolbar, IconButton, useMediaQuery } from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';;

// const Navigation = ({ pages, currentPage, setCurrentPage }) => {
//   const isSmallScreen = useMediaQuery("(max-width:600px)");

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         {isSmallScreen ? (
//           <IconButton edge="start" color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//         ) : (
//           // Render your navigation links here
//           <div>
//             {pages.map((page) => (
//               <button
//                 key={page.name}
//                 onClick={() => setCurrentPage(page)}
//                 className={currentPage === page ? "active" : ""}
//               >
//                 {page.name}
//               </button>
//             ))}
//           </div>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navigation;
