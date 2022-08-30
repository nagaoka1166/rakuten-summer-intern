import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import EditOptionPage from './pages/EditOptionPage';
import SearchResultPage from './pages/SearchResultPage';

const App = () => {
  const [editOption, setEditOption] = useState(false);

  return <div>
    <Header />
    {editOption ? <EditOptionPage /> : <SearchResultPage />}
  </div>
};

export default App;
