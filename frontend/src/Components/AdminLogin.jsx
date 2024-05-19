import React, { useState } from "react";
import "../CSS/AdminLogin.css";
import Adminlogin from "../images/Adminlogin.png";
import { API_BASE_URL } from "../API_Configuration/apiconfig";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [admin, setadmin] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handellogin = async (e) => {
    e.preventDefault();
    console.log(admin);
    await axios
      .post(`${API_BASE_URL}api/admin`, admin)
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem("role", "Admin");
        sessionStorage.setItem("id", res.data.adminid);
        sessionStorage.setItem("username", res.data.username);
        alert("Login Successfully");
        navigate("/admindboard");
      })
      .catch((err) => {
        alert(err.response.data);
        console.log(err);
      });
  };

  return (
    <>
      <div className="block">
        <img src={Adminlogin} alt="Admin Login" className="blockimage" />
        <form className="form" onSubmit={handellogin}>
          <label for="username" class="usernametext">
            Username
          </label>
          <input
            type="text"
            class="inputusername"
            id="username"
            onChange={(e) => {
              setadmin({ ...admin, username: e.target.value });
            }}
            required
          />
          <br />
          <label for="inputPassword" class="passwordtext">
            Password
          </label>
          <input
            type="password"
            class="inputpassword"
            id="inputPassword"
            onChange={(e) => {
              setadmin({ ...admin, password: e.target.value });
            }}
            required
          />
          <button type="submit" className="login">
            login
          </button>
        </form>
      </div>
    </>
  );
}
