package com.ebyoo.beans;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name="PROPRIETAIRE")
public class Proprietaire {
	
	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	@Column(nullable=false)
	private String lastName;
	@Column(nullable=false)
	private String firstName;
	@Column(nullable=false)
	private String email;
	@Column(nullable=false)
	private String numTel;
	@Column(nullable=false)
	private String password;
	private String adresse;
	private String pathPhoto;
	
	@Transient
	private MultipartFile photo;
	
	private String roles="";
	
	@OneToMany(mappedBy="proprietaire", fetch=FetchType.LAZY)
	@JsonIgnore
	private List<Annonce> annonces;

	//GETTERS AND SETTERS
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNumTel() {
		return numTel;
	}

	public void setNumTel(String numTel) {
		this.numTel = numTel;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getPathPhoto() {
		return pathPhoto;
	}

	public void setPathPhoto(String pathPhoto) {
		this.pathPhoto = pathPhoto;
	}

	public String getRoles() {
		return roles;
	}

	public void setRoles(String roles) {
		this.roles = roles;
	}

	public List<Annonce> getAnnonces() {
		return annonces;
	}

	public void setAnnonces(List<Annonce> annonce) {
		this.annonces = annonce;
	}

	public MultipartFile getPhoto() {
		return photo;
	}

	public void setPhoto(MultipartFile photo) {
		this.photo = photo;
	}

	public List<String> getRoleList(){
		if(this.roles.length()>0) {
			return Arrays.asList(this.roles.split(","));
		}
		return new ArrayList<>();
	}
	

	
}
