import "./App.css";
import Annonce_pub from "./components/dashboard/Annonce_pub";
import Dashboard from "./components/dashboard/dashboard";
import Profil from "./components/Proprietaire/Profil/profil";
import PublierAnnonce from "./components/Publier_annonce/Publier_annonce";
import Propritaires from "./components/dashboard/Propritaires";
import Annonce_Attente from "./components/dashboard/Annonce_enAtt";
import Initial from "./components/Main/Initial";
import Description from "./components/AnnonceDescription/Description";
import ErrorPage from "./components/ErrorPage";
import Inscription from "./components/Inscription/Inscription";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  let user=JSON.parse(localStorage.getItem('user-info'))
  const id=user.id;
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Initial} exact />

          {user.roles=="ADMIN"? <Route path="/Dashboard" component={Dashboard} /> : <Route path="/Dashboard" component={ErrorPage} /> }
          {user.roles=="ADMIN"? <Route path="/propritaires" component={Propritaires} /> : <Route path="/propritaires" component={ErrorPage} /> }
          {user.roles=="ADMIN"? <Route path="/Annonce_Publie" component={Annonce_pub} /> : <Route path="/Annonce_Publie" component={ErrorPage} /> }
          {user.roles=="ADMIN"? <Route path="/Annonce_Attente" component={Annonce_Attente} /> : <Route path="/Annonce_Attente" component={ErrorPage} /> }
          {user.roles=="PROPRIETAIRE"? <Route path="/Profil" component={Profil} /> : <Route path="/Profil" component={ErrorPage} /> }


          {/*
            <Route path="/propritaires" component={Propritaires} />
            <Route path="/Annonce_Attente" component={Annonce_Attente} />
            <Route path="/Annonce_Publie" component={Annonce_pub} />
            <Route path="/Profil" component={Profil} />

          */}


          <Route path="/Description" component={Description} />
          <Route path="/Inscription" component={Inscription} />
          <Route path="/PublierAnnonce" component={PublierAnnonce} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
      {/*
    <NavVertical/>
    <div style={{width:'100%'}}>
      <NavBar/>
      <Title/>
      <div className='row' style={{display:'flex',padding:"1%",margin:'0'}}>
        <div className='col-sm-4' >
          <Title/>
        </div>
        <div className='col-sm-8' ><AreaChart /></div>
      </div>
    </div>
    */}
    </div>
  );
}

export default App;
