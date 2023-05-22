import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    on: true,
    off: false,
    text: "Danas vezbam zadatak koji mi je Faris zadao",
  };
  render() {
    return (
      <div className="container">
        <div className="text"> {this.state.text}</div>

        <div className="buttons">
          <button
            className="on"
            onClick={() => {
              {
                this.setState({text: "Danas vezbam zadatak koji mi je Faris zadao"})
              }
            }}
          >
            {this.state.on} ON
          </button>
          <button
            className="off"
            onClick={() => {
              this.setState({ text: "" });
            }}
          >
            {this.state.off} OFF
          </button>
        </div>
      </div>
    );
  }
}

export default App;
