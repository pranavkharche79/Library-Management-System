import React from "react";
import "../CSS/Home.css";
import Login from "./Login";

export default function Home() {
  return (
    <>
      <div className="middleimage">
        <div className="title">
          <span className="titlename">e-Library Management System</span>
        </div>
        <Login />
      </div>
    </>
  );
}
