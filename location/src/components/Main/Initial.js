import React, { useState,useEffect } from "react";
import Axios from 'axios'
import "./css/Initial.css";
import Menu from "./Menu";
import Presentation from "./Presentation";
import SearchBar from "./SearchBar";
import Annonce from "./Annonce";
import Footer from "./Footer";

function Initial() {

  const [Annonces, SetAnnonces] = useState([]);
  const [Photos, SetPhotos] = useState([]);

  useEffect(()=>{
      Axios.get("http://127.0.0.1:8040/annonce/pa/findstatus1")
        .then((reponse)=> {
          console.log(reponse.data);
          SetAnnonces(reponse.data);
        })
  },[])

  useEffect(()=>{
      Axios.get("http://127.0.0.1:8040/photo/ap/anns/status1")
        .then((reponse)=> {
          console.log(reponse.data);
          SetPhotos(reponse.data);
        })
  },[])
  return (
    <div>

      <div className="firstComponenet">
        <Menu />
      </div>
      <div className="secondComponent">
        <Presentation />
      </div>
      <div className="thirdComponent">
        <SearchBar ChangeAnnonces={Annonces=>SetAnnonces(Annonces)} ChangePhotos={Photos=>SetPhotos(Photos)} />
      </div>
      <br />
      <br />
      <br />
      <div className="fourthComponent">
        <Annonce Annonces={Annonces} Photos={Photos}  />
      </div>
      <div className="fiveeComponent">
        <Footer />
      </div>
    </div>
  );
}

export default Initial;
