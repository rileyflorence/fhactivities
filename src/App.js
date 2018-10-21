import React, { Component } from "react";
import db from "./fire.js";

class App extends Component {
  state = {
    counter: 0
  };

  componentDidMount() {
    const counterRef = db.database().ref("/counter");
    counterRef.on("value", snapshot => {
      this.setState({ counter: snapshot.val() });
    });
  }

  updateCounter = event => {
    const counterRef = db.database().ref("/counter");

    event.preventDefault();
    counterRef.set(this.state.counter + 1);
  };

  clearCounter = event => {
    const counterRef = db.database().ref("/counter");

    event.preventDefault();
    counterRef.set(0);
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="App">
        <h1>Counter: {counter}</h1>

        <button type="submit" onClick={this.updateCounter}>
          Add 1!
        </button>
        <button type="submit" onClick={this.clearCounter}>
          Clear
        </button>
      </div>
    );
  }
}

export default App;
