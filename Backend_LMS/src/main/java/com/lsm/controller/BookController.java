package com.lsm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lsm.entity.Book;
import com.lsm.service.BookService;

@CrossOrigin
@RestController
@RequestMapping("api/book")
public class BookController {

	@Autowired
	private BookService bService;
	
	@GetMapping
	public ResponseEntity<?> getallbooks() {
		return ResponseEntity.ok(bService.getallbooks());
	}
	
	@PostMapping
	public ResponseEntity<?> addbook(@RequestBody Book book){
		Book b=bService.getbookbybookid(book.getBookid());
		if(b!=null) {
			 return ResponseEntity.status(HttpStatus.CONFLICT).body("Book ID already present");
		}
		bService.addbook(book);
		return ResponseEntity.ok("Book Added Successfully");
	}
	
	@GetMapping("/bookid/{id}")
	public ResponseEntity<?> getbookbybookid(@PathVariable Long id){
		Book book=bService.getbookbybookid(id);
		if(book!=null) {
			return ResponseEntity.ok(book);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Book ID Not Present");
	}
	
	@PutMapping
	public ResponseEntity<?> updateBook(@RequestBody Book book){
		System.out.println(book);
		return ResponseEntity.ok(bService.updatebook(book));
	}
	
	@GetMapping("/search")
	public ResponseEntity<?> bookSearch(@RequestParam("title") String ser){
		System.out.println(ser);
		Book book=bService.bookSearch(ser);
		if(book!=null) {
			return ResponseEntity.ok(book);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Book Not Found");
	}
	
}
