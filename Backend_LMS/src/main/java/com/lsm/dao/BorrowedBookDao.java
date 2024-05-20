package com.lsm.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.lsm.entity.BorrowedBook;

@Repository
public interface BorrowedBookDao extends JpaRepository<BorrowedBook, Long> {

	@Query(value = "Select * from borrowedbooks where student_id=?", nativeQuery = true)
	BorrowedBook getborrowbookbystuid(Long student_id);

	@Query(value = "SELECT b.bookid, b.title, b.author, s.sid, s.sname, bb.issue_date, bb.expiry_date "
			+ "FROM books b " + "JOIN borrowedbooks bb ON b.bookid = bb.book_id "
			+ "JOIN students s ON s.sid = bb.student_id " + "WHERE bb.student_id = :sid "
			+ "LIMIT 1", nativeQuery = true)
	Object getAllDetailsByStuid(@Param("sid") Long sid);

	@Query(value = "Select count(*) from borrowedbooks where book_id=?",nativeQuery = true)
	Long getCountOfBookBorrowed(Long bookid);

}
