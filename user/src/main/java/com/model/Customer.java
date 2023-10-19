package com.model;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity

public class Customer {

	@Id
	@GeneratedValue
	private int custId;
	private String firstName;
	private String lastName;
	private String gender;
	private String country;
	private String emailId;
	private String password;
	private Date dob;
	private String phone;

	 @JsonIgnore
	 @OneToMany(mappedBy = "customer")
	 List<Donation> donList = new ArrayList<Donation>();
	 
	 @JsonIgnore
	 @OneToMany(mappedBy = "customer")
	 List<Fund> fundList = new ArrayList<Fund>();

	public List<Fund> getFundList() {
		return fundList;
	}

	public void setFundList(List<Fund> fundList) {
		this.fundList = fundList;
	}

	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Customer(int custId, String firstName, String lastName, String gender, String country, String emailId,
			String password, Date dob, String phone) {
		super();
		this.custId = custId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.country = country;
		this.emailId = emailId;
		this.password = password;
		this.dob = dob;
		this.phone = phone;
	}

	public int getCustId() {
		return custId;
	}

	public void setCustId(int custId) {
		this.custId = custId;
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

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
	

	public List<Donation> getDonList() {
		return donList;
	}

	public void setDonList(List<Donation> donList) {
		this.donList = donList;
	}
	

}