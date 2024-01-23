import { useState } from "react";

function TogglePassword() {
  const [togglePassword, setTogglePassword] = useState(false);

  const handleViewPassword = () => {
    setTogglePassword(!togglePassword);
  };

  return { togglePassword, handleViewPassword };
}

export default TogglePassword;
