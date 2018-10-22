import React, { Component } from "react";
import db from "./fire.js";

class App extends Component {
  state = {
    counter: "loading...",
    objectArray: [
      { firstName: "john", lastName: "doe", age: 46 },
      { firstName: "bebop", lastName: "robotron", age: 6 }
    ]
  };

  componentDidMount() {
    db.database()
      .ref("/counter")
      .on("value", snapshot => {
        this.setState({ counter: snapshot.val() });
      });
  }

  updateCounter = event => {
    event.preventDefault();
    db.database()
      .ref("/counter")
      .set(this.state.counter + 1);
  };

  clearCounter = event => {
    event.preventDefault();
    db.database()
      .ref("/counter")
      .set(0);
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

        {this.state.objectArray.map(arrayItem => (
          <p>
            {arrayItem.firstName} {arrayItem.lastName}, age:
            {arrayItem.age}.
          </p>
        ))}
      </div>
    );
  }
}

export default App;
