import { useNavigate } from "react-router-dom";
import SideBar from "../components/sideBar/sideBar";
import Navbar from "../components/navbar";
import { userContext } from "../context/userContext";
import { useContext, useState } from "react";
import AddNew from "../components/add-new";

export function Assignments() {
  const { user, assignments } = useContext(userContext);
  const navigate = useNavigate();
  const [isAddNew, setIsAddNew] = useState(false);
  function addNewToggler() {
    setIsAddNew((prev) => !prev);
  }
  return (
    <div className="d-flex main_container">
      <SideBar />
      <div className="main_body">
        <Navbar />
        <div className="assignment__container d-flex justify-content-center px-4">
          <div className="col-12">
            <h1 className="py-4">Assignments</h1>
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="my-2">List</h3>
              {user?.role.toLowerCase() === "lecturer" && (
                <button className="add_new btn" onClick={addNewToggler}>
                  Add new +
                </button>
              )}
            </div>
            <div className="sm-card m-auto w-100 mt-4">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Content</th>
                    <th scope="col">Year</th>
                    <th scope="col">Total Content</th>
                  </tr>
                </thead>
                <tbody>
                  {assignments.map((value, index) => (
                    <tr
                      onClick={() => navigate(`/assignment?id=${value._id}`)}
                      key={index}
                    >
                      <th>{value.title}</th>
                      <td>{value.description.slice(0, 20)}...</td>
                      <td>{value.year}</td>
                      <td>{value.description.length} Contents</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {isAddNew && <AddNew addNewToggler={addNewToggler} />}
    </div>
  );
}
