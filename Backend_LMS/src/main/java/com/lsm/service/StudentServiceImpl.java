package com.lsm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lsm.dao.StudentDao;
import com.lsm.entity.Student;

@Service
public class StudentServiceImpl implements StudentService{

	@Autowired
	private StudentDao sDao;

	@Override
	public Student validate(Student stu) {
		return sDao.validate(stu.getSid(),stu.getSpass());
	}
	
	
	
}
