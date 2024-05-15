import React from "react";
import Studentnav from "./Studentnav";
import styles from "../CSS/ReturnBook.module.css";

export default function ReturnBook() {
  return (
    <>
      <Studentnav />
      <span className={styles.returnbook}>
        <u>Return Book</u>
      </span>
      <span className={styles.returndedails}>Customer Id</span>
      <span className={styles.returninfo}>:&nbsp; &nbsp; 101</span>
      <br />
      <br />
      <span className={styles.returndedails}>Book Name</span>
      <span className={styles.returninfo}>:&nbsp; &nbsp; Secret Agent</span>
      <br />
      <br />
      <span className={styles.returndedails}>Author Name</span>
      <span className={styles.returninfo}>:&nbsp; &nbsp; Joseph Conward</span>
      <button type="button" className={styles.returnbut}>
        Return
      </button>
    </>
  );
}
