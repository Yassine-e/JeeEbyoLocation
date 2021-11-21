package com.ebyoo.services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ebyoo.beans.Annonce;
import com.ebyoo.beans.Photo;
import com.ebyoo.beans.Proprietaire;
import com.ebyoo.dao.AnnonceDAO;

@Service
public class AnnonceService {

	@Autowired
	private AnnonceDAO annoncedao;
	
	@Autowired
	private PhotoService photoService ;
	
	@Autowired
	private EntityManager entityManager;

	@Autowired
	private ProprietaireService proprietaireservice;
	
	/*public Optional<Annonce> findById(Long id) {
		return annoncedao.findById(id);
	}*/
	
	
	
	
	public List<Annonce> findAll() {
		return annoncedao.findAll();
	}

	public Optional<Annonce> findById(Long id) {
		return annoncedao.findById(id);
	}

	public List<Annonce> findByProprietaire(Long proprietaire) {
		Optional<Proprietaire> prop = proprietaireservice.findById(proprietaire);
		return annoncedao.findByProprietaire(prop);
	}
	
	

//	public int deleteById(Long id) {
//		annoncedao.deleteById(id);
//		return 1;
//	}
	
	public List<Annonce> deleteById(Long id) {
		List<Photo> photos = photoService.findByAnnonce(id);
		Long idProp = findById(id).get().getProprietaire().getId();
		for(Photo photo: photos) {
			photoService.deleteById(photo.getId());
		}
		annoncedao.deleteById(id);
		return findByProprietaire(idProp);
	}

	public int save(Annonce annonce) {
//		if(annonce.getAdresse()!=null && annonce.getNumTel()!=null && annonce.getTitre()!=null) {
			annoncedao.save(annonce);
			return 1;
//		}
//		return 0;
	}

	public long count() {
		return annoncedao.count();
	}
	
	public void updateAnnonce(Annonce annonce, Long id) {
		Annonce ann = findById(id).get();
		ann = annonce;
		save(ann);
	}
	
	public List<Annonce> findByCriteria(String adresse, String type, Long prixMin, Long prixMax, int chambre){
		String query="SELECT a FROM Annonce a WHERE a.status=1 ";
		if(adresse !=null && adresse.isEmpty() && adresse !="null" ) {
			query+=" AND a.adresse = '" + adresse+" '";
		}
		if(type!=null && type.isEmpty() && type !="null" ) {
			query+=" AND a.type = '" + type+" '";
		}
		if(chambre!=0) {
			query+=" AND a.chambre = '" + chambre+" '";
		}
		if(prixMin!=null && prixMin!=0) {
			query+=" AND a.prix >= '" + prixMin+" '";
		}
		if(prixMax!=null && prixMax!=0) {
			query+=" AND a.prix <= '" + prixMax+" '";
		}
		
		return entityManager.createQuery(query).getResultList();
	}
	
//	public List<Annonce> findByCriteria(String adresse, String type, Long prixMin, Long prixMax, int chambre){
//		String query="SELECT a FROM Annonce a WHERE 1=1 ";
//		if(adresse !=null && adresse.isEmpty() && adresse !="null" ) {
//			query+=" AND a.adresse = '" + adresse+" '";
//		}
//		if(type!=null && type.isEmpty() && type !="null" ) {
//			query+=" AND a.type = '" + type+" '";
//		}
//		if(chambre!=0) {
//			query+=" AND a.chambre = '" + chambre+" '";
//		}
//		if(prixMin!=null && prixMin!=0) {
//			query+=" AND a.prix >= '" + prixMin+" '";
//		}
//		if(prixMax!=null && prixMax!=0) {
//			query+=" AND a.prix <= '" + prixMax+" '";
//		}
//		
//		return entityManager.createQuery(query).getResultList();
//	}

	public List<Annonce> findByStatus(int status) {
		return annoncedao.findByStatus(status);
	}
	
	
	
	public List<Annonce> findByMonth(int month) {
		return annoncedao.findByMonth(month);
	}

	public int countAnnoncesByMonth(int month) {
		List<Annonce> ann = findByMonth(month);
		int number = ann.size();
		return number;
	}
	
	
}
