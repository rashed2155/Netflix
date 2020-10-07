import React from "react";

import "./App.css";

function App(props) {
  return (
    <div className="cards">
        <div className="card">
          <img src={props.img} />
          <div>
            <span>{props.span}</span>
          </div>
          <h2>{props.name}</h2>
          <button><a href={props.link}>Watch Now</a></button>
        </div>
    </div>
  );
}

export default App;
