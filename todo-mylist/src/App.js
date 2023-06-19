import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState({ input: "", listItem: [] });
  const addItem = () => {
    const newToDoList= state.listItem;
    newToDoList.push( state.input)
    setState({input: "", listItem: newToDoList})
  };
  return (
    <div>
      <div className="card">
        <div className="todo">
          <input
            value={state.input}
            placeholder="unesite obavezu"
            onChange={(event) => {
              const newValue = event.target.value;
              setState({ input: newValue });
              console.log(newValue)
            }}
          ></input>
          <button onClick={()=>{
            addItem()
            console.log("radi")
          }}>+</button>
        </div>
        <div className="list">
          {li}
        </div>
      </div>
    </div>
  );
}

export default App;
