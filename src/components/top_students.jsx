import CustomCard from "./custom_card";

export function TopStudents() {
  return (
    <div className="col-12 p-2 mt-3">
      <div className="card w-100">
        <h1>Top Students</h1>
        <h2 className="mt-1">List of the students with the highest scores</h2>
        <div className="row justify-content-between">
          {[1, 2, 4, 4, 5, 6, 7, 8, 9, 0, 11, 12].map((data, index) => (
            <div className="col-sm-6" key={index}>
              <CustomCard
                data={{
                  image: "./assets/images/avatar.png",
                  name: "Abubakar Qoreebullah",
                  subname: "HND/21/CEC/FT/1000",
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
