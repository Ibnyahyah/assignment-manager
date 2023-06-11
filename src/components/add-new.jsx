import { useState } from "react";
import { BASE_URL } from "../context/userContext";

export default function AddNew({ addNewToggler }) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    year: "",
    department: [],
  });
  const [departmentInString, setDepartmentInString] = useState("");

  async function createAssignmentHandler(e) {
    e.preventDefault();
    setIsLoading(true);
    departmentInString
      .trim()
      .split(",")
      .forEach((dp) => {
        formData.department.push(dp);
      });
    try {
      const request = await fetch(`${BASE_URL}/assignment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer",
        },
        body: JSON.stringify(formData),
      });
      const response = await request.json();
      alert(response.message);
      addNewToggler();
      reset();
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  }

  function reset() {
    setFormData({
      title: "",
      description: "",
      year: "",
      department: [],
    });
    setDepartmentInString("");
  }
  return (
    <div className="backDrop d-flex justify-content-center align-items-center">
      <div className="inner">
        <h2 className="mb-3 text-center">Add New Assignment</h2>
        <form onSubmit={createAssignmentHandler}>
          <label htmlFor="">Assignment Header</label>
          <input
            type="text"
            placeholder="Assignment Header"
            onKeyUp={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <label htmlFor="">Departments</label>
          <input
            type="text"
            placeholder="Department (BIO22, COM20, ENG)"
            onKeyUp={(e) => setDepartmentInString(e.target.value)}
          />
          <label htmlFor="">Year</label>
          <select
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
          >
            <option value="">Select Year</option>
            {["ND Year 1", "ND Year 2", "HND Year 1", "HND Year 2"].map(
              (value, i) => (
                <option value={value} key={i}>
                  {value}
                </option>
              )
            )}
          </select>
          <label htmlFor="">Assignment Description</label>
          <textarea
            placeholder="Assignment Description"
            onKeyUp={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          ></textarea>
          <div className="d-flex justify-content-between">
            <button
              className="btn cancel"
              type="button"
              title="Close Modal"
              onClick={addNewToggler}
              disabled={isLoading}
            >
              Cancel
            </button>
            <button className="btn" title="Submit Assignment">
              {isLoading ? "Uploading..." : "Upload Assignment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
