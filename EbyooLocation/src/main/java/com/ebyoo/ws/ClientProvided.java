package com.ebyoo.ws;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ebyoo.beans.Annonce;
import com.ebyoo.beans.Client;
import com.ebyoo.services.ClientService;

@RestController
@CrossOrigin
@RequestMapping(value="client")
public class ClientProvided {

	@Autowired
	public ClientService clientservice;

	@GetMapping("/ap/annonce/{annonce}")
	public List<Client> findByAnnonces(@PathVariable("annonce") Long annonce) {
		return clientservice.findByAnnonces(annonce);
	}

	@DeleteMapping("/ap/del/id/{id}")
	public int deleteById(@PathVariable("id") Long id) {
		return clientservice.deleteById(id);
	}

	@GetMapping("numtel/{numtel}/mail/{mail}/annonce/{annonce}")
	public Client findByNumtelAndEmailAndAnnonces(@PathVariable("numtel") String numtel,@PathVariable("mail")  String mail,@PathVariable("annonce") Long annonce) {
		return clientservice.findByNumtelAndEmailAndAnnonces(numtel, mail, annonce);
	}
	@PostMapping("/pa/save/id/{id}")
	public int save(@RequestBody Client client, @PathVariable("id") Long id) {
//		Annonce a=new Annonce();
//		a.setId(id);
//		client.setAnnonces(a);
//		return client;
		return clientservice.save(client, id);
	}
	
	@GetMapping("/a/findall")
	public List<Client> findAll() {
		return clientservice.findAll();
	}

	@GetMapping("/a/count")
	public long count() {
		return clientservice.count();
	}

	public void delete(Client entity) {
		clientservice.delete(entity);
	}

	@GetMapping("find/id/{id}")
	public Optional<Client> findById(Long id) {
		return clientservice.findById(id);
	}
	@GetMapping("/ap/proprietaire/{id}")
	public List<Client> findByProprietaire(@PathVariable("id") Long proprietaire) {
		return clientservice.findByProprietaire(proprietaire);
	}
	
	
	
	
}
