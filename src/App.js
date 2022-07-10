import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import PrivatePage from "./pages/PrivatePage/PrivatePage";
import {
  loadFromSessionStorage,
  saveToSessionStorage,
} from "./utils/sessionStorage";

if (loadFromSessionStorage("USER") === undefined) {
  saveToSessionStorage("USER", []);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h1>Phonebook App</h1>

        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts/:userId" element={<PrivatePage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
