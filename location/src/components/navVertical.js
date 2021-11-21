import React, {Fragment,useState } from 'react';
import '../App.css'
import './css/bootstrap.min.css'
// import '../../assets/css/now-ui-kit.css?v=1.3.0'
// import '../../assets/demo/demo.css'
import {Tab,Row,Col,ListGroup} from 'react-bootstrap';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ContactlessIcon from '@material-ui/icons/Contactless';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LanguageIcon from '@material-ui/icons/Language';
import DnsIcon from '@material-ui/icons/Dns';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DehazeIcon from '@material-ui/icons/Dehaze';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
// import '../../assets/css/navVertical.css'
import Logo from './img/logo.png';


function NavVertical() {

  const [Cards,SetCards]=useState([
    { title:'Tableau de bord',href:'/servicePrincipale/tableauDeBord',image:<DashboardIcon/>,key:'1' },
    { title:'Profil',href:'/servicePrincipale/tableauDeBord',image:<AccountCircleIcon/>,key:'2' },
    { title:'Mes Annonces',href:'/servicePrincipale/tableauDeBord',image:<DnsIcon/>,key:'3' },
    { title:'Se Déconnecter',href:'/servicePrincipale/tableauDeBord',image:<DnsIcon/>,key:'3' },

    // { title:'Soins de corps ',href:'/servicePrincipale/tableauDeBord',image:<MenuIcon/>,key:'4' },
    // { title:'Soins de visage',href:'/servicePrincipale/tableauDeBord',image:<AnnouncementIcon/>,key:'5' },
    // { title:'Tableau de bord',href:'/servicePrincipale/tableauDeBord',image:<ContactlessIcon/>,key:'6' },
    // { title:'Profil',href:'/servicePrincipale/tableauDeBord',image:<ListAltIcon/>,key:'7' },
    // { title:'Epilation',href:'/servicePrincipale/tableauDeBord',image:<ShoppingBasketIcon/>,key:'8' },
    // { title:'Soins de visage',href:'/servicePrincipale/tableauDeBord',image:<LanguageIcon/>,key:'9' },
  ]);

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
    <div className="navVerticalPC" style={{width:'20%',background:'#05668D'}}>
    <Tab.Container  >
      <Row color='default' style={{fontSize:'12px'}}>
        <Col >
          <ListGroup >
            <ListGroup.Item key="logo" style={{backgroundColor:'#05668D',color:'white'}} action href='/servicePrincipale/tableauDeBord'>
              <div className='flex' ><div><img src={Logo} alt="Logo"  width="92px" /></div></div>
            </ListGroup.Item>
            {Cards.map(item=>(
              <ListGroup.Item key={item.key} style={{backgroundColor:'#05668D',color:'#EBF2FA'}} action href={item.href}>
                <div className='flex'><div >{item.image}</div><div><b>{item.title}</b></div></div>
              </ListGroup.Item>
             ))}
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
)}
export default NavVertical;
