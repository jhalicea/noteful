import React from "react";
import ReactDOM from "react-dom";
//REMEMBER TO INSTALL REACT ROUTER: npm install react-router-dom
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
