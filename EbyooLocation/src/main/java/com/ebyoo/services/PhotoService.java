package com.ebyoo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ebyoo.beans.Annonce;
import com.ebyoo.beans.Photo;
import com.ebyoo.dao.PhotoDAO;


@Service
public class PhotoService {

	@Autowired
	private PhotoDAO photodao;
	
	@Autowired
	private AnnonceService annonceService;

	public List<Photo> findByAnnonce(Long id) {
		Optional<Annonce> annonce = annonceService.findById(id);
		return photodao.findByAnnonce(annonce);
	}

	public int deleteById(Long id) {
		photodao.deleteById(id);
		return 1;
	}

	public int save(Photo photo) {
		photodao.save(photo);
		return 1;
	}

	public long count() {
		return photodao.count();
	}

	public List<Photo> findAll() {
		return photodao.findAll();
	}
	
	public List<Photo> findPhotoByProprietaire(Long id){
		List<Photo> photos = new ArrayList<>();
		List<Annonce> annonces = annonceService.findByProprietaire(id);
		for(Annonce annonce:annonces) {
			photos.addAll(findByAnnonce(annonce.getId()));
		}
		return photos;
	}
	
	public List<List<Photo>> findStatus0GroupByAnnonce(){
		List<List<Photo>> photos = new ArrayList<>();
		List<Annonce> annonces = annonceService.findByStatus(0);
		List<Photo> ps = findAll();
		photos = annonces.stream().map(a -> ps.stream().filter(p -> p.getAnnonce().equals(a)).toList()).toList();
		return photos;
	}
	
	public List<List<Photo>> findCriteriaGroupByAnnonce(String adresse, String type, Long prixMin, Long prixMax, int chambre ){
		List<List<Photo>> photos = new ArrayList<>();
		List<Annonce> annonces = annonceService.findByCriteria(adresse, type, prixMin, prixMax, chambre);
		List<Photo> ps = findAll();
		photos = annonces.stream().map(a -> ps.stream().filter(p -> p.getAnnonce().equals(a)).toList()).toList();
		return photos;
	}
	
	public List<List<Photo>> findStatus1GroupByAnnonce(){
		List<List<Photo>> photos = new ArrayList<>();
		List<Annonce> annonces = annonceService.findByStatus(1);
		List<Photo> ps = findAll();
		photos = annonces.stream().map(a -> ps.stream().filter(p -> p.getAnnonce().equals(a)).toList()).toList();
		return photos;
	}
	
	public List<List<Photo>> findAllGroupByAnnonce(){
		List<List<Photo>> photos = new ArrayList<>();
		List<Annonce> annonces = annonceService.findAll();
		List<Photo> ps = findAll();
		photos = annonces.stream().map(a -> ps.stream().filter(p -> p.getAnnonce().equals(a)).toList()).toList();
		//String query="SELECT p FROM Photo p, Annonce a WHERE a.proprietaire = '"+id+"' AND p.annonce = a.id GROUP By p.annonce";
		return photos;
	}
	
	public List<List<Photo>> findByPropGroupByAnnonceAll(Long id){
		List<List<Photo>> photos = new ArrayList<>();
		List<Annonce> annonces = annonceService.findByProprietaire(id);
		List<Photo> ps = findAll();
		photos = annonces.stream().map(a -> ps.stream().filter(p -> p.getAnnonce().equals(a)).toList()).toList();
		//String query="SELECT p FROM Photo p, Annonce a WHERE a.proprietaire = '"+id+"' AND p.annonce = a.id GROUP By p.annonce";
		return photos;
	}
	
	
	
}
