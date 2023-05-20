export default function CustomCard({ data, circle = false }) {
  return (
    <div className="sm-card d-flex align-items-center mt-3 justify-content-between">
      <div className="d-flex align-items-center gap-1">
        <div className={`avatar ${circle ? "circle" : "rounded-3"}`}>
          <img src={data.image} alt="" />
        </div>
        <div>
          <h1 className={circle ? "m-0" : "mt-3"}>{data.name}</h1>
          <p>{data.subname}</p>
        </div>
      </div>
      <img src="./assets/icons/more.png" alt="" />
    </div>
  );
}
