import React from "react";
import Studentnav from "./Studentnav";
import styles from "../CSS/PlaceOrder.module.css";

export default function PlaceOrder() {
  return (
    <>
      <Studentnav />
      <span className={styles.bsearchtext}>
        <u>Place Order</u>
      </span>
      <label htmlFor="title" className={styles.bookname}>
        Book Name
      </label>
      <input type="text" id="title" className={styles.titleinput} />
      <button type="button" className={styles.updatebutton}>
        Search
      </button>
      <label htmlFor="title" className={styles.sugname}>
        Suggested
      </label>
      <input type="text" id="title" className={styles.suginput} />
      <label htmlFor="author" className={styles.sugauthor}>
        Author Name
      </label>
      <input type="text" id="author" className={styles.sugauthorinput} />
    </>
  );
}
