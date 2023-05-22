import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    counter: 0,
  };
  render() {
    return (
      <div className="tespihBox">
        <div className="num"> {this.state.counter}</div>
        <button
          className="btn1"
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          +
        </button>
        <button
          className="btn1"
          onClick={() => {
            this.setState({ counter: 0 });
          }}
        >
          restart
        </button>
      </div>
    );
  }
}

export default App;
