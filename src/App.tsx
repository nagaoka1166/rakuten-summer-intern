import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import EditOptionPage from './pages/EditOptionPage';
import SearchResultPage from './pages/SearchResultPage';

const App = () => {
  const [editOption, setEditOption] = useState(false);

  return <div>
    <Header></Header>
    {editOption ? <EditOptionPage /> : <SearchResultPage />}
    <div>footer</div>
  </div>
};

export default App;
