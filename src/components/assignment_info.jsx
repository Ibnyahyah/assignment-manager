export function AssignmentInfo({ assignment }) {
  return (
    <>
      <header className="d-flex align-items-center justify-content-between mt-3">
        <p className="title">About this assignment</p>
        <div className="d-flex align-items-center">
          <p className="point">80 points required</p>
          <p>{assignment?.year}</p>
        </div>
      </header>
      <div>
        <p>{assignment?.description}</p>
        <p className="mt-3">
          You should upload your solution to google drive and submit the link.
        </p>
      </div>
    </>
  );
}
