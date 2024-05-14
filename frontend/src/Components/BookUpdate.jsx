import React, { useState } from "react";
import styles from "../CSS/BookUpdate.module.css";
import Adminnav from "./Adminnav";
import bupdateimg from "../images/BookUpdate.png";

export default function BookUpdate() {
  const [update, setupdate] = useState(false);
  const [beforeu, setbeforeu] = useState(false);

  const [bookId, setBookId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cost, setCost] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, such as updating data
    console.log("Form submitted with data: ", {
      bookId,
      title,
      author,
      cost,
      quantity,
    });
    // You can add your logic to update the form data here
  };

  const handlebeforeu = () => {
    setbeforeu(true);
  };

  const handleUpdate = () => {
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
            <input type="number" id="bookId" className={styles.ubookidinput} />
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
            <input type="number" id="bookId" className={styles.ubookidinput} />
            <button type="submit" className={styles.updatebutton}>
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
                <td>101</td>
                <td>sfdsdfsg</td>
                <td>dfgdfgd</td>
                <td>234</td>
                <td>10</td>
                <td>
                  <button type="button" onClick={handleUpdate}>
                    <strong>
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
              <span id="bookid">{bookId}123</span>
            </div>
            <div className={styles.formrow}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={styles.formrow}>
              <label htmlFor="author">Author Name</label>
              <input
                type="text"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className={styles.formrow}>
              <label htmlFor="cost">Cost</label>
              <input
                type="text"
                id="cost"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </div>
            <div className={styles.formrow}>
              <label htmlFor="quantity">Quantity</label>
              <input
                type="text"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className={styles.formrow}>
              <button type="submit">Update</button>
              <button type="submit" onClick={cancelupdate}>
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
}
