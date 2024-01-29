import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Header() {
  const select = useSelector(selectUser);
  return (
    <div>
      Header component user is : <b>{select?.validUserOne?.name}</b>
    </div>
  );
}

export default Header;
