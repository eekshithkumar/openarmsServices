package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Fund {

	@Id
	@GeneratedValue
	private int f_Id;
	private int f_amount;
	private String fmsg;
	private String fdest;
	
	@ManyToOne
	@JoinColumn(name="custId")
	Customer customer;

	public Fund() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Fund(int f_Id, int f_amount, String fmsg, String fdest, Customer customer) {
		super();
		this.f_Id = f_Id;
		this.f_amount = f_amount;
		this.fmsg = fmsg;
		this.fdest = fdest;
		this.customer = customer;
	}

	public int getF_Id() {
		return f_Id;
	}

	public void setF_Id(int f_Id) {
		this.f_Id = f_Id;
	}

	public int getF_amount() {
		return f_amount;
	}

	public void setF_amount(int f_amount) {
		this.f_amount = f_amount;
	}

	public String getFmsg() {
		return fmsg;
	}

	public void setFmsg(String fmsg) {
		this.fmsg = fmsg;
	}

	public String getFdest() {
		return fdest;
	}

	public void setFdest(String fdest) {
		this.fdest = fdest;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	@Override
	public String toString() {
		return "Fund [f_Id=" + f_Id + ", f_amount=" + f_amount + ", fmsg=" + fmsg + ", fdest=" + fdest + ", customer="
				+ customer + "]";
	}
	
	
	public Fund orElse(Object object) {
		// TODO Auto-generated method stub
		return null;
	}
}
