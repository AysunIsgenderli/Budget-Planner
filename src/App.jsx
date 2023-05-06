import React from "react";
import { useState } from "react";
export default function createCards(props) {
  const [budget, setBudget] = useState(2000);
  const [expenses, setExpenses] = useState([]);

  function handleFormSubmit(event) {
    event.preventDefault();
    const { name, cost } = event.target.elements;
    const expense = {
      name: name.value,
      cost: Number(cost.value),
    };
    setExpenses((expenses) => [...expenses, expense]);
    name.value = "";
    cost.value = "";
  }
 
  const spentSoFar = expenses.reduce((sum, expense) => sum + expense.cost, 0);
  return (
    <div className="w-75 m-auto">
      <div className="d-flex  justify-content-between container">
        <div className="card w-50 mt-4 bg-secondary-subtle text-secondary">
          <div className="card-body">
            <h5 className="card-title">Budget: </h5>
            <p className="card-text">{budget}$</p>
            <a href="#" className="btn btn-primary">
              Edit
            </a>
          </div>
        </div>
        <div className="card w-50 mt-4 bg-info-subtle text-success">
          <div className="card-body">
            <h5 className="card-title">Remaining: {budget - spentSoFar}$ </h5>
          </div>
        </div>
        <div className="card w-50 mt-4 bg-primary-subtle text-info">
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
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Type to search..."
          />
        </div>
      </form>

      <ul className="list-group">
        {expenses.map((expense) => (
          <li className="list-group-item d-flex justify-content-between align-items-center my-3">
            {expense.name}
            <div>
              <span className="badge bg-primary rounded-pill me-3">
                {expense.cost}
              </span>
              <button className="border-0 bg-white">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="my-5">Add Expense</h2>
      <form onSubmit={handleFormSubmit}>
        <div class="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input type="name" class="form-control" id="name" />
        </div>
        <div class="mb-3">
          <label for="cost" class="form-label">
            Cost
          </label>
          <input type="number" class="form-control" id="cost" />
        </div>

        <button class="btn btn-primary">Add</button>
      </form>
    </div>
  );
}

