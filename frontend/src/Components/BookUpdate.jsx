import React, { useState } from "react";
import styles from "../CSS/BookUpdate.module.css";
import Adminnav from "./Adminnav";
import bupdateimg from "../images/BookUpdate.png";
import { API_BASE_URL } from "../API_Configuration/apiconfig";
import axios from "axios";

export default function BookUpdate() {
  const [update, setupdate] = useState(false);
  const [beforeu, setbeforeu] = useState(false);
  const [bookid, setbookid] = useState(null);
  const [book, setbook] = useState({});
  const [ubook, setubook] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(ubook);
    await axios
      .put(`${API_BASE_URL}api/book`, ubook)
      .then((res) => {
        console.log(res.data);
        alert("Book updated Successfully");
        setbook(res.data);
        setubook(res.data);
        setupdate(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handlebeforeu = async () => {
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
        setubook(res.data);
        setbookid(null);
        setbeforeu(true);
      })
      .catch((err) => {
        alert(err.response.data);
        setbookid(null);
      });
  };

  const handleUpdate = () => {
    console.log(ubook);
    setupdate(true);
  };

  const cancelupdate = () => {
    setupdate(false);
  };

  return (
    <>
      <Adminnav />
      {!beforeu && (
        <>
          <span className={styles.beforetext}>
            <u>Book Update</u>
          </span>
          <img
            src={bupdateimg}
            alt="Book update"
            className={styles.beforeuimg}
          />
          <div className={styles.beforeublock}>
            <label htmlFor="bookId" className={styles.beforeuidlabel}>
              <span className={styles.ubookidtext}>Book ID</span>
            </label>
            <input
              type="number"
              id="bookId"
              className={styles.ubookidinput}
              value={bookid || ""}
              onChange={(e) => {
                setbookid(e.target.value);
              }}
            />
            <button
              type="submit"
              className={styles.updatebutton}
              onClick={handlebeforeu}
            >
              Add
            </button>
          </div>
        </>
      )}

      {beforeu && (
        <>
          <span className={styles.beforeutext}>
            <u>Book Update</u>
          </span>
          <div className={styles.afterublock}>
            <label htmlFor="bookId" className={styles.beforeuidlabel}>
              <span className={styles.ubookidtext}>Book ID</span>
            </label>
            <input
              type="number"
              id="bookId"
              className={styles.ubookidinput}
              value={bookid || ""}
              onChange={(e) => {
                setbookid(e.target.value);
              }}
            />
            <button
              type="submit"
              className={styles.updatebutton}
              onClick={handlebeforeu}
            >
              Add
            </button>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Book Id</th>
                <th>Title</th>
                <th>Author Name</th>
                <th>Cost</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{book.bookid}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.cost}</td>
                <td>{book.quantity}</td>
                <td>
                  <button
                    type="button"
                    onClick={handleUpdate}
                    style={{ width: "80px", height: "35px" }}
                  >
                    <strong style={{ fontSize: 18 }}>
                      <u>Edit</u>
                    </strong>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}

      {update && (
        <>
          <form className={styles.form} onSubmit={handleSubmit}>
            <span className={styles.aftertext}>Book Update</span>
            <div className={styles.formrow}>
              <label htmlFor="bookId">Book Id</label>
              <span id="bookid">{ubook.bookid}</span>
            </div>
            <div className={styles.formrow}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={ubook.title}
                required
                onChange={(e) => {
                  setubook({ ...ubook, title: e.target.value });
                }}
              />
            </div>
            <div className={styles.formrow}>
              <label htmlFor="author">Author Name</label>
              <input
                type="text"
                id="author"
                value={ubook.author}
                required
                onChange={(e) => {
                  setubook({ ...ubook, author: e.target.value });
                }}
              />
            </div>
            <div className={styles.formrow}>
              <label htmlFor="cost">Cost</label>
              <input
                type="number"
                id="cost"
                value={ubook.cost}
                required
                onChange={(e) => {
                  setubook({ ...ubook, cost: e.target.value });
                }}
              />
            </div>
            <div className={styles.formrow}>
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                value={ubook.quantity}
                required
                onChange={(e) => {
                  setubook({ ...ubook, quantity: e.target.value });
                }}
              />
            </div>
            <div className={styles.formrow}>
              <button type="submit">Update</button>
              <button type="button" onClick={cancelupdate}>
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
}
