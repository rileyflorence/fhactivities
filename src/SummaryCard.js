import React from "react";

const SummaryCard = props => (
  <div
    style={{
      backgroundColor: "#ecebea",
      borderRadius: "4px",
      overflow: "hidden",
      boxShadow: "0px 0px 20px rgba(0, 0, 0, .2), 0px 1px 3px rgba(0, 0, 0, .5)"
    }}
  >
    <img src={props.thumbnail} style={{ width: "100%" }} />
    <div style={{ padding: "10px" }}>
      <h1>{props.title}</h1>
      <p>{props.summary}</p>
    </div>
  </div>
);

export default SummaryCard;
