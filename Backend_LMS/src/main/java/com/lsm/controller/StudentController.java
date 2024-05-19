package com.lsm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.lsm.entity.Student;
import com.lsm.service.StudentService;

@CrossOrigin
@RestController
@RequestMapping("api/student")
public class StudentController {

	@Autowired
	private StudentService studentService;
	
	@PostMapping
	public ResponseEntity<?> validatestudent(@RequestBody Student stu){
		Student su=studentService.validate(stu);
		if(su!=null) {
			return ResponseEntity.ok(su);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Invalid Credentials");
	}
	
}
