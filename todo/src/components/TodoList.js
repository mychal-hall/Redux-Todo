import React, { Component } from "react";
import { connect } from "react-redux"; // Importing the connect, which is at the end of my code
import { completed, addNew } from "../actions/action"; // importing function from actions.js to use
import "../index.css";

class TodoList extends Component {
  // building the todolist component
  state = {
    // setting the state for my new todo to an empty string so i can manipulate
    newTodo: "" // through the form before adding it to the state
  };
  handleChanges = e => {
    // Updates the state with the text input on the form
    this.setState({ newTodo: e.target.value });
  };

  handleClick = e => {
    // this will use the imported addNew method to take the newTodo on state
    e.preventDefault(); // and push in into the props.todos which then become the state
    this.props.addNew(this.state.newTodo);
  };

  toggleComplete = (e, index) => {
    // this will allow the user to toggle a check beside completed
    e.preventDefault(); // todos by setting the completed boolean to either true or false
    this.props.completed(index);
  };

  render() {
    return (
      <div className="todo-wrapper">
        <h1 className="header">Things To Do</h1>
        <div className="todo-list">
          {this.props.todos.map((todo, index) => (
            <h3
              className="todo"
              onClick={e => this.toggleComplete(e, index)}
              key={index}
            >
              {todo.value}
              {todo.completed && <i className="fas fa-check" />}
            </h3>
          ))}
        </div>
        <form className="form">
          <input
            className="input"
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChanges}
            placeholder="Add some thing to do"
          />{" "}
          <button className="btn" onClick={this.handleClick}>
            Add Task
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // This wil take the state todos and move them to the props
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { completed, addNew }
)(TodoList);
