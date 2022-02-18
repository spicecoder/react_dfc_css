import React from "react";

const Flow = ({ flow, view }) => {
  return (
    <div
      className={
        view === "grid" ? "grid-flow-container" : "list-flow-container"
      }
    >
      <div className="items">
        <h4>{`Flow is ${flow[1]}`}</h4>
        <div className="button-container">
          <button>C</button>
          <button>D</button>
          <button>E</button>
          <button>F</button>
        </div>
      </div>
    </div>
  );
};

export default Flow;
