import React from "react";
import "./App.css";

// const mockList = ["Buy fruits", "Read a book", "Take a shower"];

class App extends React.Component {
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
                  {item}
                </button>
              );
            })}
          </div>
          <div className="footerr">
            <p className="p">
              You have{" "}
              <span id="numberOfItems">{this.state.todoList.length}</span>{" "}
              pending tasks
            </p>
            <button
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
