import { useState } from "react";
import "./App.css";

const App = (props) => {
  const [state, setState] = useState({ counter: 0 });
  return (
    <div className="tespihBox">
      <div className="num"> {state.counter}</div>
      <button
        className="btn1"
        onClick={() => {
          setState({ counter: state.counter + 1 });
        }}
      >
        +
      </button>
      <button
        className="btn1"
        onClick={() => {
          setState({ counter: 0 });
        }}
      >
        restart
      </button>
    </div>
  );
};

export default App