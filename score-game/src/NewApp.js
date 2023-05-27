import React from "react";
import "./App.css";

import { useState } from "react";
import { useEffect } from "react";

const NewApp = () => {
  const [state, setState] = useState({
    maroco: 0,
    france: 0,
    igrac: "",
    selectedOption: "",
    list1: [],
    list2: [],
    minutes: 0,
    seconds: 0,
    time: "",
  });

  
  useEffect(() => {
    stoperica();
  });

   const handleSelectChange = (event) => {
    //
    setState({ selectedOption: event.target.value });
  };

   const addNewResult = () => {
    // const newList = state.list;
    // newList.push(state.igrac);
    // setState({ igrac: "", list: newList, selectedOption: "" });

    if (state.selectedOption === "morocco") {
      setState({ maroco: state.maroco + 1 });
      const newList1 = state.list1;
      newList1.push(state.igrac + " , " + state.minutes);
      setState({ igrac: "", list1: newList1, selectedOption: "" });
      console.log(newList1, "1");
    } else {
      setState({ france: state.france + 1 });
      const newList2 = state.list2;
      newList2.push(state.igrac + " , " + state.minutes + 1);
      setState({ igrac: "", list2: newList2, selectedOption: "" });
    }
  };

   const stoperica = () => {
    setInterval(() => {
      var minutes = state.minutes;
      var seconds = state.seconds;
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

      setState({
        minutes: minutes,
        seconds: seconds,
        time: minutesToShow + ":" + secondsToShow,
      });
    }, 1000);
  };

  
    const { selectedOption } = state; //
    return (
      <div className="page">
        <div className="time">
          <span id="time"> {state.time}</span>
        </div>

        <div className="result" id="average">
          <p>
            Morocco <span id="moroccoScore">{state.maroco}</span>
          </p>
          <p>:</p>
          <p>
            <span id="franceScore">{state.france}</span> France
          </p>
        </div>

        <div>
          <input
            type="text"
            id="score"
            value={state.igrac}
            placeholder="Football player"
            onChange={(event) => {
              const igracValue = event.target.value; //ovde cuvamo vrednost iz inputa
              setState({ igrac: igracValue });
              console.log(igracValue);
            }}
          />

          <select
            id="team"
            value={selectedOption}
            onChange={handleSelectChange}
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
              addNewResult();
            }}
          >
            Goal!
          </button>
        </div>
        <div className="listOfGoals">
          <div className="list1">
            {state.list1.map((item, index) => {
              return (
                <button className="list-items" key={index}>
                  {item}
                </button>
              );
            })}
          </div>

          <div className="list2">
            {state.list2.map((item, index) => {
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
  export default NewApp;


  //kad stavljamo props kao argument