import React from "react";
<<<<<<< HEAD
import "./App.css";
=======
import "./style.css";
import PlusImg from "./slika/plus.png";
>>>>>>> 5a2d1ff448185b530af91ad03951719589db020a

// const mockList = ["Buy fruits", "Read a book", "Take a shower"];

class App extends React.Component {
<<<<<<< HEAD
  state = {
    taskName: "",
    todoList: [],
  };

  addNewTodoList = () => {
    const newTodo = this.state.todoList;
    newTodo.push(this.state.taskName);
    this.setState({ taskName: "", todoList: newTodo });
    console.log(newTodo);
  };
=======
  state = { taskName: "", todoList: [] };

  addNewTask() {
    const newToDoList = this.state.todoList;
    newToDoList.push(this.state.taskName);
    this.setState({
      taskName: "",
      todoList: newToDoList,
    });
  }
>>>>>>> 5a2d1ff448185b530af91ad03951719589db020a

  render() {
    return (
      <div className="container">
        <div className="todo__box">
          <div className="title">
            <h2 className="h__todo">Todo App</h2>
          </div>
          <div className="form">
            <input
              id="taskName"
<<<<<<< HEAD
              value={this.state.taskName}
              onChange={(event) => {
                //da nam sacuva svaku promenu u inputu
                const taskNameValue = event.target.value;
                this.setState({ taskName: taskNameValue });
                console.log(taskNameValue);
              }}
            />
            <button
              className="btnn1"
              onClick={() => {
                this.addNewTodoList();
              }}
            >
              +
            </button>
          </div>
          <div id="list" className="d-grid gap-2 col-6 button ">
            {this.state.todoList.map((item, index) => {
              return (
                <button className="list-items" key={index}>
=======
              placeholder="Add your new todo"
              value={this.state.taskName}
              onChange={(event) => {
                const taskNameValue = event.target.value;
                this.setState({ taskName: taskNameValue });
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  this.addNewTask();
                }
              }}
            />
            <button
              id="btnn1"
              className="btnn1"
              onClick={() => this.addNewTask()}
            >
              <img src={PlusImg} className="img" alt="" />
            </button>
          </div>
          <div id="list" className="d-grid gap-2 col-6 button">
            {/* {mockList.map((item) => (
              <p>{item.toUpperCase()}</p>
            ))} */}
            {this.state.todoList.map((item, index) => {
              return (
                <button key={index} className="list-items">
>>>>>>> 5a2d1ff448185b530af91ad03951719589db020a
                  {item}
                </button>
              );
            })}
<<<<<<< HEAD
=======
            {/* <button className="list-items">keyword researching</button> */}
            {/* <button className="list-items">ui ux desing for app</button> */}
>>>>>>> 5a2d1ff448185b530af91ad03951719589db020a
          </div>
          <div className="footerr">
            <p className="p">
              You have{" "}
              <span id="numberOfItems">{this.state.todoList.length}</span>{" "}
              pending tasks
            </p>
            <button
<<<<<<< HEAD
=======
              id="btnn2"
>>>>>>> 5a2d1ff448185b530af91ad03951719589db020a
              className="btnn2"
              onClick={() => {
                this.setState({ taskName: "", todoList: [] });
              }}
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
