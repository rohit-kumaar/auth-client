import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../routes/path";

const url = "http://localhost:4000/api/v1";

function Dashboard() {
  const token = localStorage.getItem("userDataToken");
  const navigate = useNavigate();

  const dashboardValid = async () => {
    axios({
      method: "get",
      baseURL: `${url}/valid-user`,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((res) => {
        const data = res.data;
        console.log(data);

        if (data.status == 401 || !data) {
          navigate(ROUTE_PATH.ERROR);
        } else {
          navigate(ROUTE_PATH.DASHBOARD);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    dashboardValid();
  }, []);

  return <div>Dashboard</div>;
}

export default Dashboard;
