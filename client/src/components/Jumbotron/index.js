import React from "react";


function Jumbotron({ children }) {
  return (
    <div
      style={{
        background:"#2d4552" , height: 100, clear: "both", paddingTop: 10, textAlign: "center"}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
