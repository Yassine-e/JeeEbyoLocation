import React, { useState,useEffect } from "react";
import Axios from 'axios'
import "./css/Annonce.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import ReactPaginate from "react-paginate";
import "react-bootstrap";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import imgaa from "./img/imm1.jpeg";
import imma2 from "./img/imma2.jpeg";
import imma3 from "./img/imma3.jpeg";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Annonce(Props) {
  const [pageNumber, setPageNumber] = useState(0);
  const [Annonces, SetAnnonces] = useState([]);
  const [Photos, SetPhotos] = useState([]);
  const [MyHight, setHeight] = useState("1350px");
  const [AjoutAnnoncePopUp, SetAjoutAnnoncePopUp] = useState(false);
  const [AnnonceChosen, SetAnnonceChosen] = useState("");
  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;
  const [Cards /*SetCards*/] = useState([
    {title: "Le Marche Etna House",prix: "1600",description:" Le Marche Etna House is a fully equipped villa with many 3 big rooms swimming pool terrace and lots of other facilities.",
      bath: "1",rooms: "3",surface: "100",adresse: "Sale",img: require("./img/imm1.jpeg").default,key: "1",
    }
  ]);
  const [User, SetUser] = useState({id:"",email: "",name: "",numtel:" ",description: "",key: "1"});

  const pageCount = Math.ceil(Props.Annonces.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  function HandleCloseAjoutAnnoncePopUp() {
    SetAjoutAnnoncePopUp(false);
  }

  function DemanderAnnonce(){
    console.log(Props.Annonces[AnnonceChosen].id);
    const Try={"email": User.email,"name": User.name,"numtel":User.numtel,"description": User.description,"key": 1,"annonces":[{"id":Props.Annonces[AnnonceChosen].id}]};
    Axios.post('http://127.0.0.1:8040/client/pa/save/id/'+Props.Annonces[AnnonceChosen].id,Try)
     .then(response => {
        console.log(response.data);
        if(response.data===1)alert("Successfully Send !!")
        else alert("Error !!")
        window.location.reload();
     })
     .catch(err=>{
       console.log(err,err.response);
     });
  }

  const mainAnnonce = Props.Annonces.slice(
    pagesVisited,
    pagesVisited + usersPerPage
  ).map((val, indexa, i = 0) => {
    return (
      <div className="wholeAnnonce" key={indexa}>

        <div className="forpic">
          <img src={Props.Photos.length>0 && Props.Photos[indexa].length>0?        require("../img/annoncePhotos/"+Props.Photos[indexa][0].pathPhoto).default          :require("../img/annoncePhotos/default.png").default} alt="" width="389px" height="292px" />
        </div>
        <div className="fordescription">

          <h2>{val.titre}</h2>
          <p>{val.description}</p>
          <div className="bardescription">
            <div className="chambre spacce" style={{ display: "flex" }}>
              <Avatar sx={{ width: 24, height: 24, bgcolor: "#05668d", marginRight: 0, }} variant="rounded" >
                <BathroomOutlinedIcon />
              </Avatar>
              {val.salleDeBain} bath
            </div>
            <div className="personne spacce" style={{ display: "flex" }}>
              <Avatar sx={{ width: 24, height: 24, bgcolor: "#05668d", marginRight: 1, }} variant="rounded" >
                <BedOutlinedIcon />
              </Avatar>
              {val.chambre} rooms
            </div>
            <div className="mettre spacce" style={{ display: "flex" }}>
              <Avatar sx={{ width: 24, height: 24, bgcolor: "#05668d", marginRight: 1, }} variant="rounded" >
                <BorderAllIcon />
              </Avatar>
              {val.surface} m²
            </div>
          </div>
          <div className="mypricee">
            <p className="mphb-regular-price">
              Prices start at: &nbsp;
              <span className="mphb-price">
                <strong>
                  <span className="mphb-currency">{val.prix} MAD</span>
                </strong>
              </span>
            </p>
          </div>
          <div className="myoptionss">
            <button type="submit" className="btttn" onClick={()=>{SetAjoutAnnoncePopUp(true);SetAnnonceChosen(indexa)}}>
              Book
            </button>
            <Link id="RouterNavLink" className="forviewdit" to={"/Description/"+val.id}>View Details</Link>
          </div>
        </div>
      </div>
    );
  });

  // useEffect(()=>{
  //     Axios.get("http://127.0.0.1:8040/annonce/pa/all")
  //       .then((reponse)=> {
  //         console.log(reponse.data);
  //         SetAnnonces(reponse.data);
  //       })
  // },[])

  // useEffect(()=>{
  //     Axios.get("http://127.0.0.1:8040/photo/ap/anns/")
  //       .then((reponse)=> {
  //         console.log(reponse.data);
  //         SetPhotos(reponse.data);
  //       })
  // },[])


  return (
    <div>

      <div className="rowa" style={{ height: "100% , margin: 10px" }}>
        <div className="myannonces row" style={{ justifyContent:'center' }}> {mainAnnonce}</div>
        <br />
        <div style={{ float: "left", marginLeft: "35%" }}>
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

      <Dialog style={{ marginLeft: "26%", maxWidth: "600px" }} fullWidth={false} open={AjoutAnnoncePopUp} onClose={HandleCloseAjoutAnnoncePopUp} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">
          <h3> <b>Demander Annonce</b> </h3>
          <h6 style={{ color: "#666" }}> Let's get you all set up so you can verify your personal account and begin setting up your profile. </h6>
        </DialogTitle>
        <DialogContent>
          <div style={{ display: "block" }}>
            <div>
              <TextField label="Email" defaultValue={User.email} onChange={e=>User.email=e.target.value} fullWidth style={{ margin: "0 0 7%  0px" }} variant="outlined" InputProps={{ startAdornment: ( <InputAdornment position="start"><PersonIcon /></InputAdornment> ), }} />
              <div style={{display:'flex'}}>
                <TextField label="Name" defaultValue={User.name} onChange={e=>User.name=e.target.value} width="50%" style={{ margin: "0 2% 7% 0%" }} variant="outlined" InputProps={{ startAdornment: ( <InputAdornment position="start"> <PersonIcon /></InputAdornment> ), }} />
                <TextField label="Phone Number" defaultValue={User.numtel} onChange={e=>User.numtel=e.target.value} width="50%" style={{ margin: "0 0 7%  2%" }} variant="outlined" InputProps={{ startAdornment: ( <InputAdornment position="start"> <PersonIcon /></InputAdornment> ), }} />
              </div>
              <TextField label="Description" defaultValue={User.description} onChange={e=>User.description=e.target.value} fullWidth multiline style={{ margin: "0 0 7%  0%" }} variant="outlined" InputProps={{ startAdornment: ( <InputAdornment position="start"> <PersonIcon /></InputAdornment> ), }} />
              <Button variant="contained" onClick={DemanderAnnonce} style={{ backgroundColor: "#05668d", color: "white", width: "100%", height: "40px", marginLeft: "0%", }} startIcon={<ArrowForwardIosIcon />} > Envoyer </Button>
            </div>
            <br />
          </div>
        </DialogContent>
      </Dialog>

    </div>
  );
}

export default Annonce;
