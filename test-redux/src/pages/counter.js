import React from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { countSlice } from "../store/counterSlice";
import { authSlice } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const Counter = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const countState = useSelector((state) => state.counter);
  const saveNum = useSelector((state) => state.counter.num);
  const navigate = useNavigate();



  return (
    <div>
      {authState.id ? ( //ako je ulogovan
        <button
          className="btn3"
          onClick={() => {
            dispatch(authSlice.actions.logout());
          }}
        >
          Logout
        </button>
      ) : (
        // ako nije ulogovan
        <button
          className="btn3"
          onClick={() => {
            navigate("/");
          }}
        >
          Login
        </button>
      )}
      <div className="tespihBox">
        <div className="num">{countState.num} </div>
        <button
          className="btn1"
          onClick={() => {
            dispatch(countSlice.actions.povecajNum());
            console.log("povecan je broj");
          }}
        >
          +
        </button>
        <button
          className="btn1"
          onClick={() => {
            dispatch(countSlice.actions.resetNum());
            console.log("broj vracen na 0");
          }}
        >
          restart
        </button>
        <button
          className="btn1"
          onClick={() => {
            if (authState.id) {
              console.log(
                "Ime:",
                authState.fullName,
                "|",
                " Email:",
                authState.email,
                "|",
                "Datum:",
                new Date().toLocaleDateString(),
                "|",
                saveNum
              );


            }
          }}
        >
          save
        </button>
      </div>
      
    </div>
  );
};

export default Counter;
