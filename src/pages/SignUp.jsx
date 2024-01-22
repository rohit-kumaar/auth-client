import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:4000/api/v1";

function SignUp() {
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
    <form onSubmit={handleSubmit}>
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

      <div>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Confirm your password"
          name="cpassword"
          onChange={handleChange}
        />
      </div>

      <button>Sign up</button>
    </form>
  );
}

export default SignUp;
