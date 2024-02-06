import { ChangeEvent, FormEvent, useState } from "react";
import { API_URL } from "../config/config";
import axios from "axios";

function ForgetPassword() {
  const [email, setEmail] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/`, email)
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Forget Password</h1>

      <div>
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          onChange={handleChange}
        />
      </div>

      <button className="button">Submit</button>
    </form>
  );
}

export default ForgetPassword;
