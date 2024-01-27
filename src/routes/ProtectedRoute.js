// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { isLogin } from "../service/service";
// import { ROUTE_PATH } from "./path";

// function ProtectedRoute({ children }) {
//   const user = isLogin();
//   const navigate = useNavigate();
//   // console.log(user);
//   // return user ? children : navigate(ROUTE_PATH.DEFAULT, { replace: true });

//   useEffect(() => {
//     const token = setTimeout(() => {
//       user ? children : navigate(ROUTE_PATH.DEFAULT, { replace: true });
//     }, 2000);

//     return () => clearTimeout(token);
//   }, [navigate, user]);

//   // return children;
// }

// export default ProtectedRoute;
