import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSlice } from "../store/authSlice";
import { quoteSlice } from "../store/quoteSlice";

const Favorites = () => {
  const favorites = useSelector((state) => state.quote.favorites);  // useSelector-da uzmemo taj state,al ne da ga promenimo
  const dispatch = useDispatch(); // useDispatch-da pozovemo tu funk

  console.log(favorites);
  return (
    <div>
      {favorites.map((favorite, index) => (
        <div className="card" key={index}>
          <h3>
            <i>{favorite.quoteText}</i>
          </h3>
          <p>{favorite.quoteAuthor}</p>

          
        </div>
      ))}
      <button
            onClick={() => {
              dispatch(quoteSlice.actions.clearFavorites());
              console.log("clear")
            }}
          >
            Clear all
          </button>
    </div>
  );
};

export default Favorites;
