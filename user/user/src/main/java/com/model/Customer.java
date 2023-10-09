package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity

public class Customer {

	

	private String firstName;
	private String lastName;
	private String fullName;
	@Id
	@GeneratedValue
	private int custId;
	private String gender;
	private String country;
	private String emailId;
	private String password; 
	private String dob;


	public Customer(){

	}


	public Customer(String firstName, String lastName,int custId, String gender, String country, String emailId,
			String password, String dob) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.custId = custId;
		this.gender = gender;
		this.country = country;
		this.emailId = emailId;
		this.password = password;
		this.dob = dob;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getFullName(){
		return firstName + " " + lastName;
	}
	public int getCustId() {
		return custId;
	}


	public void setCustId(int custId) {
		this.custId = custId;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getCountry() {
		return country;
	}


	public void setCountry(String country) {
		this.country = country;
	}


	public String getEmailId() {
		return emailId;
	}


	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getDob() {
		return dob;
	}


	public void setDob(String dob) {
		this.dob = dob;
	}


	@Override
	public String toString() {
		return "Customer [firstName=" + firstName + ", lastName=" + lastName +" fullName = " + fullName +" , custId=" + custId + ", gender=" + gender
				+ ", country=" + country + ", emailId=" + emailId + ", password=" + password + ", dob=" + dob + "]";
	}

}