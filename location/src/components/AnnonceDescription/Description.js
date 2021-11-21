import React, { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import Axios from 'axios'
import "./css/Description.css";
import Menu2 from "./Menu2";
import Check from "./Check";
import AnnoncePrincipal from "./AnnoncePrincipal";
import FullDescription from "./FullDescription";
import Footer from "./Footer";
function Description() {

  // const [Annonce, SetAnnonce] = useState([]);
  //
  // useEffect(()=>{
  //     Axios.get("http://127.0.0.1:8040/photo/ap/annonce/"+window.location.pathname.split('Description/')[1])
  //       .then((reponse)=> {
  //         console.log(reponse.data);
  //         SetAnnonce(reponse.data);
  //       })
  // },[])

  return (
    <div>
      <div className="firstComponenet">
        <Menu2 />
      </div>
      <div className="secondocompo">
        <Check />
      </div>
      <div className="thirdocompo">
        {/*<AnnoncePrincipal />*/}
      </div>
      <div className="firthoCompo"><br/><br/>
        <FullDescription/>
      </div>
      <div className="Compo">
        <Footer />
      </div>
    </div>
  );



}

export default Description;
