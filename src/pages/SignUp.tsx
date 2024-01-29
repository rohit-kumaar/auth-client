import axios from "axios";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../config/config";
import { useTitle } from "../hooks/useTitle";
import useTogglePassword from "../hooks/useTogglePassword";
import { ROUTE_PATH } from "../routes/path";

function SignUp() {
  useTitle("Sign Up");
  const {
    togglePassword: togglePassword_p,
    handleViewPassword: handleViewPassword_p,
  } = useTogglePassword();
  const {
    togglePassword: togglePassword_cp,
    handleViewPassword: handleViewPassword_cp,
  } = useTogglePassword();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/sign-up`, user)
      .then((res) => {
        const data = res.data;

        if (data.status === 201) {
          alert("User Sign up done!");
          navigate(ROUTE_PATH.LOGIN);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <div>
          <input
            type="text"
            placeholder="Enter user name"
            name="name"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="password__wrapper">
          <input
            type={togglePassword_p ? "text" : "password"}
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
          />
          {togglePassword_p ? (
            <FiEye className="eye" onClick={handleViewPassword_p} />
          ) : (
            <FiEyeOff className="eye-off" onClick={handleViewPassword_p} />
          )}
        </div>

        <div className="password__wrapper">
          <input
            type={togglePassword_cp ? "text" : "password"}
            placeholder="Confirm your password"
            name="cpassword"
            onChange={handleChange}
          />
          {togglePassword_cp ? (
            <FiEye className="eye" onClick={handleViewPassword_cp} />
          ) : (
            <FiEyeOff className="eye-off" onClick={handleViewPassword_cp} />
          )}
        </div>

        <div className="forget">
          <span>Forget Password</span>
          <Link to={ROUTE_PATH.LOGIN}>Login</Link>
        </div>

        <button className="button">Sign up</button>
      </form>
    </main>
  );
}

export default SignUp;
