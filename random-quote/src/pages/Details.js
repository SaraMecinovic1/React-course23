import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import "../App.css";

const Details = () => {
  const [state, setState] = useState({});
  const params = useParams();
  const navigate=useNavigate()

  console.log(params, "params");

  const oneQuote = () => {
    fetch(`https://js-course-server.onrender.com/quotes/get-quote/${params.id}`)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setState(res); //obj===citat
        console.log(res, "data");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    oneQuote();
  }, []);

  const giveLike = () => {
    fetch("https://js-course-server.onrender.com/quotes/like" + params.id, {
      method: "PATCH",
    })
      .then((data) => data.json())
      .then((data) => setState(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="all-quotes">
      <div className="card">
        <h3>
          Quote:
          <i> {state.quoteText}</i>
        </h3>

        <p>Author: {state.quoteAuthor}</p>
        <p> Likes: {state.likes}</p>

        <button
          onClick={() => {
            giveLike();
            console.log("likes");
          }}
        >
          Likes
        </button>
        <button
          onClick={() => {
          navigate("/edit")
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};
export default Details;
