package com.ts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.DonationDAO;
import com.model.Donation;

@RestController
public class DonationController {
	
	
	@Autowired
	DonationDAO donationRepository;

	@GetMapping("getAlldonations")
	public List<Donation> getAlldonations() {
		return donationRepository.getAlldonations();
	}

	@GetMapping("getDonationById/{d_id}")
	public Donation getS_Id(@PathVariable ("d_id") int d_Id) {
		return donationRepository.getDonationById(d_Id);
	}
	
//	@GetMapping("getDonationByCustId/{custId}")
//	public Donation getCustomer(@PathVariable("custId") int customerId) {
//	    return donationRepository.getDonationByCustId(customerId);
//	}

	@GetMapping("getDonationsByCustId/{custId}")
	public List<Donation> getDonationsByCustId(@PathVariable("custId") int customerId) {
	    return donationRepository.getDonationsByCustId(customerId);
	}

	
	@PostMapping("registerDonation")
	public Donation registerSupporter(@RequestBody Donation don) {
		return donationRepository.registerDonation(don);
	}
	
	@PutMapping("updateDonation")
	public Donation updateDonation(@RequestBody Donation don) {
		return donationRepository.updateDonation(don);
	}
	
	@DeleteMapping("deleteDonationById/{d_Id}")
	public void deleteDonationById(@PathVariable("d_Id")  int did) {
		donationRepository.deleteDonationById(did);
	}

}
