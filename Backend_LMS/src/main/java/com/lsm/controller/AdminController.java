package com.lsm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lsm.entity.Admin;
import com.lsm.service.AdminService;

@CrossOrigin
@RestController
@RequestMapping("api/admin")
public class AdminController {
	
	@Autowired
	private AdminService aService;
	
	@PostMapping
	public ResponseEntity<?> validateadmin(@RequestBody Admin a){
		Admin admin=aService.validate(a);
		if(admin!=null) {
			return ResponseEntity.ok(admin);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Invalid Credentials");
	}
	
}
