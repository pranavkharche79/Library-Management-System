package com.lsm.service;

import com.lsm.entity.BorrowedBook;
import com.lsm.support.StudentBorrowedBook;

public interface BorrowedBookService {

	void saveBorrowedBook(BorrowedBook bbook);

	BorrowedBook getborrowbookbystuid(Long student_id);

	Object getAllDetailsByStuid(Long sid);

	Long getCountOfBookBorrowed(Long bookid);

}
