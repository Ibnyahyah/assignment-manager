// import SearchIcon from ''

export default function Navbar() {
  return (
    <nav className="d-flex justify-content-between">
      <form>
        <img src="./assets/icons/search_icon.png" alt="" />
        <input type="text" placeholder="Search or type" />
      </form>

      <div className="d-flex align-items-center justify-content-between">
        <Badge imgURL={"message_icon.png"} />
        <Badge imgURL={"notification_icon.png"} />
        <div className="user_info d-flex align-items-center">
          <div className="avatar">
            <img
              src="./assets/images/avatar.png"
              className="rounded-full"
              alt=""
            />
          </div>
          <ul>
            <li>Abubakar Qoreebullah</li>
            <li>Student</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Badge({ imgURL }) {
  return (
    <div className="badge">
      <img src={`./assets/icons/${imgURL}`} alt="" />
      <div></div>
    </div>
  );
}
