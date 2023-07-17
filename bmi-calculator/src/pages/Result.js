import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Result() {
  // const [description, setDescription] = useState("");
  // const location = useLocation();
  // const [bmi, setBmi] = useState("");
  // const { weight, height } = location.state || {};

  // if (!weight || !height) {
  //   // Proverite da li postoje validne vrednosti težine i visine
  //   return <div>Podaci nisu dostupni.</div>;
  // }

  // const bmii = weight / ((height / 100) * (height / 100));
  // setBmi(bmii);

  // if (bmi < 25) {
  //   setDescription("You are underweight");
  // }
  // if (bmi >= 25 && bmi < 30) {
  //   setDescription("You are a healthy weight");
  // } else {
  //   setDescription("You are overweight");
  // }
  // console.log(bmii);

  return (
    <div className="secondPage">
      <div className="resultCard">
        <p>BMI Score:</p>
        <div className="result">
          <h1>28,2</h1>
          <h4>Normal</h4>
        </div>
      </div>
    </div>
  );
}

export default Result;
