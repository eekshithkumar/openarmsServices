package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.model.Supporter;

@Service
public class SuppoterDAO {

	@Autowired
	
	SupporterRepository supportedRepository;

	public List<Supporter> getAllsupporters() {
		return supportedRepository.findAll();
	}

	public Supporter getSupporterId(int s_Id) {
		return supportedRepository.findById(s_Id).orElse(null);
	}
	
	public Supporter suppoterfindByEmailId(String emailId) {
		return supportedRepository.suppoterfindByEmailId(emailId);
	}
	
	public Supporter registerSupporter(Supporter sup) {
		BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
		String encryptedPwd = bcrypt.encode(sup.getS_password());
		sup.setS_password(encryptedPwd);
		System.out.println("Register Success");
		
		return supportedRepository.save(sup);
	}
	
	public Supporter updateSupporter(Supporter sup) {
		return supportedRepository.save(sup);
	}
	
	public void deleteSupporter(int id) {
		supportedRepository.deleteById(id);
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
	
	public Supporter supporterLogin(String emailId, String password) {
		Supporter supporter = supportedRepository.suppoterfindByEmailId(emailId);
	    if (supporter != null) {
	        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
	        if (bcrypt.matches(password, supporter.getS_password())) {
	            return supporter;
	        }
	    }
	    return null; // Return null if login fails
	}}