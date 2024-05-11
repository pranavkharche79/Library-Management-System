import React from "react";
import "../CSS/Login.css";
import Admin from "../images/admin.png";
import Student from "../images/student.png";

export default function Login() {
  return (
    <>
      <div className="block">
        <img src={Admin} alt="Admin" className="admin" />
        <span className="Admintext">Admin</span>
        <img src={Student} alt="Student" className="student" />
        <span className="Studenttext">Student</span>
      </div>
    </>
  );
}
