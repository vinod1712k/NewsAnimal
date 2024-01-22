import React from "react";

const Spinner = () => {
  return (
    <div className="text-center">
      <div
        className="spinner-grow"
        style={{ width: "3rem", height: "3rem" }}
        role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
};

export default Spinner;
