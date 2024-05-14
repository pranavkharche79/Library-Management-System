import React from "react";
import styles from "../CSS/Adminnav.module.css";
import { Link } from "react-router-dom";

export default function Adminnav() {
  return (
    <>
      <div className={styles.navblock}>
        <div className={styles.row}>
          <div className={styles.addbook}>
            <Link to="/addbook">
              <span className={styles.adbtext}>Add Books</span>
            </Link>
          </div>
          <div className={styles.bsearch}>
            <Link to="/bsearch">
              <span className={styles.adbtext}>Book Search</span>
            </Link>
          </div>
          <div className={styles.bupdate}>
            <Link to="/bupdate">
              <span className={styles.adbtext}>Book Update</span>
            </Link>
          </div>
          <div className={styles.vieworder}>
            <Link to="/vieworder">
              <span className={styles.adbtext}>View Order</span>
            </Link>
          </div>
          <div className={styles.asignout}>
            <Link to="/asignout">
              <span className={styles.adbtext}>Signout</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
