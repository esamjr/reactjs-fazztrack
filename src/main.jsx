import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./pages/home";
// import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
