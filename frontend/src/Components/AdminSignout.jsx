import React from "react";
import Adminnav from "./Adminnav";
import adminsignout from "../images/AdminSignout.png";
import styles from "../CSS/AdminSignout.module.css";
import { useNavigate } from "react-router-dom";

export default function AdminSignout() {
  const navigate = useNavigate();

  const handleSignout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Adminnav />
      <img
        src={adminsignout}
        alt="Admin Signout"
        className={styles.asignoutimg}
      />
      <button type="button" className={styles.adminout} onClick={handleSignout}>
        Signout
      </button>
    </>
  );
}
