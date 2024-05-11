import React from "react";
import Adminlogin from "../images/Adminlogin.png";
import "../CSS/StudentLogin.css";

export default function StudentLogin() {
  return (
    <>
      <div className="block">
        <img src={Adminlogin} alt="Admin Login" className="blockimage" />
        <form className="form">
          <label for="username" class="usernametexts">
            Username
          </label>
          <input type="text" class="inputusernames" id="username" />
          <br />
          <label for="inputPassword" class="passwordtexts">
            Password
          </label>
          <span className="member">Not A member Yet ?????</span>
          <span className="register">
            <u>Register Now !!!!?</u>
          </span>
          <input type="password" class="inputpasswords" id="inputPassword" />
          <button type="submit" className="logins">
            login
          </button>
        </form>
      </div>
    </>
  );
}
