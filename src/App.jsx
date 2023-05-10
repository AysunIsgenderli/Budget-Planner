import React, { useEffect } from "react";
import { useState } from "react";
import FillForm from "./Form";
import SetListElements from "./List";

export default function createCards(props) {
  const [budget, setBudget] = useState(2000);
  const [expenses, setExpenses] = useState([]);
  const [isEditMode, setEditMode] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();
    const { name, cost } = event.target.elements;
    const expense = {
      name: name.value,
      cost: Number(cost.value),
      id: Math.random() * 200,
    };
    setExpenses((expenses) => [...expenses, expense]);
    name.value = "";
    cost.value = "";
  }

  const deleteItem = (id) => {
    const newList = expenses.filter((expense) => {
      return expense.id !== id;
    });
    setExpenses(newList);
  };
  function checkName() {
    const newList = expenses.filter((expense) => {
      if (expense.name !== expense.name) {
        setExpenses(newList);
      }
    });
  }
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("expenses"));
    if (items) {
      setExpenses(expenses);
    }
  }, []);
  function handleEdit() {
    setEditMode(true);
  }
  function handleSave() {
    setEditMode(false);
  }

  const spentSoFar = expenses.reduce((sum, expense) => sum + expense.cost, 0);
  return (
    <div className="container p-3">
      <h1 className="text-center my-4">My Budget Planner</h1>
      <div className="d-flex  justify-content-evenly w-100 ">
        <div className="card w-25 mt-4 bg-secondary-subtle text-secondary p-2">
          {isEditMode ? (
            <>
              <input
                value={budget}
                onChange={(e) => {
                  setBudget(+e.target.value);
                }}
                className="form-control me-2"
              />
              <button
                onClick={handleSave}
                type="button"
                className="btn btn-primary my-3 w-25">
                Save
              </button>
            </>
          ) : (
            <>
              Budget: ${budget}
              <button
                onClick={handleEdit}
                type="button"
                className="btn btn-primary my-3 w-25">
                Edit
              </button>
            </>
          )}
        </div>
        <div className="card w-25 mt-4 bg-info-subtle text-success">
          <div className="card-body">
            <h5 className="card-title">Remaining: {budget - spentSoFar}$ </h5>
          </div>
        </div>
        <div className="card w-25 mt-4 bg-primary-subtle text-info">
          <div className="card-body">
            <h5 className="card-title">Spent so far: {spentSoFar}$ </h5>
          </div>
        </div>
      </div>
      <h2 className="my-4">Expenses</h2>
      <form>
        <div>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Type to search..."
          />
        </div>
      </form>

      <SetListElements expenses={expenses} deleteItem={deleteItem} />

      <h2 className="my-5">Add Expense</h2>
      <FillForm handleFormSubmit={handleFormSubmit} />
    </div>
  );
}
