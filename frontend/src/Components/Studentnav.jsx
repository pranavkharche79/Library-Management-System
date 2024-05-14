import React from "react";
import { Link } from "react-router-dom";
import styles from "../CSS/Adminnav.module.css";

export default function Studentnav() {
  return (
    <>
      <div className={styles.navblock}>
        <div className={styles.row}>
          <div className={styles.addbook}>
            <Link to="/sbsearch">
              <span className={styles.adbtext}>Books Search</span>
            </Link>
          </div>
          <div className={styles.bsearch}>
            <Link to="/sbookinfo">
              <span className={styles.adbtext}>View Data Info</span>
            </Link>
          </div>
          <div className={styles.bupdate}>
            <Link to="/sbookreturn">
              <span className={styles.adbtext}>Return Book</span>
            </Link>
          </div>
          <div className={styles.vieworder}>
            <Link to="/sorderbook">
              <span className={styles.adbtext}>Place Order</span>
            </Link>
          </div>
          <div className={styles.asignout}>
            <Link to="/slogout">
              <span className={styles.adbtext}>Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
