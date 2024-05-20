import React, { useEffect, useState } from "react";
import Studentnav from "./Studentnav";
import styles from "../CSS/ReturnBook.module.css";
import axios from "axios";
import { API_BASE_URL } from "../API_Configuration/apiconfig";

export default function ReturnBook() {
  const [data, setdata] = useState(null);
  const [error, seterror] = useState();

  const fetchdata = async () => {
    console.log(typeof sessionStorage.getItem("id"));
    await axios
      .get(`${API_BASE_URL}api/borrow/${sessionStorage.getItem("id")}`)
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => {
        // alert(err.response.data);
        seterror(err.response.data);
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <Studentnav />
      <span className={styles.returnbook}>
        <u>Return Book</u>
      </span>
      {data ? (
        <>
          <span className={styles.returndedails}>Student Id</span>
          <span className={styles.returninfo}>:&nbsp; &nbsp; {data[3]}</span>
          <br />
          <br />
          <span className={styles.returndedails}>Book Name</span>
          <span className={styles.returninfo}>:&nbsp; &nbsp; {data[1]}</span>
          <br />
          <br />
          <span className={styles.returndedails}>Author Name</span>
          <span className={styles.returninfo}>:&nbsp; &nbsp; {data[2]}</span>
          <button type="button" className={styles.returnbut}>
            Return
          </button>
        </>
      ) : (
        <span className={styles.bookperchased}>{error}</span>
      )}
    </>
  );
}
