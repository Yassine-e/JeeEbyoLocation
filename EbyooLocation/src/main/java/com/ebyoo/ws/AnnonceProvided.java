package com.ebyoo.ws;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ebyoo.beans.Annonce;
import com.ebyoo.beans.Proprietaire;
import com.ebyoo.services.AnnonceService;
import com.ebyoo.services.ProprietaireService;

@RestController
@CrossOrigin
@RequestMapping(value="annonce")
public class AnnonceProvided {
	
	@Autowired
	public AnnonceService annonceservice;
	
	@Autowired
	public ProprietaireService proprietaireService;
	
	@Autowired
	public PhotoProvided photoprovided;
	
	@GetMapping("/pa/all")
	public List<Annonce> findAll() {
		return annonceservice.findAll();
	}
	@GetMapping("/ap/prop/{proprietaire}")
	public List<Annonce> findByProprietaire(@PathVariable("proprietaire") Long proprietaire) {
		return annonceservice.findByProprietaire(proprietaire);
	}
	@DeleteMapping("/ap/del/id/{id}")
	public int deleteById(@PathVariable("id") Long id) {
		annonceservice.deleteById(id);
		return 1;
	}
	
	@PostMapping("/ap/id/{idProp}")
	public int save(Annonce annonce, @RequestParam(value="files", required=false) MultipartFile[] files,@PathVariable("idProp") Long idProp) {
		Calendar cal = Calendar.getInstance();
		int mois = Integer.parseInt(new SimpleDateFormat("MM").format(cal.getTime())) ;
		annonce.setMonth(mois);
		Proprietaire prop = proprietaireService.findById(idProp).get();
		annonce.setProprietaire(prop);
		System.out.println("BEFORE SAVE");
		annonceservice.save(annonce);
		System.out.println("SAVED");
		List<Annonce> annonces = annonceservice.findAll();
		for(Annonce ann:annonces) {
			if(ann==annonce) {
				photoprovided.upload(files, ann.getId());
				System.out.println("KHDEM");
				return 1;
			}
		}
		return 0;
	}
	
	@GetMapping("/a/count")
	public long count() {
		return annonceservice.count();
	}
	
	@GetMapping("/id/{id}")
	public Optional<Annonce> findById(@PathVariable("id") Long id) {
		return annonceservice.findById(id);
	}
	
	@PutMapping("/ap/update/id/{id}")
	public int updateAnnonce(@RequestBody Annonce annonce, @PathVariable("id") Long id) {
		Calendar cal = Calendar.getInstance();
		int mois = Integer.parseInt(new SimpleDateFormat("MM").format(cal.getTime())) ;
		annonce.setMonth(mois);
		annonceservice.updateAnnonce(annonce, id);
//		photoprovided.upload(files, id);
		return 1;
		
	}
	
	@GetMapping("/pa/filtre/adresse/{adresse}/type/{type}/prixMin/{prixMin}/prixMax/{prixMax}/chambre/{chambre}")
	public List<Annonce> findByCriteria(@PathVariable(value="adresse", required = false) String adresse,@PathVariable(value="type", required = false) String type,@PathVariable(value="prixMin", required = false) Long prixMin,@PathVariable(value="prixMax", required = false) Long prixMax,@PathVariable(value="chambre", required = false) int chambre) {
		return annonceservice.findByCriteria(adresse, type, prixMin, prixMax, chambre);
	}
	
	
	@GetMapping("/pa/findstatus1")
	public List<Annonce> findByStatus() {
		return annonceservice.findByStatus(1);
	}
	
	@GetMapping("/a/findstatus0")
	public List<Annonce> findByStatus0() {
		return annonceservice.findByStatus(0);
	}
	
	@GetMapping("/a/accepter/{id}")
	public int accepterAnnonce(@PathVariable("id") Long id) {
		Annonce annonce = annonceservice.findById(id).get();
		if(annonce!=null) {
			annonce.setStatus(1);
			annonceservice.updateAnnonce(annonce, id);
			return 1;
		}
		return 0;
	}
	
	@GetMapping("/a/refuser/{id}")
	public int refuserAnnonce(@PathVariable("id") Long id) {
		Annonce annonce = annonceservice.findById(id).get();
		if(annonce!=null) {
			annonceservice.deleteById(id);
			return 1;
		}
		return 0;
	}
	
	@GetMapping("/a/countbymonth")
	public int countAnnoncesByMonth() {
		Calendar cal = Calendar.getInstance();
		int mois = Integer.parseInt(new SimpleDateFormat("MM").format(cal.getTime())) ;
		System.out.println("----------------- "+mois);
		return annonceservice.countAnnoncesByMonth(mois);
	}


}
