package com.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
@Entity

public class Supporter{

	@Id
	@GeneratedValue
	private int s_Id;
	private String s_firstName;
	private String s_lastName;
	private double s_salary;
	private String s_gender;
	private String s_country;
	private String s_emailId;
	private String s_password; 
	private Date s_dob;
	private Date s_doj;
	private String s_phone;
	
	
	public Supporter() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Supporter(int s_Id, String s_firstName, String s_lastName, double s_salary, String s_gender,
			String s_country, String s_emailId, String s_password, Date s_dob, Date s_doj, String s_phone) {
		super();
		this.s_Id = s_Id;
		this.s_firstName = s_firstName;
		this.s_lastName = s_lastName;
		this.s_salary = s_salary;
		this.s_gender = s_gender;
		this.s_country = s_country;
		this.s_emailId = s_emailId;
		this.s_password = s_password;
		this.s_dob = s_dob;
		this.s_doj = s_doj;
		this.s_phone = s_phone;
	}


	public int getS_Id() {
		return s_Id;
	}


	public void setS_Id(int s_Id) {
		this.s_Id = s_Id;
	}


	public String getS_firstName() {
		return s_firstName;
	}


	public void setS_firstName(String s_firstName) {
		this.s_firstName = s_firstName;
	}


	public String getS_lastName() {
		return s_lastName;
	}


	public void setS_lastName(String s_lastName) {
		this.s_lastName = s_lastName;
	}


	public double getS_salary() {
		return s_salary;
	}


	public void setS_salary(double s_salary) {
		this.s_salary = s_salary;
	}


	public String getS_gender() {
		return s_gender;
	}


	public void setS_gender(String s_gender) {
		this.s_gender = s_gender;
	}


	public String getS_country() {
		return s_country;
	}


	public void setS_country(String s_country) {
		this.s_country = s_country;
	}


	public String getS_emailId() {
		return s_emailId;
	}


	public void setS_emailId(String s_emailId) {
		this.s_emailId = s_emailId;
	}


	public String getS_password() {
		return s_password;
	}


	public void setS_password(String s_password) {
		this.s_password = s_password;
	}


	public Date getS_dob() {
		return s_dob;
	}


	public void setS_dob(Date s_dob) {
		this.s_dob = s_dob;
	}


	public Date getS_doj() {
		return s_doj;
	}


	public void setS_doj(Date s_doj) {
		this.s_doj = s_doj;
	}


	public String getS_phone() {
		return s_phone;
	}


	public void setS_phone(String s_phone) {
		this.s_phone = s_phone;
	}
	
}