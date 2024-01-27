import { useState } from "react";

function useTogglePassword() {
  const [togglePassword, setTogglePassword] = useState(false);

  const handleViewPassword = () => {
    setTogglePassword(!togglePassword);
  };

  return { togglePassword, handleViewPassword };
}

export default useTogglePassword;
