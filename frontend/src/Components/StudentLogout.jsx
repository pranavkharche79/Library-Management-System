import React from "react";
import Studentnav from "./Studentnav";
import stulogoutimg from "../images/StudentLogout.png";
import styles from "../CSS/StudentLogout.module.css";

export default function StudentLogout() {
  return (
    <>
      <Studentnav />
      <img
        src={stulogoutimg}
        alt="Student Logout"
        className={styles.stulogoutimg}
      />
      <button type="button" className={styles.slogout}>
        Logout
      </button>
    </>
  );
}
