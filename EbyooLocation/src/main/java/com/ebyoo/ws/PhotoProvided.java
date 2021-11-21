package com.ebyoo.ws;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.ServletContextAware;
import org.springframework.web.multipart.MultipartFile;

import com.ebyoo.beans.Annonce;
import com.ebyoo.beans.Photo;
import com.ebyoo.services.AnnonceService;
import com.ebyoo.services.PhotoService;

@RestController
@CrossOrigin
@RequestMapping(value="photo")
public class PhotoProvided implements ServletContextAware {
	
	private ServletContext servletContext;
	
	@Autowired
	public PhotoService photoservice;
	@Autowired
	public AnnonceService annonceservice;

	@GetMapping("/ap/annonce/{annonce}")
	public List<Photo> findByAnnonce(@PathVariable("annonce") Long id) {
		return photoservice.findByAnnonce(id);
	}
	
	@GetMapping("/ap/anns/status0")
	public List<List<Photo>> findStatus0GroupByAnnonce() {
		return photoservice.findStatus0GroupByAnnonce();
	}
	
	@GetMapping("/ap/anns/status1")
	public List<List<Photo>> findStatus1GroupByAnnonce() {
		return photoservice.findStatus1GroupByAnnonce();
	}
	
	@GetMapping("/ap/photoAll")
	public List<Photo> findAll() {
		return photoservice.findAll();
	}
	
	@GetMapping("/pa/filtre/adresse/{adresse}/type/{type}/prixMin/{prixMin}/prixMax/{prixMax}/chambre/{chambre}")
	public List<List<Photo>> findCriteriaGroupByAnnonce(@PathVariable(value="adresse", required = false) String adresse,@PathVariable(value="type", required = false) String type,@PathVariable(value="prixMin", required = false) Long prixMin,@PathVariable(value="prixMax", required = false) Long prixMax,@PathVariable(value="chambre", required = false) int chambre) {
		return photoservice.findCriteriaGroupByAnnonce(adresse, type, prixMin, prixMax, chambre);
	}
	
	@GetMapping("/ap/anns/")
	public List<List<Photo>> findAllGroupByAnnonce() {
		return photoservice.findAllGroupByAnnonce();
	}
	
	@GetMapping("/ap/prop/anns/{id}")
	public List<List<Photo>> findByPropGroupByAnnonceAll(@PathVariable("id") Long id) {
		return photoservice.findByPropGroupByAnnonceAll(id);
	}
	
	@GetMapping("/ap/prop/{id}")
	public List<Photo> findPhotoByProprietaire(@PathVariable("id") Long id) {
		return photoservice.findPhotoByProprietaire(id);
	}

	@DeleteMapping("/ap/del/id/{id}")
	public int deleteById(@PathVariable("id") Long id) {
		return photoservice.deleteById(id);
	}
	//@PostMapping("/")
	public int savePath(Photo photo) {
		return photoservice.save(photo);
	}

	@GetMapping("/a/count")
	public long count() {
		return photoservice.count();
	}

	@RequestMapping(value="/ap/upload/photos/id/{id}", method= RequestMethod.POST )
	public int upload(@RequestParam(value="files", required=false) MultipartFile[] files , @PathVariable("id") Long annonce_id ){
		try {
			for(MultipartFile file: files) {
				if(file!=null) {
					if(file.isEmpty()){
						//empty file
						continue;
					}
					save2(file, annonce_id);
					System.out.println("FILE NAME: "+ file.getOriginalFilename());
				}
				
			}
			// ALL FILES ADDED
			return 1;
		}catch(Exception e){
			// NULL / NO FILES
			return 2;
		}
	}
	
	private String save2(MultipartFile file, Long annonce_id) {
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("ddMMyyyyHHmmss");
			String newFileName = sdf.format(new Date())+ file.getOriginalFilename();
			byte[] bytes = file.getBytes();
			Path path = Paths.get(System.getProperty("user.dir")+"\\..\\location\\src\\components\\img\\annoncePhotos\\"+newFileName);
			Files.write(path, bytes);
			Photo photo= new Photo();
			photo.setPathPhoto(newFileName);
			Annonce ann = annonceservice.findById(annonce_id).get();
			photo.setAnnonce(ann);
			savePath(photo);
			return newFileName;
		}catch(Exception e) {
			return "exception";
		}
	}
	@Override
	public void setServletContext(ServletContext servletContext) {
		this.servletContext = servletContext;
		
	}
	
	
}
