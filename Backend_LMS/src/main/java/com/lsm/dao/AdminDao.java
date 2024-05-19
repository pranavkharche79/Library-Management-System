package com.lsm.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.lsm.entity.Admin;

@Repository
public interface AdminDao extends JpaRepository<Admin, Long>{

	@Query(value = "select * from admins where username=? and password=?",nativeQuery = true)
	Admin validate(String username, String password);
	
}
