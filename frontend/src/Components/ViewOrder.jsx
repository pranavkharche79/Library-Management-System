import React, { useState } from "react";
import Adminnav from "./Adminnav";
import styles from "../CSS/ViewOrder.module.css";
import { API_BASE_URL } from "../API_Configuration/apiconfig";
import axios from "axios";

export default function ViewOrder() {
  const [totalstatus, settotalstatus] = useState(false);
  const [total, settotal] = useState(0);
  const [book, setbook] = useState({});
  const [title, settitle] = useState(null);

  const handelBookSearch = async () => {
    if (!title) {
      alert("Enter Book Name");
      return;
    }
    await axios
      .get(`${API_BASE_URL}api/book/search?title=${title}`)
      .then((res) => {
        console.log(res.data);
        setbook(res.data);
      })
      .catch((err) => {
        alert(err.response.data);
        setbook({ ...book, title: "", author: "", quantity: "" });
      });
  };

  const handelOrders = async () => {
    if (!book.bookid) {
      alert("Search Book Name");
      return;
    }
    await axios
      .get(`${API_BASE_URL}api/borrow/count/${book.bookid}`)
      .then((res) => {
        console.log(res.data);
        settotal(res.data);
        settotalstatus(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Adminnav />

      {!totalstatus && (
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
                <td>Secret Agent</td>
                <td>Joseph Conwa</td>
                <td>101</td>
                <td>John</td>
                <td>20/05/2024</td>
                <td>20/06/2024</td>
              </tr>
            </tbody>
          </table>
        </>
      )}

      {totalstatus && (
        <>
          <div className={styles.totalorder}>
            Total Number Of Order = {total}
          </div>
        </>
      )}

      <span className={styles.viewordertext}>
        <u>View Order</u>
      </span>
      <label htmlFor="title" className={styles.bookname}>
        Book Name
      </label>
      <input
        type="text"
        id="title"
        className={styles.titleinput}
        value={title || ""}
        onChange={(e) => {
          settitle(e.target.value);
        }}
      />
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
      <input
        type="text"
        id="title"
        className={styles.suginput}
        value={book.title}
        readOnly
      />
      <label htmlFor="author" className={styles.sugauthor}>
        Author
      </label>
      <input
        type="text"
        id="author"
        className={styles.sugauthorinput}
        value={book.author}
        readOnly
      />
      <button type="button" className={styles.sugsearch} onClick={handelOrders}>
        Search
      </button>
    </>
  );
}
