import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useState } from 'react';
import './App.css';
import CircularProgress from '@mui/material/CircularProgress';
import Header from './components/Header';
import EditOptionPage from './pages/EditOptionPage';
import SearchResultPage from './pages/SearchResultPage';
import { useData } from './hooks/useData';

const App = () => {
  const [editOption, setEditOption] = useState(false);
  const { loading } = useData();

  return (
    <Container maxWidth="sm" style={{ padding: 0, marginTop: -32 }}>
      <Box sx={{ my: 4 }}>
        <Header setEditOption={setEditOption} />
        {editOption ? <EditOptionPage /> : <SearchResultPage />}
        {loading && (
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
        )}
      </Box>
    </Container>
  );
};

export default App;
