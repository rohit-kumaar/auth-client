import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../config/config";
import { useTitle } from "../hooks/useTitle";
import useTogglePassword from "../hooks/useTogglePassword";
import { ROUTE_PATH } from "../routes/path";
import { IUserLogin } from "../ts/interface";

function Login() {
  useTitle("Login");
  const { togglePassword, handleViewPassword } = useTogglePassword();
  const navigate = useNavigate();

  const [user, setUser] = useState<IUserLogin>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/login`, user)
      .then((res) => {
        const data = res.data;
        const token = data.result.token;

        if (data.status === 201) {
          localStorage.setItem("userDataToken", token);
          navigate(ROUTE_PATH.DASHBOARD);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
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
        <Link to={ROUTE_PATH.FORGET_PASSWORD}>Forget Password</Link>
        <Link to={ROUTE_PATH.DEFAULT}>Sign up</Link>
      </div>

      <button className="button">Login</button>
    </form>
  );
}

export default Login;
