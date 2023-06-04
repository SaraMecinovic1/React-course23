import { useEffect, useState } from "react";

const All = () => {
  const [state, setState] = useState([]);

  useEffect =
    (() => {
      fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
        .then((res) => res.json())
        .then((data) => {
          setState(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    []);
  console.log(state);

  return <div className="all-quotes">AllQuotes</div>;
};
export default All;