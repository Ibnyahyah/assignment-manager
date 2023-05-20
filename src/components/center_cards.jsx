export default function CenterCards() {
  return (
    <div className="d-flex mt-3 gap-1">
      {[
        {
          title: "Total Assignments",
          total: "20",
        },
        {
          title: "Available Assignments",
          total: "20",
        },
        {
          title: "Completed Assignments",
          total: "20",
        },
      ].map((data, index) => (
        <div className="col-sm-4 col-md-4" key={index}>
          <div className="card">
            <p>{data.title}</p>
            <h1>
              <b>{data.total}</b>
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}
