import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { API_URL } from "../config/config";
import { selectUser, setUserData } from "../features/userSlice";
import { useTitle } from "../hooks/useTitle";
import { ROUTE_PATH } from "../routes/path";

function Dashboard() {
  useTitle("Dashboard");
  const token = localStorage.getItem("userDataToken");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const select = useSelector(selectUser);

  const dashboardValid = async () => {
    axios
      .get(`${API_URL}/valid-user`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        const data = res.data;
        // console.log(data);

        if (data.status == 401 || !data) {
          navigate(ROUTE_PATH.ERROR);
        } else {
          dispatch(setUserData(data));
          navigate(ROUTE_PATH.DASHBOARD);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = async () => {
    console.log("logout");
    const token = localStorage.getItem("userDataToken");
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios
      .get(`${API_URL}/logout`, {
        headers: {
          Authorization: token,
          cancelToken: source.token,
        },
      })
      .then((res) => {
        const data = res.data;
        console.log(data);

        if (data.status == 201) {
          console.log("User logout");
          localStorage.removeItem("userDataToken");
          localStorage.removeItem("userData");
          navigate(ROUTE_PATH.DEFAULT);
        }
      })
      .catch((thrown) => {
        if (axios.isCancel(thrown)) {
          console.log("Request canceled", thrown.message);
        }
      });
  };

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      dispatch(setUserData(storedUserData));
    } else {
      dashboardValid();
    }
  }, []);

  return (
    <div>
      <Header /> Dashboard component user email is :
      <b>{select?.validUserOne?.email}</b>
      <div>
        <button className="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
