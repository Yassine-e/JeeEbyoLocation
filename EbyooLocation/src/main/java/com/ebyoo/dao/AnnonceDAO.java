package com.ebyoo.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ebyoo.beans.Annonce;
import com.ebyoo.beans.Proprietaire;


@Repository
public interface AnnonceDAO extends JpaRepository<Annonce, Long> {

	List<Annonce> findByProprietaire(Optional<Proprietaire> prop);
	
	void deleteById(Long id);
	List<Annonce> findByStatus(int status);
	
	List<Annonce> findByMonth(int month);
	
	//Optional<Annonce> findById(Long id);
	
	
	//Annonce findById(Long id);
	//Optional<Annonce> findById(Long id);
	
	/*
	@Modifying
	@Query("UPDATE ANNONCE a SET a.type=: type, "
			+ "a.etat =: etat, "
			+ "a.adresse =: adresse, "
			+ "a.region =: region, "
			+ "a.ville=: ville, "
			+ "a.surface=: surface, "
			+ "a.prix=: prix, "
			+ "a.etage=: etage, "
			+ "a.chambre=: chambre, "
			+ "a.salledebain =: salledebain, "
			+ "a.piece=: piece, "
			+ "a.titre =: titre, "
			+ "a.description =: description, "
			+ "a.numtel =: numtel"
			+ "WHERE a.id =:id")
	int updateAnnonce(@Param("type") String type, 
			@Param("etat") String etat, 
			@Param("adresse") String adresse,
			@Param("region") String region,
			@Param("ville") String ville,
			@Param("surface") String surface,
			@Param("prix") String prix,
			@Param("etage") String etage,
			@Param("chambre") String chambre,
			@Param("salledebain") String salledebain,
			@Param("piece") String piece,
			@Param("titre") String titre,
			@Param("description") String description,
			@Param("numtel") String numtel,
			@Param("id") String id);
	*/
	/*@Modifying
	@Query("UPDATE ANNONCE a SET a=: ann WHERE a.id=: ann_id ")
	int updateAnnonce(@Param("ann") Annonce ann, @Param("ann_id") Long annonce_id);*/
	
}
