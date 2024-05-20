import React, { useState } from "react";
import Studentnav from "./Studentnav";
import styles from "../CSS/StudentData.module.css";
import axios from "axios";
import { API_BASE_URL } from "../API_Configuration/apiconfig";

export default function StudentData() {
  const [fine, setfine] = useState(false);
  const [data, setdata] = useState(null);
  const [error, seterror] = useState();
  const [stuid, setstuid] = useState();

  const fetchdata = async () => {
    if (!stuid) {
      alert("Enter Student ID");
      return;
    }
    await axios
      .get(`${API_BASE_URL}api/borrow/${stuid}`)
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => {
        seterror(err.response.data);
        setdata(null);
      });
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
      <input
        type="number"
        id="studentid"
        className={styles.studentidinput}
        onChange={(e) => {
          setstuid(e.target.value);
        }}
      />
      <button type="button" className={styles.searchbut} onClick={fetchdata}>
        Search
      </button>
      {data ? (
        <>
          <span className={styles.issuedate}>Issue Date : {data[5]}</span>
          <span className={styles.expirydate}>Expiry Date : {data[6]}</span>
          <button
            type="button"
            className={styles.finebut}
            onClick={(e) => {
              setfine(true);
            }}
          >
            Calculate Fine
          </button>
        </>
      ) : (
        <>
          <span className={styles.issuedate}>{error}</span>
        </>
      )}
    </>
  );
}
