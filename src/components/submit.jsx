export function Submit() {
  return (
    <div className="submit mt-2">
      <form>
        <input type="text" placeholder="Type a message..." />
        <div className="d-flex align-items-center gap-3">
          <img
            src="../assets/icons/attachment.png"
            alt=""
            title="Attach a file"
          />
          <img
            src="../assets/icons/send.png"
            alt=""
            title="Submit assignment"
          />
        </div>
      </form>
    </div>
  );
}
