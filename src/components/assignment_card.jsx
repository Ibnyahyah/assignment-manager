import CustomCard from "./custom_card";

export function AssignmentsCard() {
  return (
    <div className="assignment_card mt-3">
      <div className="d-flex  justify-content-between">
        <h1>Assignments</h1>
        <div className="see_more">See all</div>
      </div>
      <div className="row">
        {[1, 2, 3, 4].map((data, index) => (
          <div className="col-sm-12" key={index}>
            <CustomCard
              data={{
                image: "./assets/images/avatar.png",
                name: "CEC 424: Irrigation & Drainage",
                subname: "May 14, 08:30 PM",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
