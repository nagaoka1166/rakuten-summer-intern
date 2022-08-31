import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import EditOptionPage from './pages/EditOptionPage';
import SearchResultPage from './pages/SearchResultPage';

const App = () => {
  const [editOption, setEditOption] = useState(false);

  return (
    <Container maxWidth="sm" style={{ padding: 0, marginTop: -32 }}>
      <Box sx={{ my: 4 }}>
        <Header setEditOption={setEditOption} />
        {editOption ? <EditOptionPage setEditOption={setEditOption} /> : <SearchResultPage />}
      </Box>
    </Container>
  );
};

export default App;
