package com.ebyoo.ws;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.ServletContextAware;
import org.springframework.web.multipart.MultipartFile;

import com.ebyoo.beans.Annonce;
import com.ebyoo.beans.Proprietaire;
import com.ebyoo.services.ProprietaireService;

@RestController
@CrossOrigin
@RequestMapping(value="proprietaire")
public class ProprietaireProvided implements ServletContextAware {
	
	private ServletContext servletContext;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	public ProprietaireService proprietaireservice;

	@GetMapping("email/{email}")
	public Proprietaire findByEmail(@PathVariable("email") String email) {
		return proprietaireservice.findByEmail(email);
	}
	
//	@PostMapping("/pa/log")
//	public Proprietaire login(@RequestBody Proprietaire proprietaire) {
//		return proprietaire;
////		return proprietaireservice.login(proprietaire);
//	}
	
	@PostMapping("/pa/log")
	public Proprietaire login(@RequestBody Proprietaire proprietaire) {
		return proprietaireservice.login(proprietaire);
	}
	
	@DeleteMapping("/a/admin/id/{id}")
	public int deleteById(@PathVariable("id") Long id) {
		return proprietaireservice.deleteById(id);
	}

	@GetMapping("/a/all")
	public List<Proprietaire> findAll() {
		return proprietaireservice.findAll();
	}

	@RequestMapping(value="/pa/", method= RequestMethod.POST)
	public int save(Proprietaire proprietaire, @RequestParam(value="file", required = false) MultipartFile mpf) throws IllegalStateException, IOException {
//		return proprietaire;
		Proprietaire prop =  proprietaireservice.findByEmail(proprietaire.getEmail());
		if(prop!=null) {
			//mail already exists
			return 4;
		}else {
		proprietaire.setPassword(passwordEncoder.encode(proprietaire.getPassword()));
		proprietaireservice.save(proprietaire);
		prop =  proprietaireservice.findByEmail(proprietaire.getEmail());
		String filename= prop.getId() + ".png";
		if(mpf!= null) {
			if(mpf.isEmpty()) {
				prop.setPathPhoto("default.png");
//				updateProprietaire(prop, mpf ,prop.getId());
				return 3;
			}
			byte[] bytes = mpf.getBytes();
			Files.write(Paths.get(System.getProperty("user.dir")+"\\src\\main\\resources\\static\\profileImg\\"+filename), bytes);
			uploadFile(mpf);
			prop.setPathPhoto(filename);
			proprietaireservice.updateProprietaire(prop, prop.getId());
			return 1;
		}
		else if(mpf == null){
			prop.setPathPhoto("default.png");
//			updateProprietaire(prop, mpf ,prop.getId());
			return 2;
		}

		return 0;
	}
	}
	
	@GetMapping("/a/count")
	public long count() {
		return proprietaireservice.count();
	}
	
	
	@GetMapping("prop/id/{id}")
	public Optional<Proprietaire> findById(@PathVariable("id") Long id) {
		return proprietaireservice.findById(id);
	}
	
	@PostMapping
	public void uploadFile(@RequestParam("file") MultipartFile file) throws IllegalStateException, IOException {
		proprietaireservice.uploadFile(file);
	}
	
//	@PutMapping("/pa/update/id/{id}")
//	public int updateProprietaire(Proprietaire proprietaire, @RequestParam(value="file", required=false) MultipartFile mpf ,@PathVariable("id") Long id ) throws IOException {
//		//proprietaireservice.updateProprietaire(proprietaire, id);
//		
//		
////		return mpf;
////		return proprietaire;
//		Proprietaire prop =  proprietaireservice.findById(id).get();
//		if(proprietaire.getPassword()!=null && !proprietaire.getPassword().isEmpty()) {
//			proprietaire.setPassword(passwordEncoder.encode(proprietaire.getPassword()));
//		}
//		
//		if(prop!=null) {
//			if(prop.getEmail()==proprietaire.getEmail()) {
//				String filename= prop.getId() + ".png";
//				if(mpf!= null ) { //|| !mpf.isEmpty()
//					if(mpf.isEmpty()) {
//						proprietaire.setPathPhoto("default.png");
//						proprietaireservice.updateProprietaire(proprietaire, id);
//						return 3;
//					}
//					byte[] bytes = mpf.getBytes();
//					Files.write(Paths.get(System.getProperty("user.dir")+"\\..\\location\\src\\components\\img\\profileImg\\"+filename), bytes);
//					uploadFile(mpf);
//					proprietaire.setPathPhoto(filename);
//					proprietaireservice.updateProprietaire(proprietaire, id);
//					return 1;
//				}
//				proprietaire.setPathPhoto("default.png");
//				proprietaireservice.updateProprietaire(proprietaire, id);
//				return 0;
//			}
//			else {
//				Proprietaire propCheck = proprietaireservice.findByEmail(proprietaire.getEmail());
//				if(propCheck!=null && prop.getId()!=propCheck.getId()) {
//					//EMAIL EXISTS .. DON T ADD
//					return 5;
//				}
//				else {
//					String filename= prop.getId() + ".png";
//					if(mpf!= null ) { //|| !mpf.isEmpty()
//						if(mpf.isEmpty()) {
//							proprietaire.setPathPhoto("default.png");
//							proprietaireservice.updateProprietaire(proprietaire, id);
//							return 3;
//						}
//						byte[] bytes = mpf.getBytes();
//						Files.write(Paths.get(System.getProperty("user.dir")+"\\..\\location\\src\\components\\img\\profileImg\\"+filename), bytes);
//						uploadFile(mpf);
//						proprietaire.setPathPhoto(filename);
//						proprietaireservice.updateProprietaire(proprietaire, id);
//						return 1;
//					}
//					proprietaire.setPathPhoto("default.png");
//					proprietaireservice.updateProprietaire(proprietaire, id);
//					return 0;
//				}
//			}
//		}
//		// NEW PROP IS NULL
//		return 0;
//	}
	
