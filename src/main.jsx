import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import store from "./app/store.js";
import { ROUTE_PATH } from "./routes/path.js";
const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const Error = lazy(() => import("./pages/Error.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const SignUp = lazy(() => import("./pages/SignUp.jsx"));

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
  <Provider store={store}>
    <React.StrictMode>
      <Suspense fallback="Loading...">
        <RouterProvider router={router} />
      </Suspense>
    </React.StrictMode>
  </Provider>
);
