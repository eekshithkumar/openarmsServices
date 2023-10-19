package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Donation {

	@Id
	@GeneratedValue
	private int d_Id;
	private String d_type;
	private String address;
	private String dmsg;
	private String dest;
	
	@ManyToOne
	@JoinColumn(name="custId")
	Customer customer;

	public Donation() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Donation(int d_Id, String d_type, String address, String dmsg, String dest, Customer customer) {
		super();
		this.d_Id = d_Id;
		this.d_type = d_type;
		this.address = address;
		this.dmsg = dmsg;
		this.dest = dest;
		this.customer = customer;
	}

	public int getD_Id() {
		return d_Id;
	}

	public void setD_Id(int d_Id) {
		this.d_Id = d_Id;
	}

	public String getD_type() {
		return d_type;
	}

	public void setD_type(String d_type) {
		this.d_type = d_type;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDmsg() {
		return dmsg;
	}

	public void setDmsg(String dmsg) {
		this.dmsg = dmsg;
	}

	public String getDest() {
		return dest;
	}

	public void setDest(String dest) {
		this.dest = dest;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	@Override
	public String toString() {
		return "Donation [d_Id=" + d_Id + ", d_type=" + d_type + ", address=" + address + ", dmsg=" + dmsg + ", dest="
				+ dest + ", customer=" + customer + "]";
	}

	public Donation orElse(Object object) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
}
