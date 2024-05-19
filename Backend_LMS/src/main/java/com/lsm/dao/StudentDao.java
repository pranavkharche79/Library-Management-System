package com.lsm.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.lsm.entity.Student;

public interface StudentDao extends JpaRepository<Student,Long>{

	@Query(value = "select * from students where sid=? and spass=?",nativeQuery = true)
	Student validate(Long sid, String spass);

}
