import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import "../App.css";
import { deleteQuote, getQuoteById, likeQuote } from "../firebase";

const Details = () => {
  const [state, setState] = useState({});
  const params = useParams();
  const navigate=useNavigate()

  console.log(params, "params");

const getQuoteData = () => {
    getQuoteById(params.id)
      .then((data) => {
        setState(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
getQuoteData()
  }, []);

  const likeHandler = () => {
    likeQuote(params.id, state.likes + 1)
      .then(() => {
        getQuoteData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteQuoteHandler = async () => {
    try {
      await deleteQuote(params.id);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="all-quotes">
      <div className="card">
        <h3>
          Quote:
          <i> {state.Quote}</i>
        </h3>

        <p>Author: {state.Author}</p>
        <p> Likes: {state.likes}</p>

        <button
          onClick={() => {
            likeHandler();
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
        <button
          onClick={() => {
          navigate("/favorite")
          }}
        >
         Add to favorites
        </button>

        <button
          onClick={() => {
          deleteQuoteHandler()
          }}
        >
         Delete
        </button>
        
      </div>
    </div>
  );
};
export default Details;
