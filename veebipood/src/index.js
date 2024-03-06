import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import "./index.css"; // Ülevalt alla
import App from "./App";

import { BrowserRouter } from "react-router-dom";

// Navigeerimiseks (route-ing)
// 1. installeerima react-router-dom mooduli (teek) node_modules kausta
// 2. impordime sealt kaustast BrowserRouter võimekuse
// 3. index.js failis ümbritseme <App/> tagi BrowserRouteriga
// 4. App.js failis URLi ja HTMLi seoseid

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
