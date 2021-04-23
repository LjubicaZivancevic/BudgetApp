import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "../Button/Button";
import Item from "../Item/Item";
import Nav from "../Navigation/Nav";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      desc: "some reason 5",
      val: 21100,
    },
    {
      id: 2,
      desc: "some reason 7",
      val: 2100,
    },
    {
      id: 3,
      desc: "some reason 9",
      val: 1200,
    },
  ]);
  const [income, setIncome] = useState([
    {
      id: 1,
      desc: "some reason",
      val: 200,
    },
  ]);

  const [text, setText] = useState("");
  const textInput = useRef(null);
  const valueInput = useRef(null);

  const getData = (val) => {
    setText(val.target.value);
  };
  function addExpense() {
    const ex = {
      desc: textInput.current.value,
      val: valueInput.current.value,
    };

    setExpenses([...expenses, ex]);
    textInput.current.value = "";
    valueInput.current.value = "";
    console.log(typeof textInput.current.value);
  }

  function addIncome() {
    const inc = {
      desc: textInput.current.value,
      val: valueInput.current.value,
    };
    setIncome([...income, inc]);
    textInput.current.value = "";
    valueInput.current.value = "";
  }

  function sortIncomes() {
    income.sort((a, b) => (a.val > b.val ? 1 : -1));
    console.log(income);
  }
  function readIncomes() {
    income.map((inc, index) => (
      <Item key={index} value={inc.val} description={inc.desc}></Item>
    ));
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p className="Header-text">Current bilans</p>
          <p className="Header-bilans">2000</p>

          <input
            type="text"
            className="form-control"
            name=""
            id="B"
            ref={textInput}
            aria-describedby="helpId"
            placeholder=""
            onChange={(event) => setText(event.target.value)}
          />

          <input
            type="number"
            className="form-control"
            name=""
            id="B"
            ref={valueInput}
            aria-describedby="helpId"
            placeholder=""
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <div className="ui buttons">
          <Button
            className="ui button"
            name="Expence"
            click={addExpense}
          ></Button>
          <Button
            className="ui button"
            name="sort"
            click={sortIncomes}
          ></Button>
          <div className="or"></div>
          <Button
            className="ui positive button"
            name="Income"
            click={addIncome}
          ></Button>
        </div>
      </header>
      <div style={{ height: "500px", display: "flex" }}>
        <div style={{ backgroundColor: "green", height: "100%", width: "50%" }}>
          {expenses.map((exp, index) => (
            <Item key={index} value={exp.val} description={exp.desc}></Item>
          ))}
        </div>
        <div
          style={{ backgroundColor: "red", height: "100%", width: "50%" }}
          onLoad={readIncomes()}
        >
          {income.map((inc, index) => (
            <Item key={index} value={inc.val} description={inc.desc}></Item>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
