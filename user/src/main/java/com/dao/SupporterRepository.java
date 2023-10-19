package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.model.Supporter;

@Repository
public interface SupporterRepository extends JpaRepository<Supporter, Integer> {

//	@Query("from Supporter s where s.s_firstName = :s_firstName")
//	Supporter findByName(@Param("s_firstName") String supporterName);
	
	@Query("SELECT s FROM Supporter s WHERE s.s_emailId = :emailId")
	Supporter suppoterfindByEmailId(@Param("emailId") String emailId);
	
//	Supporter findByEmailId(String emailId);

	   @Query("SELECT s FROM Supporter s WHERE s.s_emailId = :emailId AND s.s_password = :password")
	    Supporter supporterLogin(@Param("emailId") String emailId, @Param("password") String password);
}