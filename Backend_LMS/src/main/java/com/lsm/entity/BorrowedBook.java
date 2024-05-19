package com.lsm.entity;

import java.util.Date;
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

	private Long student_id;

	private Long book_id;

	@Temporal(TemporalType.DATE)
	private Date issue_date;

	@Temporal(TemporalType.DATE)
	private Date expiry_date;

	@Temporal(TemporalType.DATE)
	private Date return_date;

	public BorrowedBook() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BorrowedBook(Long borrowid, Long student_id, Long book_id, Date issue_date, Date expiry_date,
			Date return_date) {
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

	public Date getIssue_date() {
		return issue_date;
	}

	public void setIssue_date(Date issue_date) {
		this.issue_date = issue_date;
	}

	public Date getExpiry_date() {
		return expiry_date;
	}

	public void setExpiry_date(Date expiry_date) {
		this.expiry_date = expiry_date;
	}

	public Date getReturn_date() {
		return return_date;
	}

	public void setReturn_date(Date return_date) {
		this.return_date = return_date;
	}

	@Override
	public String toString() {
		return "BorrowedBook [borrowid=" + borrowid + ", student_id=" + student_id + ", book_id=" + book_id
				+ ", issue_date=" + issue_date + ", expiry_date=" + expiry_date + ", return_date=" + return_date + "]";
	}

}
