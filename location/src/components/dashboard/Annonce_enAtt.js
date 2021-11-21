import React, { useState,useEffect } from "react";
import Axios from 'axios'
import NavVertical from "./navVertical";
import NavBar from "./navBar";
import Button from "@material-ui/core/Button";
import ReactPaginate from "react-paginate";
import RoomIcon from "@mui/icons-material/Room";
import Avatar from "@mui/material/Avatar";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import BorderAllIcon from "@mui/icons-material/BorderAll";
function Annonce_enAtt() {
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 2;
  const pagesVisited = pageNumber * usersPerPage;
  const [Photos, SetPhotos] = useState([]);
  const [Annonces ,SetAnnonces] = useState([
    {
      title: "Appartement en Location wilaya",
      prix: "1600",
      description:
        " Le Marche Etna House is a fully equipped villa with many 3 big rooms swimming pool terrace and lots of other facilities.",
      bath: "1",
      rooms: "3",
      surface: "100",
      adresse: "Sale",
      img: require("../img/appt1.jpg").default,
      key: "1",
    }
  ]);
  const pageCount = Math.ceil(Annonces.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  function AccepterRefuser(index,choix){
    console.log(index);
    console.log(Annonces[index]);
    Axios.get('http://127.0.0.1:8040/annonce/a/'+choix+'/'+Annonces[index].id)
     .then(response => {
        console.log(response.data);
        if(response.data===1)alert(choix+" avec Succes !!")
        else alert("Error !!")
        window.location.reload();
     })
     .catch(err=>{
       console.log(err,err.response);
     });
  }

  const displayannonceAtt = Annonces.slice(
    pagesVisited,
    pagesVisited + usersPerPage
  ).map((val, indexa, i = 0) => {
    return (
      <div className="" key={indexa} style={{ display: "flex", padding: "2%" }}>
        <div className="">
          <img style={{borderBottomLeftRadius: "5px",borderTopLeftRadius: "5px",}} src={Photos.length>0 && Photos[indexa+pagesVisited].length>0?   require("../img/annoncePhotos/"+Photos[indexa+pagesVisited][0].pathPhoto).default   :require("../img/annoncePhotos/default.png").default} alt="" width="220px" height="220px" />
        </div>
        <div style={{ backgroundColor: "white", width: "100%", height: "max-content", minHeight: "220px", border: "2px dotted #e0e1e5 ", borderLeft: "none", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", padding: "12px", }} >
          <h2 style={{ textAlign: "left", fontSize: "1.375rem", fontFamily: "Lato", marginBottom: "12px", fontWeight: "600", color: "rgb(53, 53, 53)", }} >
            <b>{val.title}</b>
          </h2>
          <p style={{ textAlign: "start", color: "#666", marginRight: "8px" }}>
            {val.description}
          </p>
          <div style={{ display: "flex", float: "right" }}>
            <div style={{ display: "flex", marginRight: "5%", width: "120px" }}>
              <Avatar sx={{ width: 24, height: 24, bgcolor: "#05668d", marginRight: 1, }} variant="rounded" >
                <BathroomOutlinedIcon />
              </Avatar>
              {val.salleDeBain} bath
            </div>
            <div style={{ display: "flex", marginRight: "5%", width: "120px" }}>
              <Avatar sx={{ width: 24, height: 24, bgcolor: "#05668d", marginRight: 1, }} variant="rounded" >
                <BedOutlinedIcon />
              </Avatar>
              {val.chambre} rooms
            </div>
            <div style={{ display: "flex", width: "120px" }}>
              <Avatar sx={{ width: 24, height: 24, bgcolor: "#05668d", marginRight: 1, }} variant="rounded" >
                <BorderAllIcon />
              </Avatar>
              {val.surface} m2
            </div>
          </div>
          <br />
          <div style={{ textAlign: "start", maxWidth: "300px" }}>
            <panel style={{ color: "#666" }}>
              <RoomIcon style={{ fontSize: "19px" }} />
              <b>{val.adresse}</b>
            </panel>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ color: "#666", marginTop: "4px" }}>
              {" "}
              <strong>
                Prix :<b>{val.prix} MAD</b>{" "}
              </strong>{" "}
            </div>
            <div>
              <Button onClick={()=>AccepterRefuser(pagesVisited+indexa,'accepter')} variant="contained" size="small" style={{ borderRadius: "10px", marginRight: "10px", backgroundColor: "#679436", color: "white", }} > Accepter </Button>
              <Button onClick={()=>AccepterRefuser(pagesVisited+indexa,'refuser')} variant="contained" size="small" style={{ borderRadius: "10px", backgroundColor: "red", color: "white", }} > Refuser </Button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  useEffect(()=>{
      Axios.get("http://127.0.0.1:8040/annonce/a/findstatus0")
        .then((reponse)=> {
          console.log(reponse.data);
          SetAnnonces(reponse.data);
        })
  },[])

  useEffect(()=>{
      Axios.get("http://127.0.0.1:8040/photo/ap/anns/status0/")
        .then((reponse)=> {
          console.log(reponse.data);
          SetPhotos(reponse.data);
        })
  },[])
  return (
    <div className="App" style={{ display: "flex" }}>
      <NavVertical />
      <div style={{ width: "100%" }}>
        <NavBar />
        <div class="container">
          <div class="row height d-flex justify-content-center align-items-center">
            <div class="col-md-8">
              <div class="search">
                {" "}
                <i class="fa fa-search"></i>{" "}
                <input
                  type="text"
                  class="form-control"
                  placeholder="Recherche d'annonce"
                />{" "}
                <button class="btn btn-primary">Search</button>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="mycontent">{displayannonceAtt}</div>
        <div style={{ width: "100%", margin: "2% 3% 5% 0" }}>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </div>
  );
}

export default Annonce_enAtt;
