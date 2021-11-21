import React, { useState,useEffect} from "react";
import Axios from 'axios'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "../css/Profil.css";
import NavBar from "../../navBar";
import BarChartIcon from "@mui/icons-material/BarChart";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@material-ui/core/TextField";
import ReactPaginate from "react-paginate";
import RoomIcon from "@mui/icons-material/Room";
import Avatar from "@mui/material/Avatar";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import { pink } from "@mui/material/colors";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputAdornment from '@mui/material/InputAdornment';
import MoneyIcon from '@mui/icons-material/Money';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from "@material-ui/icons/Person";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ImageIcon from '@mui/icons-material/Image';

const useStyles = makeStyles((theme) => ({
  button: { margin: theme.spacing(1) },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

function Profil() {
  let user=JSON.parse(localStorage.getItem('user-info'))

  // const IdProp=10;
  const [userprofile, setUserprofile] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
  );
  const [Userprofile2, SetUserprofile2] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
  );
  const [Info, setInfo] = useState([]);
  const [ProfileImgEtat, SetProfileImgEtat] = useState(false);
  const [ModifAnnoncePopUp, SetModifAnnoncePopUp] = useState(false);
  const [UserAdd, SetUserAdd] = useState([]);
  const [page, setPage] = React.useState(0);
  const classes = useStyles();
  const [pageNumber, setPageNumber] = useState(0);
  const [pageNumberImg, setPageNumberImg] = useState(0);
  const usersPerPage = 2;
  const usersPerPageImgs = 3;
  const [IndexImg, SetIndexImg] = useState(0);
  const pagesVisited = pageNumber * usersPerPage;
  const pagesVisitedImsg = pageNumberImg * usersPerPageImgs;
  const [EditIndex, SetEditIndex] = useState(0);
  const [Cards, SetCards] = useState([]);
  const [Photos, SetPhotos] = useState([]);
  const [UserInfo, SetUserInfo] = useState([]);
  const [UserFirstName, SetUserFirstName] = useState('');
  const [UserLastName, SetUserLastName] = useState('');
  const [UserMail, SetUserMail] = useState('');
  const [UserAdresse, SetUserAdresse] = useState('');
  const [UserPhone, SetUserPhone] = useState('');
  const [UserPassword, SetUserPassword] = useState('');
  const [ImgsArray, SetImgsArray] = useState([]);
  const [AddAnnoncePopUp, SetAddAnnoncePopUp] = useState(false);
  const [AddAnnonceInfo, SetAddAnnonceInfo] = useState({});
  const [AddAnnonceImg, SetAddAnnonceImg] = useState("https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png");

  const [Imgs, SetImgs] = useState([{
      img: require("../../img/appt1.jpg").default,key: "1",
    },{
      img: require("../../img/appt2.jpg").default,key: "2",
    },{
      img: require("../../img/appt3.jpeg").default,key: "3",
    },{
      img: require("../../img/appt4.jpg").default,key: "4",
    },]);

  const handleChange = (event,object) => {
    if(object==='firstName') {
      SetUserFirstName(event);
      var obj=UserInfo;
      obj.firstName=event;
      SetUserInfo(obj);
    }else if(object==='lastName') {
      SetUserLastName(event);
      var obj=UserInfo;
      obj.lastName=event;
      SetUserInfo(obj);
    }else if(object==='email') {
      SetUserMail(event);
      var obj=UserInfo;
      obj.email=event;
      SetUserInfo(obj);
    }else if(object==='adresse') {
      SetUserAdresse(event);
      var obj=UserInfo;
      obj.adresse=event;
      SetUserInfo(obj);
    }
    else if(object==='phone') {
      SetUserPhone(event);
      var obj=UserInfo;
      obj.numTel=event;
      SetUserInfo(obj);
    }  else if(object==='password') {
        SetUserPassword(event);
        var obj=UserInfo;
        obj.password=event;
        SetUserInfo(obj);
      }
  };

  const pageCount = Math.ceil(Cards.length / usersPerPage);
  const pageCountImgs = Math.ceil(Photos.length>0?Photos[EditIndex].length/usersPerPageImgs:Imgs.length/usersPerPageImgs);

  const [EditAnnonceDialog, SetEditAnnonceDialog] = useState(false);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const changePageImg = ({ selected }) => {
    setPageNumberImg(selected);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  function HandleCloseEditAnnonceDialog() {
    SetEditAnnonceDialog(false);
    SetIndexImg(0);
  }

  function HandleCloseAddAnnoncePopUp() {
    SetAddAnnoncePopUp(false);
    SetIndexImg(0);
  }

  function HandleCloseModifAnnoncePopUp() {
    SetModifAnnoncePopUp(false);
    SetIndexImg(0);
  }





  async function SaveEditUserInfo(){

    console.log(UserInfo);
    console.log(Userprofile2);
    console.log(user.id);
    // var p;
    // Userprofile2==="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"?p=user.pathPhoto:p=Userprofile2;
    // console.log(p);


    try{
      const formData=new FormData();
      formData.append("adresse",UserInfo.adresse);formData.append("email",UserInfo.email);formData.append("firstName",UserInfo.firstName);
      formData.append("lastName",UserInfo.lastName);formData.append("numTel",UserInfo.numTel);formData.append("password",UserInfo.password);
      formData.append("file",Userprofile2);formData.append("roles",user.roles);
      let result = await Axios.put("http://127.0.0.1:8040/proprietaire/pa/update/id/"+user.id,formData);
      console.log(result.data);
      // window.location.reload();
    }catch(err){
      console.log(err,err.response);
    }


    // const TestUser={ "adresse":"12", "email": "gmail", "firstName": "2", "id": "10", "lastName": "acgggg", "numTel": "5", "password": "6", "pathPhoto": "7", "roles": "PROPRIETAIRE" }
    // TestUser.adresse=UserInfo.adresse;TestUser.email=UserInfo.email;TestUser.firstName=UserInfo.firstName;TestUser.id=UserInfo.id;
    // TestUser.lastName=UserInfo.lastName;TestUser.numTel=UserInfo.numTel;TestUser.password=UserInfo.password;TestUser.pathPhoto=UserInfo.pathPhoto;
    // TestUser.roles=UserInfo.roles;
    //
    // Axios.put('http://127.0.0.1:8040/proprietaire/pa/update/id/'+IdProp,TestUser)
    //  .then(response => {
    //     console.log(response.data);
    //     window.location.reload();
    //  })
    //  .catch(err=>{
    //    console.log(err,err.response);
    //  });

  }
  function EditAnnonce(index){
    SetEditIndex(index);
    SetEditAnnonceDialog(true);
  }
  // function DeleteAnnonce(index){
  //   console.log(Cards[index].id);
  // }
  // function changeInfo(value){
  //   console.log(Cards[EditIndex]);
  //   console.log(value);
  // }

  function imageHandler(e) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserprofile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  function showImage(index,val){
    console.log(index);
    SetIndexImg(index);
    console.log(val);
  }

  async function DeleteAnnonce(index){
    console.log(Cards[index].id);
    // const formData = new FormData();
    //  formData.append('id_produit',appelOffre[id].id_produit);
    //  formData.append('id_fournisseur',user.id);
     let result = await fetch("http://127.0.0.1:8040/annonce/ap/del/id/"+Cards[index].id,{
         method:"Delete",
         // body:formData
     });
     result = await result.json()
     console.log(result);
     window.location.reload();
     // setAppelOffre(result)
  }

  function SaveEdit(){
    console.log(Cards[EditIndex]);
    const Try={ "adresse": Cards[EditIndex].adresse, "chambre":  Cards[EditIndex].chambre, "description":  Cards[EditIndex].description, "etage":  Cards[EditIndex].etage,
                "etat":Cards[EditIndex].etat, "id":Cards[EditIndex].id, "month": Cards[EditIndex].id, "numTel": Cards[EditIndex].numTel, "piece": Cards[EditIndex].piece,
                "prix":  Cards[EditIndex].prix, "proprietaire": {"id":Cards[EditIndex].proprietaire.id, "lastName":Cards[EditIndex].proprietaire.lastName,
                "firstName":Cards[EditIndex].proprietaire.firstName, "email":Cards[EditIndex].proprietaire.email, "numTel":Cards[EditIndex].proprietaire.numTel},
                "region":  Cards[EditIndex].region, "salleDeBain": Cards[EditIndex].salleDeBain, "status":  Cards[EditIndex].status, "surface":  Cards[EditIndex].surface,
                "titre": Cards[EditIndex].titre, "type": Cards[EditIndex].type, "ville": Cards[EditIndex].ville}

    console.log(Try);
    Axios.put('http://127.0.0.1:8040/annonce/ap/update/id/'+Try.id,Try)
     .then(response => {
        console.log(response.data);
        window.location.reload();
     })
     .catch(err=>{
       console.log(err,err.response);
     });
  }

  function AddAnnonce1(){
    SetAddAnnoncePopUp(true)
    console.log("true");
  }

  async function AddAnnonce2(){
       try{
         const formData=new FormData();
         formData.append("titre",AddAnnonceInfo.titre);formData.append("description",AddAnnonceInfo.description);formData.append("adresse",AddAnnonceInfo.adresse);
         formData.append("chambre",AddAnnonceInfo.chambre);formData.append("etage",AddAnnonceInfo.etage);formData.append("etat",AddAnnonceInfo.etat);
         formData.append("ville",AddAnnonceInfo.ville);formData.append("numTel",AddAnnonceInfo.numTel);formData.append("prix",AddAnnonceInfo.prix);
         formData.append("region",AddAnnonceInfo.region);formData.append("salleDeBain",AddAnnonceInfo.salleDeBain);formData.append("type",AddAnnonceInfo.type);
         formData.append("surface",AddAnnonceInfo.surface);formData.append("prop",212);
         formData.append("files",AddAnnonceImg);
         let result = await Axios.post("http://127.0.0.1:8040/annonce/ap/id/"+user.id,formData);
         console.log(result.data);
         window.location.reload();
       }catch(err){
         console.log(err,err.response);
       }
  }



  const ObjectPhoto=Photos.length>0?Photos[EditIndex]:Imgs;
  const ImgsAnnonce = ObjectPhoto.slice(
    pagesVisitedImsg,
    pagesVisitedImsg + usersPerPageImgs
  ).map((val, index, i = 0) => {
    return (
      <div className="" key={index} style={{ display: "flex"}}>
        <img onClick={()=>showImage(pagesVisitedImsg+index,val)} style={{ padding:'8px',borderBottomLeftRadius: "5px", borderTopLeftRadius: "5px", }} src={ val.pathPhoto===undefined  ?require("../../img/annoncePhotos/default.png").default:require("../../img/annoncePhotos/"+val.pathPhoto).default} alt="house" height="70px" width="95px" />
      </div>
    );
  });


  const displayUsers = Cards.slice(
    pagesVisited,
    pagesVisited + usersPerPage
  ).map((val, index, i = 0) => {
    return (
      <div className="" key={index} style={{ display: "flex" }}>
        <div className="">
          <img style={{ borderBottomLeftRadius: "5px", borderTopLeftRadius: "5px", }} src={Photos.length>0 && Photos[index+pagesVisited].length>0 ?require("../../img/annoncePhotos/"+Photos[index+pagesVisited][0].pathPhoto).default:require("../../img/annoncePhotos/default.png").default}   alt="house" height="220px" width="300px" />
        </div>

        <div style={{ backgroundColor: "white", width: "100%", height: "max-content", minHeight: "220px", minHeight: "220px", border: "2px dotted #e0e1e5 ", borderLeft: "none", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", padding: "12px", }} >
          <label style={{ textAlign: "left", fontSize: "1.375rem", marginBottom: "1em", fontFamily: "Lato", marginBottom: "12px", fontWeight: "600", color: "rgb(53, 53, 53)", }} >
            <b>{val.titre}<br/></b>
          </label>
          <p style={{ textAlign: "start", color: "#666", marginRight: "8px" }}> {val.description} </p>
          <div style={{ display: "flex", float: "right" }}>
            <div style={{ display: "flex", marginRight: "5%", width: "120px" }}>
              <Avatar sx={{ width: 24, height: 24, bgcolor: "#05668d", marginRight: 1, }} variant="rounded" > <BathroomOutlinedIcon /> </Avatar>
              {val.salleDeBain} bath
            </div>
            <div style={{ display: "flex", marginRight: "5%", width: "120px" }}>
              <Avatar sx={{ width: 24, height: 24, bgcolor: "#05668d", marginRight: 1, }} variant="rounded" > <BedOutlinedIcon /> </Avatar>
              {val.chambre} rooms
            </div>
            <div style={{ display: "flex", width: "120px" }}>
              <Avatar sx={{ width: 24, height: 24, bgcolor: "#05668d", marginRight: 1, }} variant="rounded" > <BorderAllIcon /> </Avatar>
              {val.surface} m²
            </div>
          </div>
          <br />
          <div style={{ textAlign: "start", maxWidth: "300px" }}>
            <div style={{ color: "#666" }}>
              <RoomIcon style={{ fontSize: "19px" }} />
              <b>{val.adresse}</b>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ color: "#666", marginTop: "4px" }}>
              {" "}
              <strong>
                Prix :<b>{val.prix} MAD</b>{" "}
              </strong>{" "}
            </div>
            <div>
              <Button onClick={()=>EditAnnonce(index)} variant="contained" size="small" style={{ borderRadius: "10px", marginRight: "10px", backgroundColor: "#679436", color: "white", }} > Modify </Button>
              <Button onClick={()=>DeleteAnnonce(index)} variant="contained" size="small" style={{ borderRadius: "10px", backgroundColor: "red", color: "white", }} > Delete </Button>
            </div>
          </div>
        </div>



        <Dialog maxWidth={'xl'} fullWidth={false} open={EditAnnonceDialog} onClose={HandleCloseEditAnnonceDialog} aria-labelledby="form-dialog-title" >
          <DialogTitle id="form-dialog-title">
            <label style={{fontSize:'25px' }}><b>Modifier Annonce</b></label><br/>
            <label style={{ color: "#666",fontSize:'15px' }}>Modifier les informations de vote annoces si vous l'avez mal ajouté.</label>
          </DialogTitle>
          <DialogContent>
            <div style={{ display: "flex" }}>
              <div>
                <div>
                  <Fab className='deleteImg' size="small" >
                    <CloseIcon />
                  </Fab>
                  <img style={{ borderBottomLeftRadius: "5px", borderTopLeftRadius: "5px", }} src={Photos.length>0 && Photos[EditIndex].length>0 ?require("../../img/annoncePhotos/"+Photos[EditIndex][IndexImg].pathPhoto).default:require("../../img/annoncePhotos/default.png").default} alt="house" height="220px" width="300px" />
                </div>
                <div>

                <div style={{ width: "100%", margin: "2% 3% 5% 0" }}>
                  <div className="rowa" >

                    <div style={{  display: "flex"}}>{ImgsAnnonce}</div>

                    <ReactPaginate style={{color:'red'}}
                      previousLabel={<KeyboardArrowLeftIcon  fontSize="large " />}
                      nextLabel={<KeyboardArrowRightIcon  fontSize="large" />}
                      pageSize={1}
                      pageCount={pageCountImgs}
                      onPageChange={changePageImg}
                      containerClassName={"paginationBttns"}
                      previousLinkClassName={"previousBttn"}
                      nextLinkClassName={"nextBttn"}
                      disabledClassName={"paginationDisabled"}
                      activeClassName={"paginationActive"}
                    />
                  </div>
                </div>

                </div>
              </div>
              <div style={{padding:'0% 2%'}}>



                <TextField onChange={e=>Cards[EditIndex].titre=e.target.value} inputProps={{style: {fontSize: '1.375rem',fontWeight:'600',}}} id="outlined-basic" fontSize='150' label="Titre" fullWidth defaultValue={Cards[EditIndex].titre} variant="outlined" />
                <TextField onChange={e=>Cards[EditIndex].description=e.target.value} style={{marginTop:'12px'}} id="outlined-basic" multiline fontSize='150' label="description" fullWidth defaultValue={Cards[EditIndex].description} variant="outlined" />
                <div style={{ display: "flex", float: "right" }}>
                  <div style={{ display: "flex", marginRight: "5%", width: "120px",marginTop:'12px' }}>
                    <TextField onChange={e=>Cards[EditIndex].salleDeBain=e.target.value} label="bath" defaultValue={Cards[EditIndex].salleDeBain} InputProps={{ startAdornment: ( <InputAdornment position="start"> <Avatar sx={{ width: 24, height: 24, bgcolor: "#05668d", marginRight: 1, }} variant="rounded" > <BathroomOutlinedIcon /></Avatar> </InputAdornment> ), }} variant="outlined" />
                  </div>
                  <div style={{ display: "flex", marginRight: "5%", width: "120px",marginTop:'12px' }}>
                    <TextField onChange={e=>Cards[EditIndex].chambre=e.target.value} label="rooms" defaultValue={Cards[EditIndex].chambre} InputProps={{ startAdornment: ( <InputAdornment position="start"> <Avatar sx={{ width: 24, height: 24, bgcolor: "#05668d", marginRight: 1, }} variant="rounded" > <BedOutlinedIcon /></Avatar> </InputAdornment> ), }} variant="outlined" />
                  </div>
                  <div style={{ display: "flex", width: "120px",marginTop:'12px' }}>
                    <TextField onChange={e=>Cards[EditIndex].surface=e.target.value} label="surface m²" defaultValue={Cards[EditIndex].surface} InputProps={{ startAdornment: ( <InputAdornment position="start"> <Avatar sx={{ width: 24, height: 24, bgcolor: "#05668d", marginRight: 1, }} variant="rounded" > <BorderAllIcon /></Avatar> </InputAdornment> ), }} variant="outlined" />
                  </div>
                </div>

                <br />
                <div style={{ textAlign: "start", maxWidth: "300px",marginTop:'12px' }}>
                  <TextField onChange={e=>Cards[EditIndex].adresse=e.target.value} id="input-with-icon-textfield" label="Adresse" defaultValue={Cards[EditIndex].adresse} InputProps={{ startAdornment: ( <InputAdornment position="start"> <RoomIcon /> </InputAdornment> ), }} variant="outlined" />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" ,marginTop:'12px'}}>
                  <TextField onChange={e=>Cards[EditIndex].adresse=e.target.value} id="input-with-icon-textfield" label="Prix (MAD)" type='number' defaultValue={Cards[EditIndex].prix} InputProps={{ startAdornment: ( <InputAdornment position="start"> <MoneyIcon /> </InputAdornment> ), }} variant="outlined" />
                  <Button onClick={SaveEdit} variant="contained" size="small" style={{ borderRadius: "10px",marginTop:'2%', backgroundColor: "#05668d", color: "white", }} > Save </Button>
                </div>

              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  });

  useEffect(()=>{
      Axios.get("http://127.0.0.1:8040/proprietaire/prop/id/"+user.id)
        .then((reponse)=> {
          SetUserInfo(reponse.data)
          console.log(reponse.data);
          SetUserFirstName(reponse.data.firstName);SetUserLastName(reponse.data.lastName);SetUserMail(reponse.data.email);
          SetUserAdresse(reponse.data.adresse);SetUserPhone(reponse.data.numTel);
        })
  },[])

  // useEffect(()=>{
  //     Axios.get("http://127.0.0.1:8040/annonce/ap/del/id/"+)
  //       .then((reponse)=> {
  //         console.log(reponse.data);
  //       })
  // },[])

  useEffect(()=>{
      Axios.get("http://127.0.0.1:8040/annonce/ap/prop/"+user.id)
        .then((reponse)=> {
          console.log(reponse.data);
          SetCards(reponse.data)
        })
  },[])

  useEffect(()=>{
      Axios.get("http://127.0.0.1:8040/photo/ap/prop/anns/"+user.id)
        .then((reponse)=> {
          console.log(reponse.data);
          SetPhotos(reponse.data)
          // console.log(Photos[1][0].pathPhoto);
        })
  },[])



  return (
    <div className="App">
      <div style={{ width: "100%" }}>
        <NavBar />
        <div className="Paper1">
          <div className="TitlePaper">
            Dashboard
            <br />
            <label className="TitlePaper2">
              Dashboard/Statistiques Utilisateurs
            </label>
          </div>
          <Button  onClick={AddAnnonce1} variant="contained" size="small" style={{ borderRadius: "10px", marginRight: "10px", backgroundColor: "#05668d", color: "white", }} > Ajouter Annonce </Button>
          <BarChartIcon style={{ fontSize: "30px" }} />
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ width: "35%", padding: "0 16", margin: "10px 2% 10px 4%" }} >
            <div className="ProfilImg">
              {ProfileImgEtat===false?<img src={UserInfo.pathPhoto!=null?require("../../img/profileImg/"+UserInfo.pathPhoto).default:require("../../img/profileImg/default.png").default} style={{ borderRadius: "7%", width: "150px" }} alt="" />:""}
              {ProfileImgEtat===true?<img src={userprofile} style={{ borderRadius: "7%", width: "150px" }} alt="" />:""}
            </div>
            <div className="nameProfil">
              <span>{Info.nom}</span> <br />
              <input type="file" name="file" id="file" className="inputfile" accept="image/*" onChange={(e)=>{imageHandler(e);SetUserprofile2(e.target.files[0]);SetProfileImgEtat(!ProfileImgEtat)}} />
              <center>
                <Fab htmlFor="file" className="" size="small">
                  <label style={{ padding: "5% 0 0 10px ", borderRadius: "10px", width: "100%", height: "100%", backgroundColor: "transparent", }} htmlFor="file" className="profil_changee" >
                    <EditIcon />
                  </label>
                </Fab>
              </center>
            </div>
            <div style={{ padding: "0%", height: "30%" }}>
              <TextField value={UserFirstName} onChange={(e)=>handleChange(e.target.value,'firstName')} label="First Name"  size="small" style={{ width: "43%", margin: "10% 0 0 0" }}  variant="outlined" />
              <TextField value={UserLastName} onChange={(e)=>handleChange(e.target.value,'lastName')} size="small" style={{ width: "43%", margin: "10% 0 0 10%" }} id="outlined-basic" label="Last Name" variant="outlined" />
              <TextField value={UserMail} onChange={(e)=>handleChange(e.target.value,'email')} size="small" style={{ width: "96%", margin: "7% 0 0 0%" }} id="outlined-basic" label="Mail" variant="outlined" />
              <TextField value={UserAdresse} onChange={(e)=>handleChange(e.target.value,'adresse')} size="small" style={{ width: "96%", margin: "7% 0 0 0%" }} id="outlined-basic" label="Adresse" variant="outlined" />
              <TextField value={UserPhone} onChange={(e)=>handleChange(e.target.value,'phone')} size="small" style={{ width: "96%", margin: "7% 0 0 0%" }} id="outlined-basic" label="Phone Number" variant="outlined" />
              <TextField value={UserPassword} onChange={(e)=>handleChange(e.target.value,'password')} size="small" style={{ width: "96%", margin: "7% 0 0 0%" }} type="password" id="outlined-basic" label="password" variant="outlined" />
              <Button  onClick={SaveEditUserInfo} variant="contained" size="small" style={{ borderRadius: "10px", margin: "15px 10px 0 0", backgroundColor: "#05668d", color: "white", }} > Save Modification </Button>

            </div>
          </div>
          <div style={{ width: "100%", margin: "2% 3% 5% 0" }}>
            <div className="rowa" style={{ height: "100% , margin: 10px" }}>
              {displayUsers}
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
      </div>
      <Dialog maxWidth="md"  fullWidth={true} open={AddAnnoncePopUp} onClose={HandleCloseAddAnnoncePopUp} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">
          <h3> <b>Ajouter Annonce</b> </h3>
          <h6 style={{ color: "#666" }}> Let's get you all set up so you can verify your personal account and begin setting up your profile. </h6>
        </DialogTitle>
        <DialogContent>
          <div style={{ display: "block" }}>
            <div>
              <TextField fullWidth label="Titre" defaultValue={UserAdd.email} onChange={e=>AddAnnonceInfo.titre=e.target.value} style={{ marginTop: "3% "}} variant="outlined"  InputProps={{ startAdornment: ( <InputAdornment position="start"><PersonIcon /></InputAdornment> ), }} />
              <TextField fullWidth label="description" multiline defaultValue={UserAdd.name} onChange={e=>AddAnnonceInfo.description=e.target.value} style={{ marginTop: "3%" }} variant="outlined" InputProps={{ startAdornment: ( <InputAdornment position="start"> <PersonIcon /></InputAdornment> ), }} />
              <TextField fullWidth label="adresse" defaultValue={UserAdd.phone} onChange={e=>AddAnnonceInfo.adresse=e.target.value} width="50%" style={{ marginTop: "3%" }} variant="outlined" InputProps={{ startAdornment: ( <InputAdornment position="start"> <PersonIcon /></InputAdornment> ), }} />
              <div style={{display:'flex',marginTop:'3%'}}>
                <TextField label="chambre" defaultValue={UserAdd.name} onChange={e=>AddAnnonceInfo.chambre=e.target.value} style={{ marginLeft: "0%" }} variant="outlined" InputProps={{ startAdornment: ( <InputAdornment position="start"> <PersonIcon /></InputAdornment> ), }} />
                <TextField label="etage" defaultValue={UserAdd.phone} onChange={e=>AddAnnonceInfo.etage=e.target.value} style={{ marginLeft: "2%" }} variant="outlined" InputProps={{ startAdornment: ( <InputAdornment position="start"> <PersonIcon /></InputAdornment> ), }} />
                <TextField label="etat" defaultValue={UserAdd.name} onChange={e=>AddAnnonceInfo.etat=e.target.value} style={{ marginLeft: "2%" }} variant="outlined" InputProps={{ startAdornment: ( <InputAdornment position="start"> <PersonIcon /></InputAdornment> ), }} />
                <TextField label="ville" defaultValue={UserAdd.phone} onChange={e=>AddAnnonceInfo.ville=e.target.value} width="50%" style={{ marginLeft: "2%" }} variant="outlined" InputProps={{ startAdornment: ( <InputAdornment position="start"> <PersonIcon /></InputAdornment> ), }} />
                <TextField label="Phone Number" defaultValue={UserAdd.phone} onChange={e=>AddAnnonceInfo.numTel=e.target.value} style={{ marginLeft: "2%" }} variant="outlined" InputProps={{ startAdornment: ( <InputAdornment position="start"> <PersonIcon /></InputAdornment> ), }} />
              </div>
              <div style={{display:'flex',marginTop:'3%'}}>
                <TextField label="prix" defaultValue={UserAdd.name} onChange={e=>AddAnnonceInfo.prix=e.target.value} width="50%" style={{ marginLeft: "0%" }} variant="outlined" InputProps={{ startAdornment: ( <InputAdornment position="start"> <PersonIcon /></InputAdornment> ), }} />
                <TextField label="region" defaultValue={UserAdd.phone} onChange={e=>AddAnnonceInfo.region=e.target.value} width="50%" style={{ marginLeft: "2%" }} variant="outlined" InputProps={{ startAdornment: ( <InputAdornment position="start"> <PersonIcon /></InputAdornment> ), }} />
                <TextField label="Salle De Bain" defaultValue={UserAdd.name} onChange={e=>AddAnnonceInfo.salleDeBain=e.target.value} width="50%" style={{ marginLeft: "2%" }} variant="outlined" InputProps={{ startAdornment: ( <InputAdornment position="start"> <PersonIcon /></InputAdornment> ), }} />
                <TextField label="type" defaultValue={UserAdd.name} onChange={e=>AddAnnonceInfo.type=e.target.value} width="50%" style={{ marginLeft: "2%" }} variant="outlined" InputProps={{ startAdornment: ( <InputAdornment position="start"> <PersonIcon /></InputAdornment> ), }} />
                <TextField label="surface" defaultValue={UserAdd.phone} onChange={e=>AddAnnonceInfo.surface=e.target.value} width="50%" style={{ marginLeft: "2%" }} variant="outlined" InputProps={{ startAdornment: ( <InputAdornment position="start"> <PersonIcon /></InputAdornment> ), }} />
              </div>

              <div className="nameProfil">
                <input type="file" name="ImgAnn" id="ImgAnn" className="inputfile" accept="image/*" onChange={(e)=>SetAddAnnonceImg(e.target.files[0])} />
                <center>
                  <Fab htmlFor="ImgAnn" className="" size="small">
                    <label style={{ padding: "5% 0 0 10px ", borderRadius: "10px", width: "100%", height: "100%", backgroundColor: "transparent", }} htmlFor="ImgAnn" className="profil_changee" >
                      <ImageIcon style={{color:'grey'}} />
                    </label>
                  </Fab>
                </center>
              </div>


              <Button onClick={AddAnnonce2} variant="contained" style={{ backgroundColor: "#05668d", color: "white", width: "100%", height: "40px", marginTop: "3%", }} startIcon={<ArrowForwardIosIcon />} > Envoyer </Button>
            </div>
            <br />
          </div>
        </DialogContent>
      </Dialog>
    </div>

  );

}

export default Profil;
