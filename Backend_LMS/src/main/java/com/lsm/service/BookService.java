package com.lsm.service;

import java.util.List;
import com.lsm.entity.Book;

public interface BookService {
	
	void addbook(Book obj);

	List<Book> getallbooks();

	Book getbookbyid(Long id);

	Book updatebook(Book b);

	Boolean deletebook(Long id);

	Book getbookbybookid(Long bookid);

	Book bookSearch(String ser);

}
