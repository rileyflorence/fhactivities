import React, { Component } from "react";
import db from "./fire.js";
import SummaryCard from "./SummaryCard.js";

class App extends Component {
  state = {
    counter: "loading...",
    meSummaries: [],
    meSummariesPush: [
      {
        title: "What's in a Name",
        description:
          "Your name is how the world knows you, how much do you know about your name?",
        ref: 46,
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Alaskan_Malamute.jpg/300px-Alaskan_Malamute.jpg"
      },
      {
        title: "What's in a Name2",
        description:
          "Your name is how the world knows you, how much do you know about your name?",
        ref: 46,
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Alaskan_Malamute.jpg/300px-Alaskan_Malamute.jpg"
      }
    ]
  };

  componentDidMount() {
    const counterRef = db.database().ref("/counter");
    counterRef.on("value", snapshot => {
      this.setState({ counter: snapshot.val() });
    });

    const meSummariesRef = db.database().ref("/meSummaries");
    meSummariesRef.set(this.state.meSummariesPush);
    meSummariesRef.on("value", snapshot => {
      this.setState({ meSummaries: snapshot.val() });
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
    const { counter, meSummaries } = this.state;
    return (
      <div className="App">
        <h1>Counter: {counter}</h1>
        <button type="submit" onClick={this.updateCounter}>
          Add 1!
        </button>
        <button type="submit" onClick={this.clearCounter}>
          Clear
        </button>
        <div
          style={{
            display: "flex",
            flexFlow: "wrap row",
            justifyContent: "center"
          }}
        >
          {meSummaries.map(arrayItem => (
            <div style={{ width: "350px", margin: "10px" }}>
              <SummaryCard
                title={arrayItem.title}
                summary={arrayItem.description}
                thumbnail={arrayItem.thumbnail}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
