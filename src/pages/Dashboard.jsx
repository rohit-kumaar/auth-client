import axios from "axios";
import React, { useEffect } from "react";

const url = "http://localhost:4000/api/v1";

function Dashboard() {
  const token = localStorage.getItem("userDataToken");

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
