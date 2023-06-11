import { useContext, useEffect, useState } from "react";
import { AssignmentInfo } from "../components/assignment_info";
import { Submit } from "../components/submit";
import SideBar from "../components/sideBar/sideBar";
import Navbar from "../components/navbar";
import { userContext } from "../context/userContext";
import { useLocation } from "react-router-dom";

export function AssignmentDetails() {
  const { getAssignment } = useContext(userContext);
  const path = useLocation();
  const [submit, setSubmit] = useState(false);
  const [assignment, setAssignment] = useState({});
  const toggleSubmit = () => {
    setSubmit((prev) => !prev);
  };
  const postID = path.search.split("=")[1];
  async function getNow() {
    setAssignment(await getAssignment(postID));
  }
  useEffect(() => {
    getNow();
  }, []);
  return (
    <div className="d-flex main_container">
      <SideBar />
      <div className="main_body">
        <Navbar />
        <div className="assignment__container">
          <div className="d-flex">
            <div className="assignment_info">
              <h1 className="py-3">Full Info</h1>
              <h3 className="my-3">
                {assignment?.assignment?.title.toUpperCase()}
              </h3>
              <div>
                <img src="../assets/images/placeholder.png" alt="" />
                <div className="info my-3">
                  <div className="button_container">
                    <button
                      className={submit ? "" : "active"}
                      onClick={toggleSubmit}
                    >
                      About
                    </button>
                    <button
                      className={submit ? "active" : ""}
                      onClick={toggleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                  {submit ? (
                    <Submit />
                  ) : (
                    <AssignmentInfo assignment={assignment?.assignment} />
                  )}
                </div>
              </div>
            </div>
            <div className="assignment_content p-1">
              <div>
                <h1>Departments</h1>
                <ul className="mt-3">
                  {assignment?.assignment?.department?.map((data, index) => (
                    <li>
                      <p>{data}</p>
                      <p>{index + 1}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
