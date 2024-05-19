package com.lsm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lsm.dao.BookDao;
import com.lsm.entity.Book;

@Service
public class BookServiceImpl implements BookService{
	
	@Autowired
	private BookDao bDao;

	@Override
	public void addbook(Book obj) {
		bDao.save(obj);
	}

	@Override
	public List<Book> getallbooks() {
		return bDao.findAll();
	}

	@Override
	public Book getbookbyid(Long id) {
		return bDao.findById(id).orElse(null);
	}

	@Override
	public void updatebook(Book b) {
		bDao.save(b);
	}

	@Override
	public Boolean deletebook(Long id) {
		Book book=getbookbyid(id);
		if (book!=null) {
			bDao.delete(book);
			return true;
		}
		return false;
	}

	@Override
	public Book getbookbybookid(Long bookid) {
		return bDao.getbybookid(bookid);
	}
	
	
	
}
