import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div className = "Jumbotron">
      
      {children}
    </div>
  );
}

export default Jumbotron;
