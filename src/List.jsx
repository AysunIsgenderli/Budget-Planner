import React from "react";
function SetListElements({ expenses, deleteItem }) {
   
  return (
    <>
      <ul className="list-group">
        {expenses.map((expense) => (
          <li
            key={expense.name}
            className="list-group-item d-flex justify-content-between align-items-center my-3">
            {expense.name}
            <div>
              <span className="badge bg-primary rounded-pill me-3">
                {expense.cost}
              </span>
              <button
                onClick={() => deleteItem(expense.id)}
                className="border-0 bg-white">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default SetListElements;
