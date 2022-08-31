import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { useData } from '../hooks/useData';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
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
  const { plans } = useData();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (plans.length === 0 || plans.length <= count) {
    return null;
  }

  return (
    <div>
      <Card sx={{ m: 4 }}>
        <CardMedia component="img" height="200" image={plans[count].thumbnailURL} alt="ホテル画像" />
        <CardContent>
          <Typography variant="h6" component="div">
            {plans[count].hotelName}
          </Typography>
          <br />
          <Typography variant="body2" component="div">
            {plans[count].name}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {plans[count].roomName}
          </Typography>
          <br />
          <Box sx={{ flexDirection: 'row' }}>
            <Typography display="inline" variant="h6">
              {plans[count].charge} 円
            </Typography>
            <Typography sx={{ mx: 2 }} display="inline" variant="h6" color="text.secondary">
              {plans[count].distance} km
            </Typography>
            <IconButton aria-label="delete">
              <LocationOnIcon />
            </IconButton>
            <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
              <ExpandMoreIcon />
            </ExpandMore>
          </Box>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>説明</Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Box
        sx={{ '& > :not(style)': { m: 1 } }}
        style={{
          margin: 0,
          top: 'auto',
          bottom: 20,
          position: 'fixed',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          maxWidth: 600,
        }}
      >
        <Fab
          color="secondary"
          aria-label="close"
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          <CloseIcon />
        </Fab>
        <Fab
          color="error"
          aria-label="check"
          onClick={() => {
            document.location.href = plans[count].reserveURL;
          }}
        >
          <CheckIcon />
        </Fab>
      </Box>
    </div>
  );
};

export default SearchResultPage;
