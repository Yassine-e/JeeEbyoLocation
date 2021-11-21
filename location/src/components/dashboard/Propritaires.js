import React, { useState,useEffect } from "react";
import Axios from 'axios'
import NavVertical from "./navVertical";
import Button from "@material-ui/core/Button";
import NavBar from "./navBar";
import ReactPaginate from "react-paginate";
import Avatar from "@mui/material/Avatar";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from '@mui/icons-material/Phone';
import PostAddIcon from "@mui/icons-material/PostAdd";
import "./css/Propritaires.css";
function Propritaires() {
  let user=JSON.parse(localStorage.getItem('user-info'))
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;

  const [Users,SetUsers] = useState([
    {
      Prenom: "Yassine",
      Nom: "Achari",
      age: "21",
      email: "aacharidzab@gmail.com",
      numTel: "0653169424",
      Password: "AcchariLoco",
      adresse: "Sale",
      annonce: "5",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      key: "1",
    }
  ]);
  const pageCount = Math.ceil(Users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // const tryRequire = (path) => {
  //   console.log(path);
  //   if("../img/annoncePhotos/default.png"===path)console.log("matched");
  //   try {
  //    return require(path).default;
  //   }catch (err) {
  //    return null;
  //   }
  // };

  function DeleteUser(id){
    Axios.delete('http://127.0.0.1:8040/proprietaire/a/admin/id/'+id)
     .then(response => {
        console.log(response.data);
        if(response.data===1)alert("Successfully Deleted !!")
        else alert("Error !!")
        window.location.reload();
     })
     .catch(err=>{
       console.log(err,err.response);
     });
  }
  {
    /* const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };*/
  }
  const displayUsers = Users.slice(
    pagesVisited,
    pagesVisited + usersPerPage
  ).map((val, indexa, i = 0) => {
    return (
      <div className="" key={indexa} style={{ display: "flex", padding: "2%" }}>
        <div className="">
          <img src={val.pathPhoto!==null && val.pathPhoto!==undefined?require("../img/profileImg/"+val.pathPhoto).default:require("../img/annoncePhotos/default.png").default} alt="" width="150px" height="100%" />
        {  /*
          <img style={{ borderBottomLeftRadius: "5px", borderTopLeftRadius: "5px", }} src={val.img} alt="house" height="150px" width="150px" />
          */}
        </div>
        <div style={{ backgroundColor: "white", width: "100%", height: "max-content", border: "2px dotted #e0e1e5 ", borderLeft: "none", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", padding: "12px", paddingTop: "2px", paddingBottom: "5px", }} >
          <h2 style={{ textAlign: "left", fontSize: "1.375rem", fontFamily: "Lato", fontWeight: "600", color: "rgb(53, 53, 53)", }} >
            <b> {val.lastName} {val.firstName} </b>
          </h2>
          <div style={{ display: "flex", float: "right" }}>
            <div style={{ display: "flex", marginRight: "5%", width: "200px" }}>
              <Avatar sx={{ width: 24, height: 24, bgcolor: "#05668d", marginRight: 1, }} variant="rounded" >
                <AlternateEmailIcon />
              </Avatar>
              {val.email}
            </div>
            <div style={{ display: "flex", marginRight: "5%", width: "120px" }}>
              <Avatar sx={{ width: 24, height: 24, bgcolor: "#05668d", marginRight: 1, }} variant="rounded" >
                <PhoneIcon />
              </Avatar>
              {val.numTel}
            </div>
            <div style={{ display: "flex", width: "170px" }}>
              <Avatar sx={{ width: 24, height: 24, bgcolor: "#05668d", marginRight: 1, }} variant="rounded" >
                <PostAddIcon />
              </Avatar>
              {val.annonce} Annonces
            </div>
          </div>
          <div style={{ textAlign: "start", maxWidth: "300px" }}>
            <panel style={{ color: "#666" }}>
              <b>Adresse: {val.adresse}</b>
            </panel>
          </div>
          <div>
            <div style={{ textAlign: "start", color: "#666", marginTop: "4px", }} >
              <strong>
                Id : <b>{val.id}</b>{" "}
              </strong>{" "}
            </div>
            <Button onClick={()=>DeleteUser(val.id)} variant="contained" size="small" style={{ borderRadius: "10px", backgroundColor: "red", color: "white", float: "right", }} > Delete </Button>
          </div>
        </div>
      </div>
    );
  });

  useEffect(()=>{
      Axios.get("http://127.0.0.1:8040/proprietaire/a/all")
        .then((reponse)=> {
          console.log(reponse.data);
          SetUsers(reponse.data);
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
                  placeholder="Recherche des utilisateurs"
                />{" "}
                <button class="btn btn-primary">Search</button>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="mycontent">{displayUsers}</div>
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

export default Propritaires;
