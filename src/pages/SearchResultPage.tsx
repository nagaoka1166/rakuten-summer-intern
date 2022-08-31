import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from '@mui/material/IconButton';
import { CircularProgress, Slide } from '@mui/material';
import { useData } from '../hooks/useData';

type Props = {
  editOption: boolean;
};

const SearchResultPage: React.FC<Props> = ({ editOption }) => {
  const [count, setCount] = useState(0);
  const { plans, loading } = useData();
  const containerRef = React.useRef(null);

  useEffect(() => {
    if (editOption) setCount(0);
  }, [editOption]);

  if (loading) {
    return (
      <div
        style={{
          height: '100vh',
          width: '100vw',
          position: 'absolute',
          left: 0,
          top: 0,
        }}
      >
        <div
          style={{
            maxWidth: 600,
            height: '100%',
            width: '100%',
            display: 'flex',
            margin: '0 auto',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            opacity: 0.7,
          }}
        >
          <CircularProgress />
        </div>
      </div>
    );
  }

  if (plans.length === 0) {
    return <div>候補が見つかりませんでした。再検索お願いします。</div>;
  }

  if (plans.length <= count) {
    return <div>候補は以上です。再検索お願いします。</div>;
  }

  return (
    <div ref={containerRef}>
      {plans.map((p, i) => {
        const inF = i === count;
        return (
          <Slide
            timeout={{ enter: 300, exit: 0 }}
            in={inF}
            mountOnEnter
            unmountOnExit
            container={containerRef.current}
            direction="right"
          >
            <Card sx={{ m: 4 }}>
              <CardMedia component="img" height="200" image={p.thumbnailURL} alt="ホテル画像" />
              <CardContent>
                <Typography variant="h6" component="div">
                  {p.hotelName}
                </Typography>
                <br />
                <Typography variant="body2" component="div">
                  {p.name}
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {p.roomName}
                </Typography>
                <br />
                <Box sx={{ flexDirection: 'row' }}>
                  <Typography display="inline" variant="h6">
                    {p.charge} 円
                  </Typography>
                  <Typography sx={{ mx: 2 }} display="inline" variant="h6" color="text.secondary">
                    {p.distance} km
                  </Typography>
                  <IconButton aria-label="delete">
                    <LocationOnIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Slide>
        );
      })}
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
            window.open(plans[count].reserveURL, '_blank');
          }}
        >
          <CheckIcon />
        </Fab>
      </Box>
    </div>
  );
};

export default SearchResultPage;
