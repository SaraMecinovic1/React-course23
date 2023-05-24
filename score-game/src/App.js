import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    maroco: 0,
    france: 0,
    igrac: "",
    selectedOption: "",
    list1: [],
    list2: [],
    minutes: 0,
    seconds: 0,
    time: "",
  };

  componentDidMount = () => {
    this.stoperica();
  };
  handleSelectChange = (event) => {
    //
    this.setState({ selectedOption: event.target.value });
  };

  addNewResult = () => {
    // const newList = this.state.list;
    // newList.push(this.state.igrac);
    // this.setState({ igrac: "", list: newList, selectedOption: "" });

    if (this.state.selectedOption === "morocco") {
      this.setState({ maroco: this.state.maroco + 1 });
      const newList1 = this.state.list1;
      newList1.push(this.state.igrac + " , " + this.state.minutes);
      this.setState({ igrac: "", list1: newList1, selectedOption: "" });
      console.log(newList1, "1");
    } else {
      this.setState({ france: this.state.france + 1 });
      const newList2 = this.state.list2;
      newList2.push(this.state.igrac + " , " + this.state.minutes);
      this.setState({ igrac: "", list2: newList2, selectedOption: "" });
    }
  };

  stoperica = () => {
    setInterval(() => {
      var minutes = this.state.minutes;
      var seconds = this.state.seconds;
      seconds++;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      var minutesToShow = minutes;
      var secondsToShow = seconds;

      if (seconds < 10) {
        secondsToShow = "0" + secondsToShow;
      }

      if (minutes < 10) {
        minutesToShow = "0" + minutesToShow;
      }

      this.setState({
        minutes: minutes,
        seconds: seconds,
        time: minutesToShow + ":" + secondsToShow,
      });
    }, 1000);
  };

  render() {
    const { selectedOption } = this.state; //
    return (
      <div className="page">
        <div className="time">
          <span id="time"> {this.state.time}</span>
        </div>

        <div className="result" id="average">
          <p>
            Morocco <span id="moroccoScore">{this.state.maroco}</span>
          </p>
          <p>:</p>
          <p>
            <span id="franceScore">{this.state.france}</span> France
          </p>
        </div>

        <div>
          <input
            type="text"
            id="score"
            value={this.state.igrac}
            placeholder="Football player"
            onChange={(event) => {
              const igracValue = event.target.value; //ovde cuvamo vrednost iz inputa
              this.setState({ igrac: igracValue });
              console.log(igracValue);
            }}
          />

          <select
            id="team"
            value={selectedOption}
            onChange={this.handleSelectChange}
          >
            <option value="" disabled selected>
              Select team
            </option>
            <option value="morocco">Morocco</option>
            <option value="France">France</option>
          </select>
        </div>

        <div className="flex">
          <button
            id="addGoal"
            onClick={() => {
              this.addNewResult();
            }}
          >
            Goal!
          </button>
        </div>
        <div className="listOfGoals">
          <div className="list1">
            {this.state.list1.map((item, index) => {
              return (
                <button className="list-items" key={index}>
                  {item}
                </button>
              );
            })}
          </div>

          <div className="list2">
            {this.state.list2.map((item, index) => {
              return (
                <button className="list-items" key={index}>
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
