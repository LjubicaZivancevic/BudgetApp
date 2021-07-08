import React, { useRef, useState } from "react";
import Button from "../../components/Button/Button";
import Item from "../../components/Item/Item";
import {Container, Row, Col} from 'react-bootstrap'
import "./Home.css";
function Home() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      desc: "some reason 5",
      date: "20/05/2020.",
      type: "Expense",
      val: 21100,
    },
    {
      id: 2,
      desc: "some reason 2",
      date: "20/05/2020.",
      type: "Expense",
      val: 100,
    },
    {
      id: 3,
      desc: "some reason 5",
      date: "20/05/2020.",
      type: "Expense",
      val: 210,
    },
  ]);
  const [income, setIncome] = useState([
    {
      id: 1,
      date: "21.05.2021.",
      desc: "some reason",
      type: "Income",
      val: 200,
    },
    {
      id: 2,
      date: "21.05.2021.",
      desc: "some reason",
      type: "Income",
      val: 800,
    },
    {
      id: 3,
      date: "21.05.2021.",
      desc: "some reason",
      type: "Income",
      val: 100,
    },
  ]);

  const [text, setText] = useState("");
  const textInput = useRef(null);
  const valueInput = useRef(null);

  const currentDate = () => {
    const dateHelper = new Date();
    return dateHelper.toLocaleDateString("en-GB");
  };

  function addExpense() {
if(textInput.current.value === "" || valueInput.current.value === ""){
  alert("Please fill in all information")
}
else{
  const ex = {
    desc: textInput.current.value,
    val: valueInput.current.value,
    type: "Expense",
    date: currentDate(),
  };

  setExpenses([...expenses, ex]);
  textInput.current.value = "";
  valueInput.current.value = "";
  console.log(typeof textInput.current.value);
}

  
  }

  function addIncome() {
    const inc = {
      desc: textInput.current.value,
      val: valueInput.current.value,
      type: "Income",
      date: currentDate(),
    };
    setIncome([...income, inc]);
    textInput.current.value = "";
    valueInput.current.value = "";
  }

  function sortIncomes() {
    setIncome([...income.sort((a, b) => (a.val < b.val ? 1 : -1))]);
  }

  function remove(id, type) {
    if (type == "Income") {
      setIncome(income.filter((item) => item.id !== id));
    } else {
      setExpenses(expenses.filter((item) => item.id !== id));
    }
  }

  return (
    <div className="App">
      <Container>
  <Row>
    <Col>  
    <p className="Header-text">Current bilans</p>
          <p className="Header-bilans">2000</p>
          </Col>
  </Row>
</Container>
      <header className="flex">
        <div>
        

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
        <div>
          <Button name="Income_button" click={addIncome}></Button>
        </div>
        <div>
          <Button name="Expence_button" click={addExpense}></Button>
        </div>
        <div>
          <Button name="sort" click={sortIncomes}></Button>
        </div>
      </header>

      <div style={{ height: "500px", display: "flex" }}>
        <div style={{ backgroundColor: "green", height: "100%", width: "50%" }}>
          {expenses.map((exp, index) => (
            <Item
              calendarDate={exp.date}
              key={index}
              value={exp.val}
              description={exp.desc}
              type={exp.type}
              handleRemove={() => remove(exp.id, exp.type)}
            ></Item>
          ))}
        </div>
        <div style={{ backgroundColor: "red", height: "100%", width: "50%" }}>
          {income.map((inc, index) => (
            <Item
              calendarDate={inc.date}
              key={index}
              type={inc.type}
              value={inc.val}
              description={inc.desc}
              handleRemove={() => remove(inc.id, inc.type)}
            ></Item>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
