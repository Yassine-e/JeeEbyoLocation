package com.ebyoo.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ebyoo.beans.Annonce;
import com.ebyoo.beans.Client;
import com.ebyoo.beans.Proprietaire;


@Repository
public interface ClientDAO extends JpaRepository<Client, Long> {
	List<Client> findByAnnonces(Optional<Annonce> ann);
	void deleteById(Long id);
	Client findByNumtelAndEmailAndAnnonces(String numtel, String mail, Optional<Annonce> ann);
	//List<Client> findByProprietaire(Optional<Proprietaire> proprietaire);
}
