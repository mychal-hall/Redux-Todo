// Importing from action.js
import { COMPLETED, ADD_NEW } from "../actions/action";

// Setting the initial state, which is in the store for me to access through todolist.
const initialState = {
  todos: [
    {
      value: "Example task - Click to complete",
      completed: false
    }
  ]
};

// building the reducer. which will handle most of the work throughout the app. could also build
// a reducer combiner to handle this if they get unwieldy
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW:
      const newTodo = {
        value: action.payload,
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          action.payload === index
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    default:
      return state;
  }
}

export default reducer;
