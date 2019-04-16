import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// Importing various redux things. Importing components and reducer.

import { createStore } from "redux";
import reducer from "./reducers/reducers";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";

// creating the store from the imported reducer.
const store = createStore(reducer);

// Building the App, which contains my components
function App() {
  return (
    <div className="app">
      <TodoList />
    </div>
  );
}

// Wrapping the App in the Provider, attaching the store to the provider
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
