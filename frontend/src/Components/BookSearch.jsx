import React, { useState } from "react";
import Adminnav from "./Adminnav";
import styles from "../CSS/BookSearch.module.css";
import booksearch from "../images/BookSearch.png";
import axios from "axios";
import { API_BASE_URL } from "../API_Configuration/apiconfig";

export default function BookSearch() {
  const [bookstatus, setbookstatus] = useState(false);
  const [bookid, setbookid] = useState(null);
  const [book, setbook] = useState({});

  const handleSearch = async () => {
    console.log(bookid);
    if (!bookid) {
      alert("Enter Book ID");
      setbookid(null);
      return;
    }
    await axios
      .get(`${API_BASE_URL}api/book/bookid/${bookid}`)
      .then((res) => {
        console.log(res.data);
        alert("Book Search Successfully");
        setbook(res.data);
        setbookid(null);
        setbookstatus(true);
      })
      .catch((err) => {
        alert(err.response.data);
        setbookid(null);
      });
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
            <input
              type="number"
              id="bookId"
              className={styles.bookidinput}
              value={bookid || ""}
              onChange={(e) => {
                setbookid(e.target.value);
              }}
            />
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
                <td>{book.bookid}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.cost}</td>
                <td>{book.quantity}</td>
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
            <input
              type="number"
              id="bookId"
              className={styles.bookidinput}
              value={bookid || ""}
              onChange={(e) => {
                setbookid(e.target.value);
              }}
            />
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
    </>
  );
}
