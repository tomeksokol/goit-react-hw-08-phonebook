import "./App.css";
import Phonebook from "./components/phonebook/Phonebook";
import React, { Component } from "react";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Phonebook />
        </header>
      </div>
    );
  }
}

export default App;
