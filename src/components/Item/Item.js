import React, { useRef, useState } from "react";
import { render } from "react-dom";
import Grid from "@material-ui/core/Grid";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "./Item.css";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";

function Item(props) {
  return (
    <Grid container className={props.type} justify="space-around">
      <Grid item md={2}>
        <div className="item__date">{props.calendarDate}</div>
      </Grid>
      <Grid item md={6}>
        <div className="item__description">{props.description}</div>
      </Grid>
      <Grid item md={4}>
        <div className="right">
          <div className="item__value">{props.value}</div>
          <div className="item__delete">
            <button className="item__delete--btn" onClick={props.handleRemove}>
              <HighlightOffIcon style={{ fontSize: 14 }}></HighlightOffIcon>
            </button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Item;
