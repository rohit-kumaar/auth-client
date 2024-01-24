import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Header() {
  const select = useSelector(selectUser);
  return <div>Header component user is : {select.validUserOne.name}</div>;
}

export default Header;
