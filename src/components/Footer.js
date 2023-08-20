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
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Footer() {
  return (
    <Box sx={{ width:"100%", position: "fixed, bottom: 0, left: 0, right: 0" }} >
      <BottomNavigation>
      <Link href="https://www.youtube.com/@sanjaychopra5357/featured" target="_blank" rel="noreferrer">
          <BottomNavigationAction icon={<YouTubeIcon />} />
        </Link>
        <Link href="https://www.github.com" target="_blank" rel="noreferrer">
          <BottomNavigationAction icon={<GitHubIcon />} />
        </Link>
        <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <BottomNavigationAction icon={<LinkedInIcon />} />
        </Link>
        <Link href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <BottomNavigationAction icon={<TwitterIcon />} />
        </Link>
        <Link href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <BottomNavigationAction icon={<FacebookIcon />} />
        </Link>
        <Link href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <BottomNavigationAction icon={<InstagramIcon />} />
        </Link>
      </BottomNavigation>
    </Box>
  );
}
