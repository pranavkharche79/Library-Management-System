import React, { useState } from "react";
import Studentnav from "./Studentnav";
import styles from "../CSS/StudentBookSearch.module.css";

export default function StudentBookSearch() {
  const [search, setsearch] = useState(false);

  const handelBookSearch = () => {
    setsearch(true);
  };

  return (
    <>
      <Studentnav />
      {!search && (
        <>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>sfdsdfsg</td>
                <td>dfgdfgd</td>
                <td>10</td>
              </tr>
              <tr>
                <td>sfdsdfsg</td>
                <td>dfgdfgd</td>
                <td>10</td>
              </tr>
              <tr>
                <td>sfdsdfsg</td>
                <td>dfgdfgd</td>
                <td>10</td>
              </tr>
              <tr>
                <td>sfdsdfsg</td>
                <td>dfgdfgd</td>
                <td>10</td>
              </tr>
              <tr>
                <td>sfdsdfsg</td>
                <td>dfgdfgd</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
      <span className={styles.bsearchtext}>
        <u>Book Serach</u>
      </span>
      <label htmlFor="title" className={styles.bookname}>
        Book Name
      </label>
      <input type="text" id="title" className={styles.titleinput} />
      <button
        type="button"
        className={styles.updatebutton}
        onClick={handelBookSearch}
      >
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
      <button type="button" className={styles.sugsearch}>
        Search
      </button>
      {search && (
        <>
          <table className={styles.aftertable}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>sfdsdfsg</td>
                <td>dfgdfgd</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
