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

import com.dao.SuppoterDAO;
import com.model.Supporter;
@RestController
public class SuppoterController {
	@Autowired
	SuppoterDAO supportorRepository;

	@GetMapping("getAllSupporters")
	public List<Supporter> getAllSupporters() {
		return supportorRepository.getAllsupporters();
	}

	@GetMapping("getSupporterById/{s_Id}")
	public Supporter getS_Id(@PathVariable ("s_Id") int s_Id) {
		return supportorRepository.getSupporterId(s_Id);
	}
	
	@GetMapping("suppoterfindByEmailId/{emailId}")
	public Supporter findByEmailId(@PathVariable("emailId") String emailId) {
		return supportorRepository.suppoterfindByEmailId(emailId);
	}

	
	@PostMapping("registerSupporter")
	public Supporter registerSupporter(@RequestBody Supporter sup) {
		return supportorRepository.registerSupporter(sup);
	}
	
	@PutMapping("updateSupporter")
	public Supporter updateSupporter(@RequestBody Supporter sup) {
		return supportorRepository.updateSupporter(sup);
	}
	
	@DeleteMapping("deleteSupporter/{id}")
	public String deleteSupporter(@PathVariable int id) {
		supportorRepository.deleteSupporter(id);
		return "Supporter Deleted!!";
	}

//	@GetMapping("custLogin/{emailId}/{password}")
//	public Customer custLogin(@PathVariable("emailId") String emailId, @PathVariable("password") String password) {
//		return customerRepository.custLogin(emailId, password);
//	}
	
	@GetMapping("supporterLogin/{emailId}/{password}")
	public Supporter supporterLogin(@PathVariable("emailId") String emailId, @PathVariable("password") String password) {
		Supporter supporter = supportorRepository.suppoterfindByEmailId(emailId);
	    if (supporter != null) {
	        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
	        if (bcrypt.matches(password, supporter.getS_password())) {
	            return supporter;
	        }
	    }
	    return null; // Return null if login fails
	}
		
}
