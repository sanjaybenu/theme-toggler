import {Card, CardActions, CardContent, CardMedia, Typography, Link} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';



const Project = ({ project }) => {
    const { title, desc, github, deployedapp, image } = project;


    return(

        <Card >
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={title}
      />
      <CardContent sx={{height:"200px"}}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
          <Link href={github} target="_blank" rel="noreferrer">
            <GitHubIcon color="secondary" />
          </Link>
          <Link
            href={deployedapp}
            target="_blank"
            rel="noreferrer"
          >
            <LaptopMacIcon color="success" />

          </Link>
      </CardActions>
    </Card>
    )
}

export default Project