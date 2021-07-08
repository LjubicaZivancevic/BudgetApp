import React, { useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Grid } from "@material-ui/core";
import Navigation from "./components/Navigation/Nav";



import Home from "./pages/Home/Home";
function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

const App = () => {
  return (
    <>
     <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
       
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
        
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
 
    </>
  );
};

export default App;



