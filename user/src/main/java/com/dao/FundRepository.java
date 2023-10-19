package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.Fund;

public interface FundRepository extends JpaRepository <Fund, Integer>{
	
	
	@Query("from Fund where customer.custId = :cust_id")
	List<Fund> findByCustId(@Param("cust_id") int customerId);
	

}
