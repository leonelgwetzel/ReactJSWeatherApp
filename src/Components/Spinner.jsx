import React from "react";
import "../assets/css/spinner.css";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="lds-facebook">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
