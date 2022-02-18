import React from "react";

const Entities = ({ entities, view }) => {
  return (
    <div className={view === "grid" ? "grid-entity-list" : "list-entity-list"}>
      {entities.map((entity, i) => (
        <div className="entity" key={i}>
          <h4>{entity[1]}</h4>
          <div className="entity-button-container">
            <button>C</button>
            <button>D</button>
            <button>E</button>
            <button>F</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Entities;
