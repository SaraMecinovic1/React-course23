import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PostDetails() {
  const location = useLocation();
  const navigate = useNavigate;
  console.log("LOCATION---", location.state);

  return (
    <div>
      <h1> POST DETAILS</h1>

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        CLICK ME TO BACK
      </button>
    </div>
  );
}

export default PostDetails;
