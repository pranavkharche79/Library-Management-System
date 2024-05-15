import React, { useState } from "react";
import Studentnav from "./Studentnav";
import styles from "../CSS/StudentData.module.css";

export default function StudentData() {
  const [fine, setfine] = useState(false);

  const handlefine = () => {
    setfine(true);
  };

  return (
    <>
      <Studentnav />
      {fine && (
        <>
          <div className={styles.fineblock}>
            <span className={styles.finedetail}>Fine Detail</span>
            <span className={styles.latetext}>Late by {}0 day</span>
            <span className={styles.tfinetext}>Total fine = {}0</span>
            <button
              type="button"
              className={styles.okfine}
              onClick={(e) => setfine(false)}
            >
              ok
            </button>
          </div>
        </>
      )}
      <span className={styles.finetext}>
        <u>Fine Details</u>
      </span>
      <label htmlFor="studentid" className={styles.stidentid}>
        Student Id
      </label>
      <input type="number" id="studentid" className={styles.studentidinput} />
      <button type="button" className={styles.searchbut}>
        Search
      </button>
      <span className={styles.issuedate}>Issue Date : 12/12/2021</span>
      <span className={styles.expirydate}>Expiry Date : 12/01/2022</span>
      <button type="button" className={styles.finebut} onClick={handlefine}>
        Calculate Fine
      </button>
    </>
  );
}
