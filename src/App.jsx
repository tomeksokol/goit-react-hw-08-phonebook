import './App.css';
import Form from './components/form/Form';
import React, { Component } from "react";

class App extends Component {

  state = {
    contacts: [],
    name: "",
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <Form {...this.state} />
      </header>
    </div>
  );
  }
}

export default App;
