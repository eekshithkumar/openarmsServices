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

import com.dao.FundDAO;
import com.model.Fund;

@RestController
public class FundController {
	
	
	@Autowired
	FundDAO FundRepository;

	@GetMapping("getAllfunds")
	public List<Fund> getAllfunds() {
		return FundRepository.getAllfunds();
	}

	@GetMapping("getFundById/{d_id}")
	public Fund getS_Id(@PathVariable ("d_id") int d_Id) {
		return FundRepository.getFundById(d_Id);
	}
	
//	@GetMapping("getDonationByCustId/{custId}")
//	public Donation getCustomer(@PathVariable("custId") int customerId) {
//	    return donationRepository.getDonationByCustId(customerId);
//	}

	@GetMapping("getFundByCustId/{custId}")
	public List<Fund> getFundByCustId(@PathVariable("custId") int customerId) {
	    return FundRepository.getFundByCustId(customerId);
	}

	
	@PostMapping("registerFund")
	public Fund registerFund(@RequestBody Fund fund) {
		return FundRepository.registerFund(fund);
	}
	
	@PutMapping("updateFund")
	public Fund updateFund(@RequestBody Fund fund) {
		return FundRepository.updateFund(fund);
	}
	
	@DeleteMapping("deleteFundById/{d_Id}")
	public void deleteDonationById(@PathVariable("f_Id")  int fid) {
		FundRepository.deleteFundById(fid);
	}

}
