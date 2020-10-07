import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import im2 from "./img/im2.jpg";
import im1 from "./img/im1.jpg";
import im3 from "./img/im3.jpg";
import dark from "./img/dark.png";

ReactDOM.render(
  <React.StrictMode>
    <header>
      <a className="header">NETFLIX</a>
    </header>
    <App
      img={im1}
      link="https://drive.google.com/drive/u/2/folders/1jHo5q3bZfqEgUvjiWoWXPsFExLoy_8n8"
      name="Stranger Things Season-1"
      span="A netflix original series"
    />
    <App img={dark} name="Dark Season-1" span="A netflix original series" />
    <App
      img={im2}
      link="https://drive.google.com/drive/u/2/folders/1ECvdrVB7i3gfhhU8D-PGlY5CUSKY3Skq"
      name="Stranger Things Season-2"
      span="A netflix original series"
    />
    <App img={dark} name="Dark Season-1" span="A netflix original series" />
    <App
      img={im3}
      link="https://drive.google.com/drive/u/2/folders/1Uw-vQS5q8QK-Bs7sv4Nm0KfyYm14Adta"
      name="Stranger Things Season-3"
      span="A netflix original series"
    />
    <App img={dark} name="Dark Season-1" span="A netflix original series" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
