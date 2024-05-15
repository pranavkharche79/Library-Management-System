import React, { useEffect, useState } from "react";
import Studentnav from "./Studentnav";
import styles from "../CSS/PlaceOrder.module.css";

export default function PlaceOrder() {
  const [issueDate, setIssueDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

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
      <input type="text" id="title" className={styles.titleinput} />
      <button type="button" className={styles.updatebutton}>
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

      <span className={styles.orderdetails}>Student Id</span>
      <span className={styles.orderinfo}>:&nbsp; &nbsp; 101</span>
      <br />
      <br />
      <span className={styles.orderdetails}>Student Name</span>
      <span className={styles.orderinfo}>:&nbsp; &nbsp; Jon</span>
      <br />
      <br />
      <span className={styles.orderdetails}>Issue Date</span>
      <span className={styles.orderinfo}>:&nbsp; &nbsp; {issueDate}</span>
      <br />
      <br />
      <span className={styles.orderdetails}>Expiry Date</span>
      <span className={styles.orderinfo}>:&nbsp; &nbsp; {expiryDate}</span>

      <button type="button" className={styles.orderbut}>
        Place Order
      </button>
    </>
  );
}
