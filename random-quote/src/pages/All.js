import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const All = () => {
  const [state, setState] = useState([]);
  console.log(state)
  const navigate = useNavigate();

  const goTo = (props) => {
    navigate(`/details/${props}`);  //gde da me povede i id tog citata
    console.log("radi");
  };

  useEffect(() => {
    fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
      .then((res) => res.json())
      .then((data) => {
        setState(data); //dajemo statu vrednost objekta tj tih citata
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(state , "state");

  return (
    <div className="all-quotes">
      <div>
        {state.map((quote, index) => {
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default All;
