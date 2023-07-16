import React from "react";
import "../App.css";
import Muskarac from "../character-is-man-businessman-stands-looks-forward/217.jpg";
import { Zena } from "../young-woman-standing-white/39538.jpg";
import { Female, Male } from "@mui/icons-material";
import Button from '@mui/material/Button';

function BMI() {
  return (
    <div className="page1">
      <div className="card">
        <div className="personIcon">
          <img src={Muskarac} alt="Moja slika" width={200} height={"85%"}></img>

          <Button sx={{width:250, height:45 , marginTop:3, marginLeft:35,backgroundColor:"rgb(84, 176, 215)" ,"&:hover": {
      backgroundColor: "rgb(50, 120, 160)",
    },}}  variant="contained">Calculate</Button>

        </div>
        <div className="info">
          <div className="gender">
            <h3>Gender:</h3>
            <div className="genders">
              <Female
                sx={{ border: 1, fontSize: 42, color: " rgb(84, 176, 215)" }}
              />
              <Male
                sx={{ border: 1, fontSize: 42, color: " rgb(84, 176, 215)" }}
              />
            </div>
          </div>

          <div className="age">
            <h3>Age:</h3>
            <input type="number"></input>
          </div>

          <div className="age">
            <div className="h33">
              <h3>Height: </h3>
              <h3>cm </h3>
            </div>
            <input type="number"></input>
          </div>


          <div className="age">
            <div className="h33">
              <h3>Weight: </h3>
              <h3>hg </h3>
            </div>
            <input type="number"></input>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default BMI;
