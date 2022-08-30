import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';


const Header = ({setEditOption}:{setEditOption:React.Dispatch<React.SetStateAction<boolean>>}) => {
  const setEditOptionClick = () => {
      setEditOption(true);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rakuten トマレル
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={setEditOptionClick}
          >
            <SettingsSharpIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
)
}
export default Header;