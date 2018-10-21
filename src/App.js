import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    counter: 0
  };

  updateCounter = event => {
    event.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="App">
        <p>Counter: {counter}.</p>

        <form onSubmit={this.updateCounter}>
          <button type="submit">Add 1!</button>
        </form>
      </div>
    );
  }
}

export default App;
