package com.lsm.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.lsm.entity.Book;

@Repository
public interface BookDao extends JpaRepository<Book, Long> {

	@Query(value = "Select * from books where bookid=?", nativeQuery = true)
	Book getbybookid(Long bookid);

	@Query(value = "SELECT * FROM Books WHERE title LIKE LOWER(CONCAT('%',?,'%')) OR title LIKE LOWER(CONCAT(?,'%')) limit 1", nativeQuery = true)
	Book bookSearch(String ser, char c);

}
