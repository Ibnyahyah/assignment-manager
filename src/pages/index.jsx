import { AssignmentsCard } from "../components/assignment_card";
import CenterCards from "../components/center_cards";
import Navbar from "../components/navbar";
import SideBar from "../components/sideBar/sideBar";
import { TopStudents } from "../components/top_students";

export function HomePage() {
  return (
    <div className="d-flex main_container">
      <SideBar />
      <div className="main_body">
        <Navbar />
        <div className="d-flex">
          <div className="center_container p-1">
            <CenterCards />
            <TopStudents />
          </div>
          <div className="assignment_container p-1">
            <div>
              <AssignmentsCard />
              <AssignmentsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
