import axios from "axios";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import TogglePassword from "../hooks/TogglePassword";
import { Link } from "react-router-dom";

const url = "http://localhost:4000/api/v1";

function Login() {
  const { togglePassword, handleViewPassword } = TogglePassword();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${url}/login`, user)
      .then((res) => {
        const data = res.data;
        console.log(data);

        if (data.status === 201) {
          navigate("dashboard");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

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
            type={togglePassword ? "text" : "password"}
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
          />

          {togglePassword ? (
            <FiEye className="eye" onClick={handleViewPassword} />
          ) : (
            <FiEyeOff className="eye-off" onClick={handleViewPassword} />
          )}
        </div>

        <div className="forget">
          <span>Forget Password</span>
          <Link to="/">Sign up</Link>
        </div>

        <button className="button">Login</button>
      </form>
    </main>
  );
}

export default Login;
