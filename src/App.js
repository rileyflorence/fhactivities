import React, { Component } from "react";
import { db } from "./fire.js";

class App extends Component {
  state = {
    name: "Nuthin yet..."
  };

  componentDidMount() {
    db.doc("courses/online")
      .get()
      .then(doc => this.setState({ name: doc.data().name }));
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default App;
