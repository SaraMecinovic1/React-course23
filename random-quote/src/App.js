import './App.css';
import All from './pages/All';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<All/>}   />
      <Route path='/details/:id' element={<Details/>}   />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
