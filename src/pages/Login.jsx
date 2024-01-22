import axios from "axios";
import React, { useState } from "react";

const url = "http://localhost:4000/api/v1";

function Login() {
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
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
        />
      </div>

      <button>Login</button>
    </form>
  );
}

export default Login;
