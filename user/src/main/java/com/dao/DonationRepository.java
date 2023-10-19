package com.dao;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.Donation;


public interface DonationRepository extends JpaRepository <Donation, Integer>{

//	@Query("from Donation where custId = :cust_id")
//	Donation findByCustId(@Param("cust_id") int customerId);
	
	@Query("from Donation where customer.custId = :cust_id")
	List<Donation> findByCustId(@Param("cust_id") int customerId);
	
	


	
}
