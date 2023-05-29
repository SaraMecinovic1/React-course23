import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello world</div>,
  },
]);

const BlogDetalis = () => {
  return (
    <div>
      <div style={(border = "1px solid black")}>
        <h3>This is my blog</h3>
        <h3>Blog is about programming</h3>
        <button>Go to detalis</button>
      </div>
    </div>
  );
};

export default BlogDetalis;
