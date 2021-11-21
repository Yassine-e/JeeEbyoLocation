package com.ebyoo.beans;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name="ANNONCE")
public class Annonce {

	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String titre;
	private String numTel;
	private String adresse;
	private String region;
	private String ville;
	private String type;
	private String etat;
	private Long surface;
	private Long prix;
	private int etage;
	private int chambre;
	private int piece;
	private int salleDeBain;
	private String description;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="proprietaire_id")
	//@JsonIgnore
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
	private Proprietaire proprietaire;
	
	@ManyToMany(fetch=FetchType.LAZY)
	@JoinTable(
			name="CLIENT_ANNONCE", 
			joinColumns = {@JoinColumn(name="annonce_id")},
			inverseJoinColumns = {@JoinColumn(name="client_id")}
			)
	@JsonIgnore
	private List<Client> clients;
	
	@OneToMany(mappedBy="annonce", fetch=FetchType.LAZY)
	@JsonIgnore
	private List<Photo> photos;

	private int status;
	private int month;

	
	// GETTERS AND SETTERS
	
	
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public String getNumTel() {
		return numTel;
	}

	public void setNumTel(String numTel) {
		this.numTel = numTel;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getEtat() {
		return etat;
	}

	public void setEtat(String etat) {
		this.etat = etat;
	}

	public Long getSurface() {
		return surface;
	}

	public void setSurface(Long surface) {
		this.surface = surface;
	}

	public Long getPrix() {
		return prix;
	}

	public void setPrix(Long prix) {
		this.prix = prix;
	}

	public int getEtage() {
		return etage;
	}

	public void setEtage(int etage) {
		this.etage = etage;
	}

	public int getChambre() {
		return chambre;
	}

	public void setChambre(int chambre) {
		this.chambre = chambre;
	}

	public int getPiece() {
		return piece;
	}

	public void setPiece(int piece) {
		this.piece = piece;
	}

	public int getSalleDeBain() {
		return salleDeBain;
	}

	public void setSalleDeBain(int salleDeBain) {
		this.salleDeBain = salleDeBain;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Proprietaire getProprietaire() {
		return proprietaire;
	}

	public void setProprietaire(Proprietaire proprietaire) {
		this.proprietaire = proprietaire;
	}

	public List<Client> getClients() {
		return clients;
	}

	public void setClients(List<Client> clients) {
		this.clients = clients;
	}

	public List<Photo> getPhotos() {
		return photos;
	}

	public void setPhotos(List<Photo> photo) {
		this.photos = photo;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public int getMonth() {
		return month;
	}

	public void setMonth(int month) {
		this.month = month;
	}

	
	
	
	
}
