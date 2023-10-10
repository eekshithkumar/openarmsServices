package com.ts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.CustomerDAO;
import com.model.Customer;
@RestController
public class CustomerController {
	@Autowired
	CustomerDAO customerRepository;

	@GetMapping("getAllCustomers")
	public List<Customer> getAllCustomers() {
		return customerRepository.getAllCustomers();
	}

	@GetMapping("getCustomerById/{custId}")
	public Customer getCustId(@PathVariable ("custId") int custId) {
		return customerRepository.getCustId(custId);
	}
	
	@GetMapping("findByEmailId/{emailId}")
	public Customer findByEmailId(@PathVariable("emailId") String emailId) {
		return customerRepository.findByEmailId(emailId);
	}

	
	@PostMapping("registerCustomer")
	public Customer registerCustomer(@RequestBody Customer cust) {
		return customerRepository.registerCustomer(cust);
	}
	
	@PutMapping("updateCustomer")
	public Customer updateCustomer(@RequestBody Customer cust) {
		return customerRepository.updateCustomer(cust);
	}
	
	@DeleteMapping("deleteCustomer/{id}")
	public String deleteCustomer(@PathVariable int id) {
		customerRepository.deleteCustomer(id);
		return "Customer Deleted!!";
	}

//	@GetMapping("custLogin/{emailId}/{password}")
//	public Customer custLogin(@PathVariable("emailId") String emailId, @PathVariable("password") String password) {
//		return customerRepository.custLogin(emailId, password);
//	}
	
	@GetMapping("custLogin/{emailId}/{password}")
	public Customer custLogin(@PathVariable("emailId") String emailId, @PathVariable("password") String password) {
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
