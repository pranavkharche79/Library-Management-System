import React, { useState } from "react";
import Adminnav from "./Adminnav";
import styles from "../CSS/ViewOrder.module.css";

export default function ViewOrder() {
  const [totalorder, settotalorder] = useState(false);

  const handelOrders = () => {
    settotalorder(true);
  };

  return (
    <>
      <Adminnav />

      {!totalorder && (
        <>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author Name</th>
                <th>Student Id</th>
                <th>Student Name</th>
                <th>Issue Date</th>
                <th>Expiry Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>sfdsdfsg</td>
                <td>dfgdfgd</td>
                <td>234</td>
                <td>Pranav Kharche</td>
                <td>23/11/2021</td>
                <td>23/12/2021</td>
              </tr>
            </tbody>
          </table>
        </>
      )}

      {totalorder && (
        <>
          <div className={styles.totalorder}>Total Number Of Order = 0</div>
        </>
      )}

      <span className={styles.viewordertext}>
        <u>View Order</u>
      </span>
      <label htmlFor="title" className={styles.bookname}>
        Book Name
      </label>
      <input type="text" id="title" className={styles.titleinput} />
      <button
        type="button"
        className={styles.updatebutton}
        onClick={handelOrders}
      >
        Search
      </button>
      <label htmlFor="title" className={styles.sugname}>
        Suggested
      </label>
      <input type="text" id="title" className={styles.suginput} />
      <label htmlFor="author" className={styles.sugauthor}>
        Author
      </label>
      <input type="text" id="author" className={styles.sugauthorinput} />
      <button type="button" className={styles.sugsearch}>
        Search
      </button>
    </>
  );
}
