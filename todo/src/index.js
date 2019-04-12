import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./reducers/reducers";
import TodoList from './components/TodoList'
import { Provider } from "react-redux";

const store = createStore(reducer);

function App() {
    return (
        <div>
            <TodoList />
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
