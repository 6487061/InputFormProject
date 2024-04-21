// index.js or App.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import RouteData from "./route/RouteData.jsx";

ReactDOM.render(
  <React.StrictMode>
    <RouteData />
  </React.StrictMode>,
  document.getElementById("root")
);
