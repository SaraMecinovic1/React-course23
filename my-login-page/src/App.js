import { Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";




const App = () => {
return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
  </BrowserRouter>
)
};

export default App;
