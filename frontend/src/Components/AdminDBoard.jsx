import React from "react";
import { Link } from "react-router-dom";
import "../CSS/AdminDBoard.css";

export default function AdminDBoard() {
  return (
    <>
      <div className="block">
        <div className="addbook">
          <Link to="/addbook">
            <span className="adbtext">Add Books</span>
          </Link>
        </div>
        <div className="bsearch">
          <Link to="/bsearch">
            <span className="adbtext">Book Search</span>
          </Link>
        </div>
        <div className="bupdate">
          <Link to="/bupdate">
            <span className="adbtext">Book Update</span>
          </Link>
        </div>
        <div className="vieworder">
          <Link to="/vieworder">
            <span className="adbtext">View Order</span>
          </Link>
        </div>
        <div className="asignout">
          <Link to="/asignout">
            <span className="adbtext">Signout</span>
          </Link>
        </div>
      </div>
    </>
  );
}
