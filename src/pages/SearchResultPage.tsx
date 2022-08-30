import React, { useEffect, useState } from "react"
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Collapse from '@mui/material/Collapse';
import { useData } from "../hooks/useData";
import { QueuePlayNextSharp } from "@mui/icons-material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const SearchResultPage: React.FC = () => {
  const [count, setCount] = useState(0);
  const {fetchData, setOption, plans, fetchCurrentLocation, latitude, longitude} = useData();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (! plans.length){
    return null
  }

  return (
    <div>
      <Card>
          <CardMedia
            component="img"
            height="140"
            image={plans[0].thumbnailURL}
            alt="ホテル画像"
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {plans[0].hotelName}
            </Typography>
            <br />
            <Typography variant="h8" component="div">
              {plans[0].name}
            </Typography>
            <br />
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {plans[0].roomName}
            </Typography>
            <br />
            <Typography variant="body2">
              {plans[0].charge} 円
            </Typography>
            <br />
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {plans[0].distance} km
            </Typography>
            <br />
            <IconButton aria-label="delete">
            <LocationOnIcon />
            </IconButton>
            <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
              <ExpandMoreIcon />
            </ExpandMore>
          </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>説明</Typography>
        </CardContent>
      </Collapse>

      </Card>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab color="secondary" aria-label="close">
          <CloseIcon />
        </Fab>
        <Fab color="error" aria-label="check">
          <CheckIcon />
        </Fab>
      </Box>
    </div>
  );
}

export default SearchResultPage;
