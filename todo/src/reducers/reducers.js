import { COMPLETED, ADD_NEW } from "../actions/action";

const initialState = {
  todos: [
    {
      value: "word",
      completed: false
    },
    {
      value: "up",
      completed: true
    }
  ]
};

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
        completed: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
