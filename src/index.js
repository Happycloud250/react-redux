import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(
  (
    state = [
      { id: 1, name: "Apple", price: "1.00" },
      { id: 2, name: "Orange", price: "1.50" },
    ],
    action
  ) => {
    if (action.type === "ADD") {
      return [...state, action.item];
    }
    return state;
  }
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
