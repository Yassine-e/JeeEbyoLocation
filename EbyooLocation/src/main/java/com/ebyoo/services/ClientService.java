package com.ebyoo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ebyoo.beans.Annonce;
import com.ebyoo.beans.Client;
import com.ebyoo.dao.ClientDAO;


@Service
public class ClientService {

	@Autowired
	public ClientDAO clientdao;
	@Autowired
	private AnnonceService annonceService;

	public List<Client> findByAnnonces(Long annonce) {
		Optional<Annonce> ann = annonceService.findById(annonce);
		return clientdao.findByAnnonces(ann);
	}

	public int deleteById(Long id) {
		clientdao.deleteById(id);
		return 1;
	}

	public Client findByNumtelAndEmailAndAnnonces(String numtel, String mail, Long annonce) {
		Optional<Annonce> ann = annonceService.findById(annonce);
		return clientdao.findByNumtelAndEmailAndAnnonces(numtel, mail, ann);
	}

	public int save(Client client, Long id) {
		//Optional<Annonce> annon = annonceService.findById(Long.parseLong(request.getParameter("annonceId")));
		//Annonce ann = annon.get();
		//Long annid = ann.getId();
		if(findByNumtelAndEmailAndAnnonces(client.getNumtel(), client.getEmail(), id)!=null) {
			//client Exist, CANT ADD
			return 0;
		}else {
			clientdao.save(client);
			return 1;
		}
	}

	public List<Client> findAll() {
		return clientdao.findAll();
	}

	public long count() {
		return clientdao.count();
	}

	public void delete(Client entity) {
		clientdao.delete(entity);
	}

	public Optional<Client> findById(Long id) {
		return clientdao.findById(id);
	}

	public List<Client> findByProprietaire(Long proprietaire) {
		List<Annonce> anns = annonceService.findByProprietaire(proprietaire);
		List<Client> clientList = new ArrayList<>();
		for(Annonce ann : anns) {
			clientList.addAll(findByAnnonces(ann.getId()));
		}
		return clientList;
	}
	
	
	
	
}
