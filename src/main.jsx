import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CardContextProvider } from "./context/CardContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CardContextProvider>
      <App />
    </CardContextProvider>
  </React.StrictMode>
);
