import React, { useEffect, useState } from "react";
import Studentnav from "./Studentnav";
import styles from "../CSS/PlaceOrder.module.css";
import axios from "axios";
import { API_BASE_URL } from "../API_Configuration/apiconfig";

export default function PlaceOrder() {
  const [issueDate, setIssueDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [book, setbook] = useState({});
  const [title, settitle] = useState(null);

  const getTodayDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };

  const getDateAfterOneMonth = () => {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    // Calculate the new month and year if needed
    if (mm === 12) {
      mm = 1; // Reset month to January
      yyyy++; // Increment year
    } else {
      mm++; // Increment month
    }

    // Handling leap year edge case for February
    if (mm === 2 && dd > 28) {
      if (!((yyyy % 4 === 0 && yyyy % 100 !== 0) || yyyy % 400 === 0)) {
        // If it's not a leap year and the current date is 29th February, set it to 28th February
        dd = 28;
      }
    }

    // Get the correct number of days in the month
    const daysInMonth = new Date(yyyy, mm, 0).getDate();
    if (dd > daysInMonth) {
      dd = daysInMonth;
    }
    const formattedDD = String(dd).padStart(2, "0");
    const formattedMM = String(mm).padStart(2, "0");
    return `${formattedDD}/${formattedMM}/${yyyy}`;
  };

  const handelBookSearch = async () => {
    if (!title) {
      alert("Enter Book Name");
      return;
    }
    await axios
      .get(`${API_BASE_URL}api/book/search?title=${title}`)
      .then((res) => {
        setbook(res.data);
      })
      .catch((err) => {
        alert(err.response.data);
        setbook({ ...book, title: "", author: "", quantity: "" });
      });
  };

  const handlePlaceOrder = async () => {
    if (!book.bookid) {
      alert("Search Book To Purchase");
      return;
    }
    const requestData = {
      student_id: sessionStorage.getItem("id"),
      book_id: book.bookid,
      issue_date: issueDate,
      expiry_date: expiryDate,
    };
    await axios
      .post(`${API_BASE_URL}api/borrow`, requestData)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  useEffect(() => {
    setIssueDate(getTodayDate());
    setExpiryDate(getDateAfterOneMonth());
  }, []);

  return (
    <>
      <Studentnav />
      <span className={styles.bsearchtext}>
        <u>Place Order</u>
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
        value={book.title || ""}
        readOnly
      />
      <label htmlFor="author" className={styles.sugauthor}>
        Author Name
      </label>
      <input
        type="text"
        id="author"
        className={styles.sugauthorinput}
        value={book.author || ""}
        readOnly
      />

      <span className={styles.orderdetails}>Student Id</span>
      <span className={styles.orderinfo}>
        :&nbsp; &nbsp; {sessionStorage.getItem("id")}
      </span>
      <br />
      <br />
      <span className={styles.orderdetails}>Student Name</span>
      <span className={styles.orderinfo}>
        :&nbsp; &nbsp; {sessionStorage.getItem("name")}
      </span>
      <br />
      <br />
      <span className={styles.orderdetails}>Issue Date</span>
      <span className={styles.orderinfo}>:&nbsp; &nbsp; {issueDate}</span>
      <br />
      <br />
      <span className={styles.orderdetails}>Expiry Date</span>
      <span className={styles.orderinfo}>:&nbsp; &nbsp; {expiryDate}</span>

      <button
        type="button"
        className={styles.orderbut}
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>
    </>
  );
}
