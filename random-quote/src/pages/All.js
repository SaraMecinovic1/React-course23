import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authSlice } from "../store/authSlice";
import { quoteSlice } from "../store/quoteSlice";

const All = () => {
  const [quote, setQuote] = useState([]);
  const authState = useSelector((state) => state.auth); // uzimamo state iz authSlice
  const quoteState = useSelector((state) => state.quote);
  const dispatch = useDispatch(); // poziva funk
  const navigate = useNavigate();
  console.log(quote);

  const goTo = (props) => {
    navigate(`/details/${props}`); //gde da me povede i id tog citata
    console.log("radi");
  };

  useEffect(() => {
    fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuote(data); //dajemo state-u vrednost objekta tj tih citata
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(quote , "state");

  return (
    <div className="all-quotes">
      <div className="header">
        <p>Favorite quotes: {quoteState.favorites.length }</p> 
        <button
          onClick={() => {
            navigate("/favorite");
            console.log("favorites");
          }}
        >
          Go to favorites
        </button>
      </div>
      {authState.id ? ( //ako je ulogovan
        <button
          onClick={() => {
            dispatch(authSlice.actions.logout()); // pozovomo action(funk) "logout "
          }}
        >
          Logout
        </button>
      ) : (
        // ako nije ulogovan
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      )}
      {quote.map((quote, index) => {
        return (
          <div className="card" key={index}>
            <h3>
              <i>{quote.quoteText}</i>
            </h3>
            <p>{quote.quoteAuthor}</p>

            <div className="goto">
              <button
                onClick={() => {
                  goTo(quote._id);
                  console.log(quote._id, "-----");
                }}
              >
                Details
              </button>

              <button
                onClick={() => {
                  navigate("/edit");
                }}
              >
                Edit
              </button>

              <button
                onClick={() => {
                  dispatch(quoteSlice.actions.setFavorite(quote)); //ovo sto je u zagradu funkcije je payload(podatak)
                  console.log("add to favorites");
                }}
              >
                Favorite
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default All;
