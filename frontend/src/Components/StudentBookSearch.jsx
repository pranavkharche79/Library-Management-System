import React, { useEffect, useState } from "react";
import Studentnav from "./Studentnav";
import styles from "../CSS/StudentBookSearch.module.css";
import axios from "axios";
import { API_BASE_URL } from "../API_Configuration/apiconfig";

export default function StudentBookSearch() {
  const [search, setsearch] = useState(false);
  const [books, setbooks] = useState([]);
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
        setbook(res.data);
        setsearch(false);
      })
      .catch((err) => {
        alert(err.response.data);
        setbook({ ...book, title: "", author: "", quantity: "" });
      });
  };

  const infoOfBookSearch = () => {
    setsearch(true);
  };

  const fetchdata = async () => {
    axios
      .get(`${API_BASE_URL}api/book`)
      .then((res) => {
        console.log(res.data);
        setbooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);

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
              {books.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                    <td>{item.quantity}</td>
                  </tr>
                );
              })}
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
        value={book.title}
        readOnly
        className={styles.suginput}
      />
      <label htmlFor="author" className={styles.sugauthor}>
        Author Name
      </label>
      <input
        type="text"
        id="author"
        value={book.author}
        readOnly
        className={styles.sugauthorinput}
      />
      <button
        type="button"
        className={styles.sugsearch}
        onClick={infoOfBookSearch}
      >
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
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.quantity}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