	@PutMapping("/pa/update/id/{id}")
	public int updateProprietaire(Proprietaire proprietaire, @RequestParam(value="file", required=false) MultipartFile mpf ,@PathVariable("id") Long id ) throws IOException {

		Proprietaire prop =  proprietaireservice.findById(id).get();
		if(proprietaire.getPassword()!=null && !proprietaire.getPassword().isEmpty()) {
			proprietaire.setPassword(passwordEncoder.encode(proprietaire.getPassword()));
		}
		
		if(prop!=null) {
			if(prop.getEmail()==proprietaire.getEmail()) {
				String filename= prop.getId() + ".png";
				if(mpf!= null ) { //|| !mpf.isEmpty()
					if(mpf.isEmpty()) {
						proprietaire.setPathPhoto("default.png");
						proprietaireservice.updateProprietaire(proprietaire, id);
						return 3;
					}
					byte[] bytes = mpf.getBytes();
					Files.write(Paths.get(System.getProperty("user.dir")+"\\src\\main\\resources\\static\\profileImg\\"+filename), bytes);
					uploadFile(mpf);
					proprietaire.setPathPhoto(filename);
					proprietaireservice.updateProprietaire(proprietaire, id);
					return 1;
				}
				proprietaire.setPathPhoto("default.png");
				proprietaireservice.updateProprietaire(proprietaire, id);
				return 0;
			}
			else {
				Proprietaire propCheck = proprietaireservice.findByEmail(proprietaire.getEmail());
				if(propCheck!=null && prop.getId()!=propCheck.getId()) {
					//EMAIL EXISTS .. DON T ADD
					return 5;
				}
				else {
					String filename= prop.getId() + ".png";
					if(mpf!= null ) { //|| !mpf.isEmpty()
						if(mpf.isEmpty()) {
							proprietaire.setPathPhoto("default.png");
							proprietaireservice.updateProprietaire(proprietaire, id);
							return 3;
						}
						byte[] bytes = mpf.getBytes();
						Files.write(Paths.get(System.getProperty("user.dir")+"\\src\\main\\resources\\static\\profileImg\\"+filename), bytes);
						uploadFile(mpf);
						proprietaire.setPathPhoto(filename);
						proprietaireservice.updateProprietaire(proprietaire, id);
						return 1;
					}
					proprietaire.setPathPhoto("default.png");
					proprietaireservice.updateProprietaire(proprietaire, id);
					return 0;
				}
			}
		}
		// NEW PROP IS NULL
		return 0;
	}
	
//	@PutMapping("/pa/update/id/{id}")
//	public int updateProprietaire(@RequestBody Proprietaire proprietaire,@RequestParam(value="file", required=false) MultipartFile mpf, @PathVariable("id") Long id ) throws IOException {
////		proprietaire.setId(id);
////		return proprietaire;
//		//proprietaireservice.updateProprietaire(proprietaire, id);
//		Proprietaire prop =  proprietaireservice.findById(id).get();
//		if(proprietaire.getPassword()!=null && !proprietaire.getPassword().isEmpty()) {
//			proprietaire.setPassword(passwordEncoder.encode(proprietaire.getPassword()));
//		}
//		if(prop!=null) {
//			if(prop.getEmail()==proprietaire.getEmail()) {
//				String filename= prop.getId() + ".png";
//				if(mpf!= null ) { //|| !mpf.isEmpty()
//					if(mpf.isEmpty()) {
//						proprietaire.setPathPhoto("default.png");
//						proprietaireservice.updateProprietaire(proprietaire, id);
//						return 3;
//					}
//					byte[] bytes = mpf.getBytes();
//					Files.write(Paths.get(System.getProperty("user.dir")+"\\src\\main\\resources\\static\\profileImg\\"+filename), bytes);
//					uploadFile(mpf);
//					proprietaire.setPathPhoto(filename);
//					proprietaireservice.updateProprietaire(proprietaire, id);
//					return 1;
////				}
//				proprietaire.setPathPhoto("default.png");
//				proprietaireservice.updateProprietaire(proprietaire, id);
//				return 0;
//			}
//			else {
//				Proprietaire propCheck = proprietaireservice.findByEmail(proprietaire.getEmail());
//				if(propCheck!=null && prop.getId()!=propCheck.getId()) {
//					//EMAIL EXISTS .. DON T ADD
//					return 5;
//				}
//				else {
//					filename= prop.getId() + ".png";
//					if(mpf!= null ) { //|| !mpf.isEmpty()
//						if(mpf.isEmpty()) {
//							proprietaire.setPathPhoto("default.png");
//							proprietaireservice.updateProprietaire(proprietaire, id);
//							return 3;
//						}
//						byte[] bytes = mpf.getBytes();
//						Files.write(Paths.get(System.getProperty("user.dir")+"\\src\\main\\resources\\static\\profileImg\\"+filename), bytes);
//						uploadFile(mpf);
//						proprietaire.setPathPhoto(filename);
//						proprietaireservice.updateProprietaire(proprietaire, id);
//						return 1;
//					}
//					proprietaire.setPathPhoto("default.png");
//					proprietaireservice.updateProprietaire(proprietaire, id);
//					return 0;
//				}
//			}
//		}
//		// NEW PROP IS NULL
//		return 0;
//	}
	
	/*@PostMapping("/pa/login")
	public int login() {
		return 1;
	}*/
	
	@PostMapping("/ap/logout")
	public int login() {
		return 1;
	}
	
	

	@Override
	public void setServletContext(ServletContext servletContext) {
		this.servletContext = servletContext;
		
	}
	


}















