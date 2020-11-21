import React from "react";

const ToDo = () => {
  return (
    <div className="ToDo">
      <li className="ToDo-Item">Heyyyy</li>
      <button className="complete-button">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-button">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default ToDo;
