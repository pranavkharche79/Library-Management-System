package com.lsm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.lsm.entity.BorrowedBook;
import com.lsm.service.BorrowedBookService;

@CrossOrigin
@RestController
@RequestMapping("api/borrow")
public class BorrowedBookController {
	
	@Autowired
	private BorrowedBookService bbService;
	
	@PostMapping
	public ResponseEntity<?> saveBorrowedBook(@RequestBody BorrowedBook bbook){
		BorrowedBook obj=bbService.getborrowbookbystuid(bbook.getStudent_id());
		if(obj!=null) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("First Reture Purchased Book");
		}
		bbService.saveBorrowedBook(bbook);
		return ResponseEntity.ok("Book Borrowed Successfully");
	}
	
	@GetMapping("{id}")
	public ResponseEntity<?> getBorrowedbookbystuid(@PathVariable("id") Long sid){
		Object details=bbService.getAllDetailsByStuid(sid);
		if(details!=null) {
			return ResponseEntity.ok(details);			
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Book Purchased Yet");
	}
	
	@GetMapping("count/{id}")
	public ResponseEntity<?> getCountOfBookBorrowed(@PathVariable("id") Long bookid){
		Long count=bbService.getCountOfBookBorrowed(bookid);
		return ResponseEntity.ok(count);
	}

}
