import React from "react";
import Studentnav from "./Studentnav";
import stulogoutimg from "../images/StudentLogout.png";
import styles from "../CSS/StudentLogout.module.css";
import { useNavigate } from "react-router-dom";

export default function StudentLogout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Studentnav />
      <img
        src={stulogoutimg}
        alt="Student Logout"
        className={styles.stulogoutimg}
      />
      <button type="button" className={styles.slogout} onClick={handleLogout}>
        Logout
      </button>
    </>
  );
}
