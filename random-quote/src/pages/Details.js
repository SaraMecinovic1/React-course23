import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";

const Details = () => {
  const [state, setState] = useState([]);
  const params = useParams;

  const oneQuote = () => {
    fetch("https://js-course-server.onrender.com/quotes/get-quote" + params.id)
      .then((data) => {
        data.json();
      })
      .then((data) => {
        setState(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    oneQuote();
  }, []);

  const giveLike = () => {
    fetch("https://js-course-server.onrender.com/quotes/like" + params.id, {
      method: "PATCH",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpZCI6IjYzZDQyMTM5OWZhZjUyMDAzNDFmYzE1NSIsImZ1bGxOYW1lIjoiVGVzdCIsImlzQWRtaW4iOmZhbHNlLCJpc0d1ZXN0IjpmYWxzZSwiaWF0IjoxNjg1OTg3NjM0LCJleHAiOjE3MTc1MjM2MzR9.oiaPjkSZC3YE9mIzguobRvD89233KTyaknavqDbn85A",
      },
    })
      .then((data) => data.json)
      .then((data) => oneQuote())
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

        <div className="goto">
          <button
            onClick={() => {
              giveLike();
              console.log("likes");
            }}
          >
            Likes
          </button>
        </div>
      </div>
      );
    </div>
  );
};
export default Details;
