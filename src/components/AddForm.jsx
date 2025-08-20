import { useState } from "react";

const AddForm = (props) => {
  const [validated, setValidated] = useState(false);

  const {
    amount,
    description,
    change,
    submit,
    mainCategory,
    expenseCategory,
    date,
    subOptions,
  } = props;

  const options = subOptions.map((option) => (
    <option
      key={option.value}
      value={option.value}
      defaultValue={option.selected}
    >
      {option.value}
    </option>
  ));

  const validation = (event) => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      submit();
      setValidated(false);
    }
  };

  return (
    <div className="col-md-4 card  ">
      <div className="card-body">
        <h5>Add New Transaction</h5>

        {/* form */}

        <form
          className={`needs-validation ${validated ? "was-validated" : null}`}
          noValidate
          onSubmit={validation}
        >
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              name="description"
              type="text"
              className="form-control"
              id="description"
              aria-describedby="emailHelp"
              value={description}
              required
              onChange={({ target }) => change(target)}
            />
            <div className="invalid-feedback">Please add description.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              name="amount"
              type="number"
              className="form-control"
              id="amount"
              min="0"
              step="0.01"
              value={amount}
              required
              onChange={({ target }) => change(target)}
            />{" "}
            <div className="invalid-feedback">Please add amount.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              id="category"
              name="category"
              className="form-select"
              aria-label="Category select"
              value={mainCategory}
              onChange={({ target }) => change(target)}
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
            <select
              id="options"
              name="options"
              className="form-select mt-2"
              aria-label="Options select"
              disabled={mainCategory === "Income" ? true : false}
              value={expenseCategory}
              onChange={({ target }) => change(target)}
            >
              {options}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              name="date"
              type="date"
              className="form-control"
              id="date"
              value={date}
              required
              onChange={({ target }) => change(target)}
            />
            <div className="invalid-feedback">Please add date.</div>
          </div>

          <button type="submit" className="btn btn-success mt-3 w-100">
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
