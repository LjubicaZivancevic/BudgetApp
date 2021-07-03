import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button className={props.name} onClick={props.click}>
      {props.name}
    </button>
  );
};

export default Button;
