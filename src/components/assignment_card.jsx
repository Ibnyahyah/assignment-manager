import { useContext } from "react";
import CustomCard from "./custom_card";
import { userContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export function AssignmentsCard() {
  const { user, assignments } = useContext(userContext);
  const navigate = useNavigate();
  return (
    <div className="assignment_card mt-3">
      <div className="d-flex  justify-content-between">
        <h1>
          {user?.role.toLowerCase() === "lecturer"
            ? "Latest Assignments"
            : "Assignments"}
        </h1>
        <div className="see_more">See all</div>
      </div>
      <div className="row">
        {assignments.map((data, index) => (
          <div className="col-sm-12" key={index}>
            <CustomCard
              data={{
                image: "./assets/images/avatar.png",
                name: data?.title,
                subname: data?.year,
                open: () => {
                  navigate(`/assignment?id=${data._id}`);
                },
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
