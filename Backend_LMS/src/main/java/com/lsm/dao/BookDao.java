package com.lsm.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.lsm.entity.Book;

@Repository
public interface BookDao extends JpaRepository<Book, Long> {

	@Query(value = "Select * from books where bookid=?", nativeQuery = true)
	Book getbybookid(Long bookid);

}
