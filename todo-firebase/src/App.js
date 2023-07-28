import React from "react";
import "./App.css";
import { useState, useParams } from "react";
import Box from "@mui/material/Box";
import { ListItem, TextField } from "@mui/material";
import { Button } from "@mui/material";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { addToDoItem, deleteQuote, getToDoList } from "./firebase";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const [input, setInput] = useState("");
  const [listItem, setListItem] = useState([]);
  const { t, i18n } = useTranslation();
  // const params = useParams();

  const getAllItems = () => {
    getToDoList().then((data) => {
      setListItem(data);
    });
  };
  useEffect(() => {
    getAllItems();
  });

  const addNewTask = () => {
    const itemData = {
      title: input,
      description: "",
      date: new Date(),
      done: false,
    };
    console.log(itemData);

    addToDoItem(itemData).then(() => {
      getAllItems();
      setInput("");
    });
  };

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("i18nextLng", language);
  };

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <Box
        sx={{
          marginTop: 4,
          width: 430,
          maxHeight: 700,
          backgroundColor: "white",
          borderRadius: 2,
          overflowY: "auto",
          // '&:hover': {
          //   backgroundColor: 'grey',
          //   opacity: [0.9, 0.8, 0.7],
          // },
        }}>
        <TextField
          id="outlined-basic"
          label={t("input")}
          variant="outlined"
          value={input}
          onChange={(event) => {
            const taskNameValue = event.target.value;
            setInput(taskNameValue);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              addNewTask();
            }
          }}
          sx={{
            //  borderColor: "rgb(196, 152, 237)",
            //  color:"rgb(196, 152, 237)",
            width: "300px",
            marginTop: 2,
            marginBottom: 5,
          }}
        />

        <Button
          variant="contained"
          onClick={() => {
            if (input === "") {
              alert("Add your task!");
            } else {
              addNewTask();
            }
          }}
          sx={{
            backgroundColor: "rgb(196, 152, 237)",
            marginTop: 3,
            marginLeft: 2,
            "&:hover": {
              backgroundColor: "rgb(196, 152, 237)", // Promijenite boju na hover
            },
            "&:active": {
              backgroundColor: "rgb(196, 152, 237)", // Promijenite boju na klik
            },
          }}>
          Add
        </Button>

        <div className="list">
          {listItem.map((item, index) => {
            return (
              <button key={index}>
                {item.title}
                {/* <DeleteForeverRoundedIcon onClick={() => deleteQuote(item.id)} /> */}
              </button>
            );
          })}
        </div>

        {/* <p className="p">
          You have <span id="numberOfItems">{listItem.length}</span> pending
          tasks
        </p> */}

        <p className="p">
          {listItem.length === 1
            ? t("numPendingTasks", { num: 1 })
            : t("numPendingTasksMore", { num: listItem.length })}
        </p>

        <div>
          <Button onClick={() => handleChangeLanguage("en")}>English</Button>
          <Button onClick={() => handleChangeLanguage("rs")}>Srpski</Button>
          <Button onClick={() => handleChangeLanguage("rs")}>Srpski-3-1-proba</Button>
        </div>
      </Box>
    </div>
  );
}

export default App;
