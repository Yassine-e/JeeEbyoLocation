package com.ebyoo.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ebyoo.beans.Annonce;
import com.ebyoo.beans.Photo;


@Repository
public interface PhotoDAO extends JpaRepository<Photo, Long> {
	
	List<Photo> findByAnnonce(Optional<Annonce> annonce);
	void deleteById(Long id);
	

}
