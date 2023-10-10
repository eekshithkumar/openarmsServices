package com.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.model.Customer;
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer > {
	
	Customer findByEmailId(String emailId);
//	@Query("from Customer e where e.emailId = :emailId")
//	Customer findByEmailId(@Param("emailId") String emailId);

	
	@Query("from Customer c where c.emailId = :emailId and c.password = :password")
	Customer custLogin(@Param("emailId") String emailId, @Param("password") String password);

}
