import logo from "./nintendo-2.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResonse: "" };
  }

  testRoute() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.state({ apiResonse: res }))
      .catch((err) => err);
  }

  componentDidMount() {
    this.testRoute();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The Best Game Release Website</h1>
        </header>
        <p className="App-intro">{this.state.apiResonse}</p>
      </div>
    )
  }
}

export default App;
