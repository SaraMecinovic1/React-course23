import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({ pushMoney: "", all: 0 });

  const addMoney = () => {
    const toNum = parseFloat(state.pushMoney);
    if (!isNaN(toNum)) {
      setState({ all: state.all + toNum, pushMoney: "" });
    }
  };
  const removeMoney = () => {
    const toNum = parseFloat(state.pushMoney);
    if (!isNaN(toNum)) {
      setState({ all: state.all - toNum, pushMoney: "" });
    }
  };

  return (
    <div className="App">
      <div className="card">
        <h2>My Wallet</h2>
        <div className="money">${state.all}</div>
        <input
          className="inputBox"
          placeholder="Ubacite vas novac"
          type="text"
          value={state.pushMoney}
          onChange={(event) => {
            const newMoney = event.target.value;
            setState({...state, pushMoney: +newMoney });
            console.log(state.pushMoney);
          }}
        ></input>
        <div className="butt2">
          <button
            className="butt"
            onClick={() => {
              addMoney();
              console.log("radi");
            }}
          >
            +
          </button>
          <button
            className="butt1"
            onClick={() => {
              removeMoney();
              console.log(removeMoney(), "radi2");
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
