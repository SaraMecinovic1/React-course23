import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPosts from "./pages/Homepage";
import PostDetails from "./pages/InstagramPostDetails";

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AllPosts />} />
      <Route path="/postDetails" element={<PostDetails />}></Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
