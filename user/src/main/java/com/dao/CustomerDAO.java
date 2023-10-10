package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.model.Customer;

@Service
public class CustomerDAO {

	@Autowired
	
	CustomerRepository customerRepository;

	public List<Customer> getAllCustomers() {
		return customerRepository.findAll();
	}

	public Customer getCustId(int custId) {
		return customerRepository.findById(custId).orElse(null);
	}
	
	public Customer findByEmailId(String emailId) {
		return customerRepository.findByEmailId(emailId);
	}
	
	public Customer registerCustomer(Customer cust) {
		BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
		String encryptedPwd = bcrypt.encode(cust.getPassword());
		cust.setPassword(encryptedPwd);
		System.out.println("Register Success");
		
		return customerRepository.save(cust);
	}
	
	public Customer updateCustomer(Customer cust) {
		return customerRepository.save(cust);
	}
	
	public void deleteCustomer(int id) {
		customerRepository.deleteById(id);
	}
	
//	public Customer custLogin(String emailId, String password) {
//		return customerRepository.custLogin(emailId, password);
//	}
	
//	public Customer custLogin(String emailId, String password) {
//		  BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//		  String encodedPassword = passwordEncoder.encode(password);
//		  boolean isPasswordMatch = passwordEncoder.matches(password, encodedPassword);
//
//		  if (isPasswordMatch == true) {
//		    return customerRepository.custLogin(emailId, password);
//		  } else {
//		    return null;
//		  }
//		}
	
	public Customer custLogin(String emailId, String password) {
	    Customer customer = customerRepository.findByEmailId(emailId);
	    if (customer != null) {
	        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
	        if (bcrypt.matches(password, customer.getPassword())) {
	            return customer;
	        }
	    }
	    return null; // Return null if login fails
	}


}
	

