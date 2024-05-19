import React, { useState } from "react";
import Adminlogin from "../images/Adminlogin.png";
import "../CSS/StudentLogin.css";
import axios from "axios";
import { API_BASE_URL } from "../API_Configuration/apiconfig";
import { useNavigate } from "react-router-dom";

export default function StudentLogin() {
  const [student, setstudent] = useState({ sid: "", spass: "" });
  const navigate = useNavigate();

  const handelLogin = async (e) => {
    e.preventDefault();
    console.log(student);
    await axios
      .post(`${API_BASE_URL}api/student`, student)
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem("role", "Student");
        sessionStorage.setItem("id", res.data.sid);
        sessionStorage.setItem("name", res.data.sname);
        sessionStorage.setItem("fine", res.data.sfine);
        navigate("/sbsearch");
      })
      .catch((err) => {
        console.log(err);
        alert("error");
      });
  };

  return (
    <>
      <div className="block">
        <img src={Adminlogin} alt="Admin Login" className="blockimage" />
        <form className="form" onSubmit={handelLogin}>
          <label for="username" class="usernametexts">
            Username
          </label>
          <input
            type="number"
            class="inputusernames"
            id="username"
            onChange={(e) => {
              setstudent({ ...student, sid: e.target.value });
            }}
            required
          />
          <br />
          <label for="inputPassword" class="passwordtexts">
            Password
          </label>
          <span className="member">Not A member Yet ?????</span>
          <span className="register">
            <u>Register Now !!!!?</u>
          </span>
          <input
            type="password"
            class="inputpasswords"
            id="inputPassword"
            onChange={(e) => {
              setstudent({ ...student, spass: e.target.value });
            }}
            required
          />
          <button type="submit" className="logins">
            login
          </button>
        </form>
      </div>
    </>
  );
}
