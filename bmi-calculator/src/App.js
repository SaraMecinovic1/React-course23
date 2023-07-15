import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BMI from './pages/BMI';
import Result from './pages/Result';


const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<BMI />} />
      <Route path="/result" element={<Result />} />
    </Routes>
    </BrowserRouter>
  )
  };
  
  export default App;