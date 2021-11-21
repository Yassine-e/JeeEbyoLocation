import React, { useState,useEffect } from "react";
import Axios from 'axios'
import "./css/SearchBar.css";

function SearchBar(props) {

  const [Filter, SetFilter] = useState({where:null,categorie:null,prixMin:0, prixMax:0,rooms:0,key:0,});
  // const [Annonces, SetAnnonces] = useState([]);

  function FilterInitiale(value,type){
    if (value==="" || value===" " || value===undefined){
      if(type==="String")return null;
      else return 0;
    }
    else return value;
  }

  function DoFilter(){
    Filter.where=FilterInitiale(Filter.where,"String");
    Filter.categorie=FilterInitiale(Filter.categorie,"String");
    Filter.prixMin=FilterInitiale(Filter.prixMin,"nbr");
    Filter.prixMax=FilterInitiale(Filter.prixMax,"nbr");
    Filter.rooms=FilterInitiale(Filter.rooms,"nbr");
    console.log(Filter);

    Axios.get('http://127.0.0.1:8040/annonce/pa/filtre/adresse/'+Filter.where+'/type/'+Filter.categorie+'/prixMin/'+Filter.prixMin+'/prixMax/'+Filter.prixMax+'/chambre/'+Filter.rooms)
     .then(response => {
        console.log(response.data);
        // SetFilter(response.data);
        props.ChangeAnnonces(response.data);
     })
     .catch(err=>{
       console.log(err,err.response);
     });

     Axios.get('http://127.0.0.1:8040/photo/pa/filtre/adresse/'+Filter.where+'/type/'+Filter.categorie+'/prixMin/'+Filter.prixMin+'/prixMax/'+Filter.prixMax+'/chambre/'+Filter.rooms)
      .then(response => {
         console.log(response.data);
         // SetFilter(response.data);
         props.ChangePhotos(response.data);
      })
      .catch(err=>{
        console.log(err,err.response);
      });

  }

  // useEffect(()=>{
  //     Axios.get("http://127.0.0.1:8040/annonce/pa/all")
  //       .then((reponse)=> {
  //         console.log(reponse.data);
  //         SetAnnonces(reponse.data);
  //       })
  // },[])

  return (
    <div className="toolbar">
      <h1 className="toolTitle">The villa rental expert for your vacation</h1>
      <p className="toolminitil">Villagio offers diverse villas in different regions to help you spend your dream vacation. Book your villa online quickly and safely.</p>
      <div className="forfilter">
        <div className="form-group">
          <label>Living Aria</label>
          <input defaultValue={Filter.where} onChange={e=>Filter.where=e.target.value} type="text" name="FirstName" placeholder="Where do you want to live?" />
        </div>
        <div className="form-group">
          <label>TYPE</label>
          <select name="" id="" onChange={e=>Filter.categorie=e.target.value}>
            <option value="null">Type de Propriété</option>
            <option value="Appartement">Appartement</option>
            <option value="Villa">Villa</option>
            <option value="Maison">Maison</option>
            <option value="Duplex">Duplex</option>
            <option value="Immeuble">Immeuble</option>
            <option value="Terrain">Terrain</option>
            <option value="Riad">Riad</option>
            <option value="Studio">Studio</option>
          </select>
        </div>
        <div className="form-group">
          <label>Price from (DH)</label>
          <input defaultValue={Filter.prixMin} onChange={e=>Filter.prixMin=e.target.value} type="number" className="ourprice" placeholder="Min" />
        </div>
        <div className="form-group">
          <label>To (DH)</label>
          <input defaultValue={Filter.prixMax} onChange={e=>Filter.prixMax=e.target.value} type="number" className="ourprice" placeholder="Max" />
        </div>
        <div className="form-group">
          <label>Chambre</label>
          <input defaultValue={Filter.rooms} onChange={e=>Filter.rooms=e.target.value} type="number" className="ourprice" placeholder="Nombre" />
        </div>
        <br /><br />
        <button type="submit" onClick={DoFilter} className="button nevy-button">Check Availability</button>
      </div>
    </div>
  );
}

export default SearchBar;
