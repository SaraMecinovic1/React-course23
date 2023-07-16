import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BMI from "./pages/BMI";
import Result from "./pages/Result";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BMI />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
