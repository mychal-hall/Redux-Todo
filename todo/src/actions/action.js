export const COMPLETED = "COMPLETED";
export const ADD_NEW = "ADD_NEW";

export const completed = flag => {
  return {
    type: COMPLETED,
    payload: flag
  };
};

export const addNew = newTodo => {
  return {
    type: ADD_NEW,
    payload: newTodo
  }
}