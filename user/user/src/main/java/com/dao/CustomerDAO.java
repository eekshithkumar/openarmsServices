package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
		return customerRepository.findById(custId).orElse(new Customer(null,null,0,null,null,null,null,null));
	}

	public Customer getCustomerByName(String fullName) {
		return customerRepository.getCustById(fullName);
	}


	public Customer registerCustomer(Customer cust) {
		return customerRepository.save(cust);
	}
	
	public Customer updateCustomer(Customer cust) {
		return customerRepository.save(cust);
	}
	
	public void deleteCustomer(int id) {
		customerRepository.deleteById(id);
	}

	public Customer custLogin(String emailId, String password) {
		return customerRepository.custLogin(emailId, password);
	}


}


