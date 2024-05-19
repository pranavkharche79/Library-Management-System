package com.lsm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lsm.dao.AdminDao;
import com.lsm.entity.Admin;

@Service
public class AdminServiceImpl implements AdminService{
	
	@Autowired
	private AdminDao aDao;

	@Override
	public Long count() {
		return aDao.count();
	}

	@Override
	public void createadmin() {
		Admin admin=new Admin();
		admin.setUsername("Admin");
		admin.setPassword("Admin");
		aDao.save(admin);
	}

	@Override
	public Admin validate(Admin a) {
		return aDao.validate(a.getUsername(),a.getPassword());
	}
	
	
}
