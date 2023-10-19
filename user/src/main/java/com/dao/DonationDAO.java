package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Donation;

@Service
public class DonationDAO {
	
@Autowired
	
	DonationRepository donationRepository;

	public List<Donation> getAlldonations() {
		return donationRepository.findAll();
	}

	public Donation getDonationById(int d_Id) {
		return donationRepository.findById(d_Id).orElse(null);
	}
	
//	public Donation getDonationByCustId(int custId) {
//	    List<Donation> donations = donationRepository.findByCustId(custId);
//	    return donations.isEmpty() ? null : donations.get(0);
//	}
	
	public List<Donation> getDonationsByCustId(int custId) {
	    return donationRepository.findByCustId(custId);
	}


	
	public Donation registerDonation(Donation don) {
		System.out.println("Register Success");
		return donationRepository.save(don);
	}
	
	public Donation updateDonation(Donation don) {
		return donationRepository.save(don);
	}

	public void deleteDonationById(int did) {
		donationRepository.deleteById(did);
	}

//	public void deleteDonationById(int d_Id) {
//		donationRepository.deleteById(d_Id);
//	}


}
