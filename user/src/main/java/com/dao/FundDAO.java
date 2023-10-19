package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Fund;

@Service
public class FundDAO {
	
@Autowired
	
	FundRepository fundRepository;

	public List<Fund> getAllfunds() {
		return fundRepository.findAll();
	}

	public Fund getFundById(int f_Id) {
		return fundRepository.findById(f_Id).orElse(null);
	}
	
//	public Donation getDonationByCustId(int custId) {
//	    List<Donation> donations = donationRepository.findByCustId(custId);
//	    return donations.isEmpty() ? null : donations.get(0);
//	}
	
	public List<Fund> getFundByCustId(int custId) {
	    return fundRepository.findByCustId(custId);
	}

	public Fund registerFund(Fund fund) {
		System.out.println("Fund Register Success");
		return fundRepository.save(fund);
	}
	
	public Fund updateFund(Fund fund) {
		return fundRepository.save(fund);
	}

	public void deleteFundById(int fid) {
		fundRepository.deleteById(fid);
	}

//	public void deleteDonationById(int d_Id) {
//		donationRepository.deleteById(d_Id);
//	}


}
