import React from "react";
import Adminnav from "./Adminnav";
import styles from "../CSS/AddBook.module.css";
import addbook from "../images/addbook.png";

export default function AddBook() {
  return (
    <>
      <Adminnav />
      <span className={styles.addbook}>
        <u>Add books</u>
      </span>
      <img src={addbook} alt="Add book" className={styles.bookimage} />
      <form className={styles.form}>
        <div className={styles.formRow}>
          <label htmlFor="bookId">
            <span className={styles.text}>Book ID:</span>
          </label>
          <input type="number" id="bookId" name="bookId" />
        </div>
        <div className={styles.formRow}>
          <label htmlFor="title">
            <span className={styles.text}>Title:</span>
          </label>
          <input type="text" id="title" name="title" />
        </div>
        <div className={styles.formRow}>
          <label htmlFor="author">
            <span className={styles.text}>Author:</span>
          </label>
          <input type="text" id="author" name="author" />
        </div>
        <div className={styles.formRow}>
          <label htmlFor="cost">
            <span className={styles.text}>Cost:</span>
          </label>
          <input type="number" id="cost" name="cost" />
        </div>
        <div className={styles.formRow}>
          <label htmlFor="quantity">
            <span className={styles.text}>Quantity:</span>
          </label>
          <input type="number" id="quantity" name="quantity" />
        </div>
        <button type="submit" className={styles.submitButton}>
          Add
        </button>
      </form>
    </>
  );
}
