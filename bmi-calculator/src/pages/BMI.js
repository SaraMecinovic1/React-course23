import React from "react";
import "../App.css";
import Muskarac from "../muskarac/217.jpg";
import { Female, Male } from "@mui/icons-material";
import girl from "../zena/39538.jpg";
import Button from "@mui/material/Button";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

function BMI() {
  const [selectedGender, setSelectedGender] = useState("");
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [description, setDescription] = useState("");

  const calculateBMI = (event) => {
    // if (bmi < 25) {
    //   setDescription("You are underweight");
    // }
    // if (bmi >= 25 && bmi < 30) {
    //   setDescription("You are a healthy weight");
    // } else {
    //   setDescription("You are overweight");
    // }

    if (weight === 0 || weight === 0 || age === 0) {
      alert("Please enter valid weight and weight ");
      return;
    }
    // } else {
    //   const bmi = weight / ((height / 100) * (height / 100));
    //   setBmi(bmi);
    // }
    // console.log(bmi);
    // console.log(description);
  };
  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div className="page1">
      <div className="card">
        <div className="firstPart">
          <div className="personIcon">
            {/* <img src={Muskarac} alt="Moja slika" width={200} height={"83%"}></img> */}
            {selectedGender === "female" && (
              <img
                className="zena"
                src={girl}
                alt="Moja slika"
                width={200}
                height={"77%"}></img>
            )}
            {selectedGender === "male" && (
              <img
                src={Muskarac}
                alt="Moja slika"
                width={200}
                height={"83%"}></img>
            )}
          </div>
          <div className="info">
            <div className="gender">
              <h3>Gender:</h3>
              <div className="genders">
                <IconButton
                  id="girl"
                  onClick={() => handleGenderClick("female")}
                  sx={{
                    borderRadius: 0,
                    border: 1,
                    fontSize: 0,
                    marginBottom: 10,

                    color:
                      selectedGender === "female"
                        ? "rgb(84, 176, 215)"
                        : "rgb(84, 176, 215)",
                  }}>
                  <Female sx={{ fontSize: 42 }} />
                </IconButton>

                <IconButton
                  id="boy"
                  onClick={() => handleGenderClick("male")}
                  sx={{
                    borderRadius: 0,
                    border: 1,
                    fontSize: 0,
                    marginBottom: 10,

                    color:
                      selectedGender === "female"
                        ? "rgb(84, 176, 215)"
                        : "rgb(84, 176, 215)",
                  }}>
                  <Male sx={{ fontSize: 42 }} />
                </IconButton>
              </div>
            </div>

            <div className="age">
              <h3>Age:</h3>
              <input
                value={age}
                onChange={(event) => {
                  setAge(event.target.value);
                }}
                type="number"></input>
            </div>

            <div className="age">
              <div className="h33">
                <h3>Height: </h3>
                <h3>cm </h3>
              </div>
              <input
                value={height}
                onChange={(event) => {
                  setHeight(event.target.value);
                }}
                type="number"
              />
            </div>

            <div className="age">
              <div className="h33">
                <h3>Weight: </h3>
                <h3>hg </h3>
              </div>
              <input
                value={weight}
                onChange={(event) => {
                  setWeight(event.target.value);
                }}
                type="number"
              />
            </div>
          </div>
        </div>

        <div className="secondPart">
          {/* <Button
            sx={{
              width: 250,
              height: 45,
              // marginTop: 3,
              // marginLeft: 35,
              backgroundColor: "rgb(84, 176, 215)",
              "&:hover": {
                backgroundColor: "rgb(50, 120, 160)",
              },
            }}
            onClick={() => calculateBMI()}
            variant="contained">
            <Link
              to={{
                pathname: "/result",
                state: { weight, height },
              }}>
              Calculate
            </Link>
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default BMI;
