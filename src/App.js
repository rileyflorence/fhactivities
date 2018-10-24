import React, { Component } from "react";
import { db } from "./fire.js";

class App extends Component {
  state = {
<<<<<<< HEAD
    name: "Nuthin yet..."
  };

  componentDidMount() {
    db.doc("courses/online")
      .get()
      .then(doc => this.setState({ name: doc.data().name }));
  }

=======
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

>>>>>>> parent of 31b6d52... Made an array of objects, mapped over it. It's dope.
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <h1>{this.state.name}</h1>
=======
        <h1>Counter: {counter}</h1>

        <button type="submit" onClick={this.updateCounter}>
          Add 1!
        </button>
        <button type="submit" onClick={this.clearCounter}>
          Clear
        </button>
>>>>>>> parent of 31b6d52... Made an array of objects, mapped over it. It's dope.
      </div>
    );
  }
}

export default App;
