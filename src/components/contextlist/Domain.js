import React from "react";

const Domain = ({ domain, view }) => {
  return (
    <div
      className={
        view === "grid" ? "grid-domain-container" : "list-domain-container"
      }
    >
      <div className="items">
        <h4>{`Domain is ${domain[1]}`}</h4>
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

export default Domain;
