import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const All = () => {
  const [state, setState] = useState([]);
  const navigate = useNavigate;

const goTo=(props)=>{
  navigate("/", + props , "")
}

  useEffect(() => {
    fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(state);

  return (
    <div className="all-quotes">
      <div>
        {state.map((quote, index) => {
          return (
           <div className="card"> 
            
              <h3>
               
                <i>{quote.quoteText}</i>
              </h3>
            
            <p>{quote.quoteAuthor}</p>
            <p>{quote.quoteSource}</p>
            
              <div className="goto">
                <button
                  onClick={() => {
                   goTo(quote._id)
                   console.log(quote._id , "-----")
                  }}
                >
                  Details
                </button>

                <button
                  onClick={() => {
                    // navigate("/details/qoute_id");
                    console.log("likes");
                  }}
                >
                  Likes
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
