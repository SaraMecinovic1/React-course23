import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PostDetails from "./pages/InstagramPostDetails";

function App() {
  return(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/postDetails" element={<PostDetails />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
