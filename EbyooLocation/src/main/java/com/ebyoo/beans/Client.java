package com.ebyoo.beans;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;


@Entity
@Table(name="CLIENT")
public class Client {
	
	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String name;
	private String numtel;
	private String email;
	private String description;

	@ManyToMany(fetch=FetchType.LAZY)
	@JoinTable(
			name="CLIENT_ANNONCE",
			joinColumns= {@JoinColumn(name="client_id")},
			inverseJoinColumns= {@JoinColumn(name="annonce_id")}
			)
	private List<Annonce> annonces ;

	//GETTERS AND SETTERS
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNumtel() {
		return numtel;
	}

	public void setNumtel(String numtel) {
		this.numtel = numtel;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<Annonce> getAnnonces() {
		return annonces;
	}

	public void setAnnonces(List<Annonce> annonces) {
		this.annonces = annonces;
	}

	

	
	

}
