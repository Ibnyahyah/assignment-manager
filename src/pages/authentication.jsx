import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../context/userContext";

export function Authentication() {
  const { authentication } = useContext(userContext);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({
    email: "",
    fullName: "",
    matricNumber: "",
    role: "",
    password: "",
    confirmPassword: "",
    department: "",
  });
  function toggleLoginInput() {
    setLogin((prev) => !prev);
  }

  const auth = (e) => {
    e.preventDefault();
    authentication(user, login ? "login" : "register");
  };
  return (
    <div className="auth_container">
      <form onSubmit={auth}>
        <header>
          <img src="" alt="" />
          <h3>{login ? "Login" : "Register"}</h3>
          <p className="mt-2">
            {login ? "Welcome back fella😊." : "It's nice to have you here😊."}
          </p>
        </header>
        {!login && (
          <>
            <input
              type="text"
              placeholder="Enter your full name"
              name="name"
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Enter your matric number"
              name="matric"
              onChange={(e) =>
                setUser({ ...user, matricNumber: e.target.value })
              }
            />
          </>
        )}
        <input
          type="email"
          placeholder="Enter your email address"
          name="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        {!login && (
          <div className="w-100 d-flex justify-content-between gap-2">
            <select
              name=""
              id=""
              onChange={(e) => setUser({ ...user, role: e.target.value })}
            >
              <option value="">Tell us who you are.</option>
              <option value="Student">I am Student</option>
              <option value="Lecturer">I am Lecturer</option>
            </select>
            <select
              name=""
              id=""
              onChange={(e) => setUser({ ...user, department: e.target.value })}
            >
              <option value="">Select your department</option>
              <option value="BIO">BIO</option>
              <option value="CM">CM</option>
            </select>
          </div>
        )}
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        {!login && (
          <input
            type="password"
            placeholder="Enter your password again"
            name="password-again"
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
          />
        )}
        <button className="btn">{login ? "Login" : "Register"}</button>
        {login ? (
          <p className="mt-3">
            Don't have an account?{" "}
            <span onClick={toggleLoginInput}>
              <b>Register</b>
            </span>
          </p>
        ) : (
          <p className="mt-3">
            Already have an account?{" "}
            <span onClick={toggleLoginInput}>
              <b>Login</b>
            </span>
          </p>
        )}
        {login && (
          <Link>
            <b>Forget Password?</b>
          </Link>
        )}
      </form>
    </div>
  );
}
