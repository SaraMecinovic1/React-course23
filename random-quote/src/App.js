import "./App.css";
import All from "./pages/All";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddQuote from "./pages/AddQuote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addNew" element={<AddQuote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
