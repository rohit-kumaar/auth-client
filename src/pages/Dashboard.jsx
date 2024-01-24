import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { selectUser, setUserData } from "../features/userSlice";
import { ROUTE_PATH } from "../routes/path";

const url = "http://localhost:4000/api/v1";

function Dashboard() {
  const token = localStorage.getItem("userDataToken");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const select = useSelector(selectUser);
  // console.log(select.validUserOne.email);

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
      <Header /> Dashboard component user email is : {select.validUserOne.email}
    </div>
  );
}

export default Dashboard;
