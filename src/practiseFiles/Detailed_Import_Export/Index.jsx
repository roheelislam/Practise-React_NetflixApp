import React from "react";
import ReactDOM from "react-dom";
import youTuber, {favourtthing, name, anotherName} from "./App";

ReactDOM.render(
  <>
    <ol>
      <li>Roheel</li>
      <li>{youTuber}</li>
      <li>{favourtthing}</li>
      <li>{name()}</li>
      <li>{anotherName()}</li>


    </ol>
  </>,
document.getElementById('root'));
