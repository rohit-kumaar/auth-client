import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Dashboard from "./pages/Dashboard.jsx";
import Error from "./pages/Error.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import { ROUTE_PATH } from "./routes/path.js";

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.DEFAULT,
    element: <SignUp />,
  },
  {
    path: ROUTE_PATH.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTE_PATH.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: ROUTE_PATH.ERROR,
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
