import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./pages/index.jsx";
import ContextProvider from "./ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <Router />
    </ContextProvider>
  </React.StrictMode>
);
