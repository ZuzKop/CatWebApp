import React from "react";
import TestComponentCSS from "./TestComponent.module.css";

const TestComponent = (props) => {
  return (
    <div className={TestComponentCSS.textDisplay}>
      <h1>Hello, {props.name}!</h1>
    </div>
  );
};

export default TestComponent;
