import * as React from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from '@mui/icons-material/Facebook';
export default function Footer() {
  return (
    <Box
      sx={{ width: "100%", position: "fixed, , bottom: 0, left: 0, right: 0 " }}
    >
      <BottomNavigation>
        <Link href="https://www.github.com" target="_blank" rel="noreferrer">
          <BottomNavigationAction label="Github" icon={<GitHubIcon />} />
        </Link>
        <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <BottomNavigationAction label="Linkedin" icon={<LinkedInIcon />} />
        </Link>
        <Link href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
        </Link>
        <Link href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <BottomNavigationAction label="facebook" icon={<FacebookIcon />} />
        </Link>
        <Link
          href="https://studio.youtube.com/channel/UCA4mc_H-tqG-aK6kElG2sGQ"
          target="_blank"
          rel="noreferrer"
        >
          <BottomNavigationAction label="Youtube" icon={<YouTubeIcon />} />
        </Link>
        <Link href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
        </Link>
      </BottomNavigation>
    </Box>
  );
}
