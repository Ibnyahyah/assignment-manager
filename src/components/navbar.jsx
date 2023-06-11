// import SearchIcon from ''

import { useContext } from "react";
import { userContext } from "../context/userContext";

export default function Navbar() {
  const { user } = useContext(userContext);
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
            <li>{user?.fullName}</li>
            <li>{user?.role}</li>
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
