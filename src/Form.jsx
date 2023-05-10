import React from "react";

function FillForm({ handleFormSubmit }) {
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="name" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="cost" className="form-label">
            Cost
          </label>
          <input type="number" className="form-control" id="cost" />
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </>
  );
}
export default FillForm;
