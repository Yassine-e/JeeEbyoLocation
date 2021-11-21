import React, { useState,useEffect} from "react";
import Axios from 'axios'
import "./css/FullDescription.css";
import ply from "./img/playaaa.jpeg";
import play1 from "./img/play1.jpeg";
import play2 from "./img/play2.jpeg";
import play3 from "./img/play3.jpeg";
import play4 from "./img/play4.jpeg";

function FullDescription(props) {

  const [Imgs, SetImgs] = useState([{
    img: require("../img/appt1.jpg").default,key: "1",
  },{
    img: require("../img/appt2.jpg").default,key: "2",
  }]);

  const [Annonce, SetAnnonce] = useState([]);
  const [Photos, SetPhotos] = useState([]);
  const [IndexImg, SetIndexImg] = useState("0");
  const [pageNumberImg, setPageNumberImg] = useState(0);
  const usersPerPageImgs = 3;
  const pagesVisitedImsg = pageNumberImg * usersPerPageImgs;


  const ObjectPhoto=Photos.length>0?Photos:Imgs;
  const ImgsAnnonce = ObjectPhoto.slice(
    pagesVisitedImsg,
    pagesVisitedImsg + usersPerPageImgs
  ).map((val, index, i = 0) => {
    return (
      <div className="" key={index} style={{ display: "flex"}}>
        <img onClick={()=>showImage(index,val)} style={{ padding:'8px'}} src={val.pathPhoto===undefined?require("../img/annoncePhotos/default.png").default:require("../img/annoncePhotos/"+val.pathPhoto).default} alt="house" height="180px" width="243px" />
      </div>
    );
  });

  function showImage(index,val){
    console.log(index);
    SetIndexImg(index);
    console.log(val);
  }

  useEffect(()=>{
      Axios.get("http://127.0.0.1:8040/photo/ap/annonce/"+window.location.pathname.split('Description/')[1])
        .then((reponse)=> {
          console.log(reponse.data);
          SetPhotos(reponse.data);
        })
  },[])


  useEffect(()=>{
      Axios.get("http://127.0.0.1:8040/annonce/id/"+window.location.pathname.split('Description/')[1])
        .then((reponse)=> {
          console.log(reponse.data);
          SetAnnonce(reponse.data);
        })
  },[])

  return (
    <div className="fulldescript">
      <div className="descripleft">

      <img style={{ borderBottomLeftRadius: "5px", borderTopLeftRadius: "5px", }} src={Photos.length>0?require("../img/annoncePhotos/"+Photos[IndexImg].pathPhoto).default:require("../img/annoncePhotos/default.png").default} alt="house" height="592px" width="800px" />

        <div className="detaildescript">
          {Annonce.description}
        </div>
        <div className="imgannonces">
          <h5 className="details-title">Plus de Photos</h5>
          <br /><br />
          <div className="linecadr">
            <div style={{  display: "flex"}}>{ImgsAnnonce}</div>
          </div>
          <div className="aboutDetails">
            <h2 className="details-title">Details</h2>
            <ul>
              <li id="firstfol">
                <span className="titlee">Adresse:</span>
                <span className="answer">{Annonce.adresse}</span>
              </li>
              <li>
                <span className="titlee">Etat:</span>
                <span className="answer">{Annonce.etat}</span>
              </li>
              <li>
                <span className="titlee">Etage: </span>
                <span className="answer">{Annonce.etage}</span>
              </li>
              <li>
                <span className="titlee">Pieces:</span>
                <span className="answer">{Annonce.chambre}</span>
              </li>
              <li>
                <span className="titlee">salle de bain:</span>
                <span className="answer">{Annonce.salleDeBain}</span>
              </li>
              <li>
                <span className="titlee">Surface</span>
                <span className="answer">{Annonce.surface}</span>
              </li>
              <li className="godown">
                <span className="titlee okee">Price At :</span>
                <span className="answer addanswer">{Annonce.prix} DH/mois</span>
              </li>
            </ul>
          </div>
        </div>


      </div>
      <div className="descripright">
        <h5>Contacter l'annonceur:</h5>
        <div className="form-group">
          <input type="text" name="FirstName" placeholder="Votre Nom" />
        </div>
        <br />
        <div className="form-group">
          <input type="text" name="FirstName" placeholder="Votre Email" />
        </div>
        <br />
        <div className="form-group">
          <input type="text" name="FirstName" placeholder="Votre Téléphone" />
        </div>
        <br />
        <div className="form-group">
          <textarea name="FirstName" id="" placeholder="Decrivez vos besoin specifique" cols="20" rows="4" ></textarea>
        </div>
        <br /> <br />
        <div className="moncadra fullPub">
          <p className="contentCadr fullcadr">Contacter</p>
        </div>{" "}
        <br /> <br /> <br />
        <span>REGION</span>
        <br /> <br />
        <div className="myregions">
          <div className="cadroa">{Annonce.region}</div>
        </div>
      </div>
    </div>
  );



}

export default FullDescription;
