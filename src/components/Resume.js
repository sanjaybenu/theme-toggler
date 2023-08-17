import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import { Button, Box } from "@mui/material";
const TechSkills = [
  "JavaScript",
  "React",
  "Progressive Web Apps",
  "Mern Stack",
  "NoSQL",
  "SQL",
  "jQuery",
  "Bootstrap",
  "CSS",
  "HTML",
];
const SoftSkills = [
  "Strong Communication",
  "Problem Solving",
  "Time Management",
  "Operations Management",
  "People Management",
  "Technical Writing",
  "Team Building",
];

const Resume = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Technical Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {TechSkills.map((skill, index) => (
              <ListItem disablePadding key={index}>
                <ListItemButton>
                  <ListItemText primary={skill} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Soft Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {SoftSkills.map((skill, index) => (
              <ListItem disablePadding key={index}>
                <ListItemButton>
                  <ListItemText primary={skill} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      {/* Add Button to download Resume */}
      <Box sx={{ textAlign: "center", marginTop: "15px" }}>
        <Link href={process.env.PUBLIC_URL + "/Resume.pdf"} target="_blank">
          <Button variant="contained">Download Resume</Button>
        </Link>
      </Box>
    </div>
  );
};

export default Resume;
