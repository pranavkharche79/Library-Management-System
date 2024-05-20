package com.lsm.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "Borrowedbooks")
public class BorrowedBook {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long borrowid;

	@Column(unique = true)
	private Long student_id;

	private Long book_id;

	private String issue_date;

	private String expiry_date;

	private String return_date;

	public BorrowedBook() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BorrowedBook(Long borrowid, Long student_id, Long book_id, String issue_date, String expiry_date,
			String return_date) {
		super();
		this.borrowid = borrowid;
		this.student_id = student_id;
		this.book_id = book_id;
		this.issue_date = issue_date;
		this.expiry_date = expiry_date;
		this.return_date = return_date;
	}

	public Long getBorrowid() {
		return borrowid;
	}

	public void setBorrowid(Long borrowid) {
		this.borrowid = borrowid;
	}

	public Long getStudent_id() {
		return student_id;
	}

	public void setStudent_id(Long student_id) {
		this.student_id = student_id;
	}

	public Long getBook_id() {
		return book_id;
	}

	public void setBook_id(Long book_id) {
		this.book_id = book_id;
	}

	public String getIssue_date() {
		return issue_date;
	}

	public void setIssue_date(String issue_date) {
		this.issue_date = issue_date;
	}

	public String getExpiry_date() {
		return expiry_date;
	}

	public void setExpiry_date(String expiry_date) {
		this.expiry_date = expiry_date;
	}

	public String getReturn_date() {
		return return_date;
	}

	public void setReturn_date(String return_date) {
		this.return_date = return_date;
	}

	@Override
	public String toString() {
		return "BorrowedBook [borrowid=" + borrowid + ", student_id=" + student_id + ", book_id=" + book_id
				+ ", issue_date=" + issue_date + ", expiry_date=" + expiry_date + ", return_date=" + return_date + "]";
	}

}
