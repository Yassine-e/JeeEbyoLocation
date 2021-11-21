import React, { Fragment, useState } from "react";
import "../../App.css";
import "../css/bootstrap.min.css";
// import '../../assets/css/now-ui-kit.css?v=1.3.0'
// import '../../assets/demo/demo.css'
import { Tab, Row, Col, ListGroup } from "react-bootstrap";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DnsIcon from "@material-ui/icons/Dns";
import DashboardIcon from "@material-ui/icons/Dashboard";
// import '../../assets/css/navVertical.css'
import Logo from "../img/logo.png";
import {useHistory} from 'react-router-dom'


function NavVertical() {
  const history=useHistory();
  const [Cards /*SetCards*/] = useState([
    {
      title: "Tableau de bord",
      href: "/dashboard",
      image: <DashboardIcon />,
      key: "1",
    },
    {
      title: "Profil",
      href: "/propritaires",
      image: <AccountCircleIcon />,
      key: "2",
    },
    {
      title: "Mes Annonces",
      href: "/Annonce_Publie",
      image: <DnsIcon />,
      key: "3",
    },
    {
      title: "Les annonces en Attentes",
      href: "Annonce_Attente",
      image: <DnsIcon />,
      key: "4",
    },
  ]);
  function LogOut(){
    console.log("hey");
    const hh={"id": "", "lastName": "", "firstName": "", "email": "", "numTel": "", "password": "", "adresse": "", "pathPhoto": "","roleList": [""]}
    localStorage.setItem("user-info",JSON.stringify(hh));
    history.push("/");
  }


  return (
    <Fragment>
      <div
        className="navVerticalPC"
        style={{ width: "20%", background: "#05668D" }}
      >
        <Tab.Container>
          <Row color="default" style={{ fontSize: "12px" }}>
            <Col>
              <ListGroup>
                <ListGroup.Item
                  key="logo"
                  style={{ backgroundColor: "#05668D", color: "white" }}
                  action
                  href="/servicePrincipale/tableauDeBord"
                >
                  <div className="flex">
                    <div>
                      <img src={Logo} alt="Logo" width="92px" />
                    </div>
                  </div>
                </ListGroup.Item>
                {Cards.map((item) => (
                  <ListGroup.Item key={item.key} style={{ backgroundColor: "#05668D", color: "#EBF2FA" }} action href={item.href} >
                    <div className="flex">
                      <div>{item.image}</div>
                      <div>
                        <b>{item.title}</b>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item key="9" style={{ backgroundColor: "#05668D", color: "#EBF2FA" }} action onClick={LogOut} >
                  <div className="flex">
                    <div><DnsIcon /></div>
                    <div>
                      <b>Se Déconnecter</b>
                    </div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      {/*<div className='iconNavVertical' style={{fontSize:'15px',backgroundColor:'#e5e5e5'}}>
    <ListItem button onClick={handleClick}>
      <DehazeIcon style={{marginLeft:'3%'}}/>
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {Cards.map(item=>(
          <ListGroup.Item key={item.key} style={{backgroundColor:'#427AA1',color:'white'}} action href={item.href}>
            <div className='flex'><div >{item.image}</div><div>{item.title}</div></div>
          </ListGroup.Item>
         ))}
      </List>
    </Collapse>
    </div>*/}
    </Fragment>
  );
}
export default NavVertical;
