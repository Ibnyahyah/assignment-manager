import { useContext } from "react";
import { userContext } from "../context/userContext";
import CustomCard from "./custom_card";

export function TopStudents() {
  const { users } = useContext(userContext);
  return (
    <div className="col-12 p-2 mt-3">
      <div className="card w-100">
        <h1>Top Students</h1>
        <h2 className="mt-1">List of the students with the highest scores</h2>
        <div className="row justify-content-between">
          {users.slice(0, 12).map((data, index) => (
            <div className="col-sm-6" key={index}>
              <CustomCard
                data={{
                  image: "./assets/images/avatar.png",
                  name: data.fullName,
                  subname: data.matricNumber,
                }}
                circle={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
