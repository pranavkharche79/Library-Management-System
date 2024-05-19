package com.lsm.service;

import com.lsm.entity.Admin;

public interface AdminService {

	Long count();

	void createadmin();

	Admin validate(Admin a);

}
