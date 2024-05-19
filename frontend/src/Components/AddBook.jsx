import React, { useState } from "react";
import Adminnav from "./Adminnav";
import styles from "../CSS/AddBook.module.css";
import addbook from "../images/addbook.png";
import axios from "axios";
import { API_BASE_URL } from "../API_Configuration/apiconfig";

export default function AddBook() {
  const [book, setbook] = useState({
    bookid: "",
    title: "",
    author: "",
    cost: "",
    quantity: "",
  });

  const handelSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${API_BASE_URL}api/book`, book)
      .then((res) => {
        alert(res.data);
        setbook({
          ...book,
          bookid: "",
          title: "",
          author: "",
          cost: "",
          quantity: "",
        });
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data);
      });
  };

  return (
    <>
      <Adminnav />
      <span className={styles.addbook}>
        <u>Add books</u>
      </span>
      <img src={addbook} alt="Add book" className={styles.bookimage} />
      <form className={styles.form} onSubmit={handelSubmit}>
        <div className={styles.formRow}>
          <label htmlFor="bookId">
            <span className={styles.text}>Book ID:</span>
          </label>
          <input
            type="number"
            id="bookId"
            name="bookId"
            required
            value={book.bookid}
            onChange={(e) => {
              setbook({ ...book, bookid: e.target.value });
            }}
          />
        </div>
        <div className={styles.formRow}>
          <label htmlFor="title">
            <span className={styles.text}>Title:</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={book.title}
            onChange={(e) => {
              setbook({ ...book, title: e.target.value });
            }}
          />
        </div>
        <div className={styles.formRow}>
          <label htmlFor="author">
            <span className={styles.text}>Author:</span>
          </label>
          <input
            type="text"
            id="author"
            name="author"
            required
            value={book.author}
            onChange={(e) => {
              setbook({ ...book, author: e.target.value });
            }}
          />
        </div>
        <div className={styles.formRow}>
          <label htmlFor="cost">
            <span className={styles.text}>Cost:</span>
          </label>
          <input
            type="number"
            id="cost"
            name="cost"
            required
            value={book.cost}
            onChange={(e) => {
              setbook({ ...book, cost: e.target.value });
            }}
          />
        </div>
        <div className={styles.formRow}>
          <label htmlFor="quantity">
            <span className={styles.text}>Quantity:</span>
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            required
            value={book.quantity}
            onChange={(e) => {
              setbook({ ...book, quantity: e.target.value });
            }}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Add
        </button>
      </form>
    </>
  );
}
