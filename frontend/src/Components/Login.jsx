import React from "react";
import "../CSS/Login.css";
import Admin from "../images/admin.png";
import Student from "../images/student.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="lblock">
        <Link to="/adminlogin">
          <img src={Admin} alt="Admin" className="admin" />
          <span className="Admintext">Admin</span>
        </Link>
        <Link to="/studentlogin">
          <img src={Student} alt="Student" className="student" />
          <span className="Studenttext">Student</span>
        </Link>
      </div>
    </>
  );
}
