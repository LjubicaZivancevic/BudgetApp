import React from "react";
import "./Item.css";

function Item(props) {
  return (
    <div className="item">
      <div className="item__description">{props.description}</div>
      <div className="right">
        <div className="item__value">{props.value}</div>
      </div>
    </div>
  );
}

export default Item;
