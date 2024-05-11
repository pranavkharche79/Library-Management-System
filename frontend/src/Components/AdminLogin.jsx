import React from "react";
import "../CSS/AdminLogin.css";
import Adminlogin from "../images/Adminlogin.png";

export default function AdminLogin() {
  return (
    <>
      <div className="block">
        <img src={Adminlogin} alt="Admin Login" className="blockimage" />
        <form className="form">
          <label for="username" class="usernametext">
            Username
          </label>
          <input type="text" class="inputusername" id="username" />
          <br />
          <label for="inputPassword" class="passwordtext">
            Password
          </label>
          <input type="password" class="inputpassword" id="inputPassword" />
          <button type="submit" className="login">
            login
          </button>
        </form>
      </div>
    </>
  );
}
