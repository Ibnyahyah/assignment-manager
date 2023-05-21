import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from "./sideBar.module.css";
import { useContext } from "react";
import { userContext } from "../../context/userContext";

function SideBar() {
  const { logout } = useContext(userContext);
  const navigate = useNavigate();
  const path = useLocation();
  const getActive = (route) => {
    return path.pathname.split("/")[1] === route.split("/")[1];
  };
  return (
    <div className={classes.side_bar}>
      <ul>
        <li>
          <Link className={classes.logo} to="#">
            <img src="./assets/images/logo.png" alt="" />
          </Link>
        </li>
        <li>
          <ul>
            <li>Menu</li>
            {[
              {
                imgURL: "home.png",
                text: "Overview",
                url: "/dashboard",
              },
              {
                imgURL: "book.png",
                text: "Assignments",
                url: "/assignments",
              },
              {
                imgURL: "notification_icon.png",
                text: "Notification",
                url: "/",
              },
            ].map((link, index) => (
              <li
                key={index}
                onClick={() => navigate(link.url)}
                className={getActive(link.url) ? classes.active : ""}
              >
                <img src={`./assets/icons/${link.imgURL}`} alt="" />
                {link.text}
              </li>
            ))}
          </ul>
        </li>
        <div className={classes.line} />
        <li className="mt-5">
          <ul>
            <li>Account</li>
            {[
              {
                imgURL: "message_icon.png",
                text: "Messages",
              },
              {
                imgURL: "setting.png",
                text: "Settings",
              },
            ].map((link, index) => (
              <li key={index}>
                <img src={`./assets/icons/${link.imgURL}`} alt="" />
                {link.text}
              </li>
            ))}
          </ul>
        </li>
        <li>
          <div className={classes.logout_container} onClick={logout}>
            <img src="./assets/icons/books.png" alt="" />
            <p className="text-center">Log out</p>
            <button className="btn">
              <img src="./assets/icons/out_icon.png" alt="" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
