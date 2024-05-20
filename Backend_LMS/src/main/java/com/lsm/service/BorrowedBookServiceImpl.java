package com.lsm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lsm.dao.BorrowedBookDao;
import com.lsm.entity.BorrowedBook;
import com.lsm.support.StudentBorrowedBook;

@Service
public class BorrowedBookServiceImpl implements BorrowedBookService{
	
	@Autowired
	private BorrowedBookDao bDao;

	@Override
	public void saveBorrowedBook(BorrowedBook bbook) {
		bDao.save(bbook);
	}

	@Override
	public BorrowedBook getborrowbookbystuid(Long student_id) {
		return bDao.getborrowbookbystuid(student_id);
	}

	@Override
	public Object getAllDetailsByStuid(Long sid) {
		return bDao.getAllDetailsByStuid(sid);
	}

	@Override
	public Long getCountOfBookBorrowed(Long bookid) {
		return bDao.getCountOfBookBorrowed(bookid);
	}
	
	

}
