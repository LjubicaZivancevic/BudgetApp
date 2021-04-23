import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./Button.css";

const click = () => console.log("a");

const Button = (props) => {
  const [text, setText] = useState("");

  return <button className={props.name} onClick={props.click}>{props.name}</button>;
};

export default Button;
