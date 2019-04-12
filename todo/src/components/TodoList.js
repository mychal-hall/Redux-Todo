import React, { Component } from "react";
import { connect } from "react-redux";
import { completed, addNew } from "../actions/action";

class TodoList extends Component {
    state = {
        newTodo: ""
    }
  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    this.props.addNew(this.state.newTodo);
  };

  toggleComplete = (e, index) => {
    e.preventDefault();
    this.props.toggleComplete(index);
  };

  render() {
    return (
      <>
        <div>
          {this.props.todos.map((todo, index) => (
            <h3 onClick={e => this.toggleComplete(e, index)} key={index}>
              {todo.value}
              {todo.completed && <i class="fas fa-check" />}
            </h3>
          ))}
        </div>
        <form>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChanges}
            placeholder="Add some thing to do"
          />{" "}
          <button onClick={this.handleClick}>Add Task</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { completed, addNew }
)(TodoList);
