import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// user may modify the html element to render widget in other container
const elementId = 'root';

// user may change the sort value for the default sort on render
const sortBy = 'gold';

ReactDOM.render(<App sortBy={sortBy} />,  document.getElementById(elementId));

// user can use below code for default sort by gold by not passing the sortBy property
// ReactDOM.render(<App />,  document.getElementById(elementId));


