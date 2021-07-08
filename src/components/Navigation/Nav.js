import React from "react";
import {
  Link
} from "react-router-dom";
import classes from "./Nav.css"
export default function Navigation() {

  return (
    <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
  </>
  );
}
