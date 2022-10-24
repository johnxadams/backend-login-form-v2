//libraries
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

// styles
import "./index.css";

// components
import App from "./App";
import MyContextProvider from "./components/MyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </BrowserRouter>
);
