import React, { useState } from "react";

const Problem1 = () => {
  const [inputValue, setInputValue] = useState([]);
  const [show, setShow] = useState("all");

  const handleClick = (val) => {
    setShow(val);
  };

  const handleSubmittedValue = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const status = form.status.value;

    const submitValue = { name, status };
    setInputValue([...inputValue, submitValue]);

    form.reset();
  };

  const sortedInputValue = inputValue.slice().sort((a, b) => {
    // Custom sorting logic
    const aStatus = a.status.toLowerCase();
    const bStatus = b.status.toLowerCase();
    console.log({ aStatus, bStatus });

    if (aStatus === "active" && bStatus !== "active") {
      return -1; // "active" comes first
    } else if (aStatus !== "active" && bStatus === "active") {
      return 1; // "active" comes first
    } else if (aStatus === "completed" && bStatus !== "completed") {
      return -1; // "completed" comes next
    } else if (aStatus !== "completed" && bStatus === "completed") {
      return 1; // "completed" comes next
    } else {
      return 0; // Other statuses remain in the same order
    }
  });

  //   filtering
  const filteredInputValue =
    show === "all"
      ? sortedInputValue
      : sortedInputValue.filter((item) => item.status.toLowerCase() === show);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmittedValue}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                name="status"
                className="form-control"
                placeholder="Status"
                required
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredInputValue.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
