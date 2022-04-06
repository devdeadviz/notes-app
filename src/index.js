import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, NoteProvider } from "./contexts";

// Call make Server
makeServer();

const container = document.getElementById("root");

//Create a root
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <NoteProvider>
          <App />
        </NoteProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
