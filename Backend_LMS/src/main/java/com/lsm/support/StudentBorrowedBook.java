package com.lsm.support;

public class StudentBorrowedBook {
	
	private Long bookid;
	
	private String title;
	
	private String author;
	
	private Long sid;
	
	private String sname;
	
	private String issue_date;
	
	private String expiry_date;

	public StudentBorrowedBook() {
		super();
		// TODO Auto-generated constructor stub
	}

	public StudentBorrowedBook(Long bookid, String title, String author, Long sid, String sname, String issue_date,
			String expiry_date) {
		super();
		this.bookid = bookid;
		this.title = title;
		this.author = author;
		this.sid = sid;
		this.sname = sname;
		this.issue_date = issue_date;
		this.expiry_date = expiry_date;
	}

	public Long getBookid() {
		return bookid;
	}

	public void setBookid(Long bookid) {
		this.bookid = bookid;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public Long getSid() {
		return sid;
	}

	public void setSid(Long sid) {
		this.sid = sid;
	}

	public String getSname() {
		return sname;
	}

	public void setSname(String sname) {
		this.sname = sname;
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

	@Override
	public String toString() {
		return "StudentBorrowedBook [bookid=" + bookid + ", title=" + title + ", author=" + author + ", sid=" + sid
				+ ", sname=" + sname + ", issue_date=" + issue_date + ", expiry_date=" + expiry_date + "]";
	}
	
}
