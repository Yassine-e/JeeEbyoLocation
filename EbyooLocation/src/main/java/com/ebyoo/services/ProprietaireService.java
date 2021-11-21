package com.ebyoo.services;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.ebyoo.beans.Annonce;
import com.ebyoo.beans.Proprietaire;
import com.ebyoo.dao.ProprietaireDAO;
import com.ebyoo.proprietaire.details.ProprietairePrincipal;

@Service
public class ProprietaireService implements UserDetailsService {

	@Autowired
	private ProprietaireDAO proprietairedao;
	
	@Autowired
	private AnnonceService annonceService;

	public Proprietaire findByEmail(String email) {
		return proprietairedao.findByEmail(email);
	}
	
//	public int login(Proprietaire proprietaire) {
//		Proprietaire prop = findByEmail(proprietaire.getEmail());
//		if(prop==null) {
//			// email inexistent
//			return 0;
//		}
//		else if(!(prop.getPassword()).equals(proprietaire.getPassword())) {
//			//password incorrect
//			return 2;
//		}else {
//			// log
//			return 1;
//		}
//	}
	
	public Proprietaire login(Proprietaire proprietaire) {
		Proprietaire prop = findByEmail(proprietaire.getEmail());
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(); 
		Proprietaire propNull = new Proprietaire();
		if(prop==null) {
			// email inexistent - returns nothing
			propNull.setAdresse(null);
			return propNull;
		}else {
			if(!encoder.matches(proprietaire.getPassword(), prop.getPassword())) {
				//password incorrect - returns 1 annonce with null values
				propNull.setAdresse(null);
				return propNull;
				
			}else {
				// log - return all users annonces
				return prop;
			}
		}
		
	}
	
//	public int deleteById(Long id) {
//	proprietairedao.deleteById(id);
//	return 1;
//}
	
	public int deleteById(Long id) {
		List<Annonce> annonces = annonceService.findByProprietaire(id);
		for(Annonce annonce:annonces) {
			annonceService.deleteById(annonce.getId());
		}
		proprietairedao.deleteById(id);
		return 1;
	}

	public List<Proprietaire> findAll() {
		return proprietairedao.findAll();
	}

	public int save(Proprietaire proprietaire) {
		proprietairedao.save(proprietaire);
		return 1;
	}

	public long count() {
		return proprietairedao.count();
	}

	public Optional<Proprietaire> findById(Long id) {
		return proprietairedao.findById(id);
	}
	
	public void uploadFile(MultipartFile file) throws IllegalStateException, IOException {
		file.transferTo(new File(System.getProperty("user.dir")+"\\src\\main\\resources\\static\\profileImg\\"+file.getOriginalFilename()));
	}

	public void updateProprietaire(Proprietaire proprietaire, Long id) {
		Proprietaire prop = findById(id).get();
		prop = proprietaire;
		save(prop);
		
	}

	@Override
	public UserDetails loadUserByUsername(String mail) throws UsernameNotFoundException {
		Proprietaire prop = proprietairedao.findByEmail(mail);
		ProprietairePrincipal proprietairePrincipal = new ProprietairePrincipal(prop);

		return proprietairePrincipal;
	}
	
	
	
}
