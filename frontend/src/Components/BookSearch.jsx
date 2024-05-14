import React, { useState } from "react";
import Adminnav from "./Adminnav";
import styles from "../CSS/BookSearch.module.css";
import booksearch from "../images/BookSearch.png";

export default function BookSearch() {
  const [bookstatus, setbookstatus] = useState(false);

  const handleSearch = () => {
    setbookstatus(true);
  };

  return (
    <>
      <Adminnav />

      {!bookstatus && (
        <>
          <img
            src={booksearch}
            alt="Book Search"
            className={styles.beforesearchimg}
          />
          <span className={styles.beforetext}>
            <u>Book Search</u>
          </span>
          <div className={styles.beforesearchblock}>
            <label htmlFor="bookId" className={styles.beforebookidlabel}>
              <span className={styles.bookidtext}>Book id</span>
            </label>
            <input type="number" id="bookId" className={styles.bookidinput} />
            <button
              type="submit"
              className={styles.searchbutton}
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </>
      )}

      {/* After searching book */}
      {bookstatus && (
        <>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Book Id</th>
                <th>Title</th>
                <th>Author Name</th>
                <th>Cost</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>101</td>
                <td>sfdsdfsg</td>
                <td>dfgdfgd</td>
                <td>234</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
          <img
            src={booksearch}
            alt="Book Search"
            className={styles.aftersearchimg}
          />
          <span className={styles.btext}>
            <u>Book Search</u>
          </span>
          <div className={styles.searchblock}>
            <label htmlFor="bookId" className={styles.bookidlabel}>
              <span className={styles.bookidtext}>Book id</span>
            </label>
            <input type="number" id="bookId" className={styles.bookidinput} />
            <button type="submit" className={styles.searchbutton}>
              Search
            </button>
          </div>
        </>
      )}
    </>
  );
}
