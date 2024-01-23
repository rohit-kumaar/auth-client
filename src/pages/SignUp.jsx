import axios from "axios";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import TogglePassword from "../hooks/TogglePassword";

const url = "http://localhost:4000/api/v1";

function SignUp() {
  const {
    togglePassword: togglePassword_p,
    handleViewPassword: handleViewPassword_p,
  } = TogglePassword();
  const {
    togglePassword: togglePassword_cp,
    handleViewPassword: handleViewPassword_cp,
  } = TogglePassword();

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
      .post(`${url}/sign-up`, user)
      .then((res) => {
        const data = res.data;

        if (data.status === 201) {
          alert("User Sign up done!");
          navigate("login");
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
          <Link to="login">Login</Link>
        </div>

        <button className="button">Sign up</button>
      </form>
    </main>
  );
}

export default SignUp;
