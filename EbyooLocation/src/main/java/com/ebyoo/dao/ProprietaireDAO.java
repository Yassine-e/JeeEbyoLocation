package com.ebyoo.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ebyoo.beans.Proprietaire;

@Repository
public interface ProprietaireDAO extends JpaRepository<Proprietaire, Long> {
	Proprietaire findByEmail(String email);
	void deleteById(Long id);
	List<Proprietaire> findAll();
	Optional<Proprietaire> findById(Long id);
	/*
	@Modifying
	@Query("UPDATE PROPRIETAIRE p SET p=: prop WHERE p.id=: prop_id ")
	int updateProprietaire(@Param("prop") Proprietaire proprietaire, @Param("prop_id") Long proprietaire_id);*/

}
