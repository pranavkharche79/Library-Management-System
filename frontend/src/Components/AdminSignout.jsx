import React from "react";
import Adminnav from "./Adminnav";
import adminsignout from "../images/AdminSignout.png";
import styles from "../CSS/AdminSignout.module.css";

export default function AdminSignout() {
  return (
    <>
      <Adminnav />
      <img
        src={adminsignout}
        alt="Admin Signout"
        className={styles.asignoutimg}
      />
      <button type="button" className={styles.adminout}>
        Signout
      </button>
    </>
  );
}
