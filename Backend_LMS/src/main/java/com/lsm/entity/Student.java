package com.lsm.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Students")
public class Student {

	@Id
	private Long sid;

	private String spass;

	private String sname;

	private Long sfine;

	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Student(Long sid, String spass, String sname, Long sfine) {
		super();
		this.sid = sid;
		this.spass = spass;
		this.sname = sname;
		this.sfine = sfine;
	}

	public Long getSid() {
		return sid;
	}

	public void setSid(Long sid) {
		this.sid = sid;
	}

	public String getSpass() {
		return spass;
	}

	public void setSpass(String spass) {
		this.spass = spass;
	}

	public String getSname() {
		return sname;
	}

	public void setSname(String sname) {
		this.sname = sname;
	}

	public Long getSfine() {
		return sfine;
	}

	public void setSfine(Long sfine) {
		this.sfine = sfine;
	}

	@Override
	public String toString() {
		return "Student [sid=" + sid + ", spass=" + spass + ", sname=" + sname + ", sfine=" + sfine + "]";
	}

}
