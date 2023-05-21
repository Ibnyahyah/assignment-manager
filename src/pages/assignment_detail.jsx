import { useState } from "react";
import { AssignmentInfo } from "../components/assignment_info";
import { Submit } from "../components/submit";
import SideBar from "../components/sideBar/sideBar";
import Navbar from "../components/navbar";

export function AssignmentDetails() {
  const [submit, setSubmit] = useState(false);
  const toggleSubmit = () => {
    setSubmit((prev) => !prev);
  };
  return (
    <div className="d-flex main_container">
      <SideBar />
      <div className="main_body">
        <Navbar />
        <div className="assignment__container">
          <div className="d-flex">
            <div className="assignment_info">
              <h1 className="py-3">Full Info</h1>
              <h3 className="my-3">Concrete Mix Design</h3>
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
                  {submit ? <Submit /> : <AssignmentInfo />}
                </div>
              </div>
            </div>
            <div className="assignment_content p-1">
              <div>
                <h1>Assignment Contents</h1>
                <ul className="mt-3">
                  {[1, 2, 3, 4, 5].map((_) => (
                    <li>
                      <p>Mix Proportioning</p>
                      <p>01</p>
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
