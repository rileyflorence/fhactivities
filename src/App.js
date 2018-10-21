import React, { Component } from "react";
import db from "./fire.js";

class App extends Component {
  state = {
    counter: 2
  };

  componentDidMount() {
    const counterRef = db.database().ref("/test");
    counterRef.on("value", snapshot => {
      this.setState({ counter: snapshot.val() });
    });
  }

  updateCounter = event => {
    event.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
    db.database()
      .ref("/test")
      .set(this.state.counter + 1);
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
