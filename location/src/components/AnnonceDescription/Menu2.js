import React from "react";
import mylogo from "./img/logo2.png";
import "./css/Menu2.css";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
function Menu2() {
  return (
    <div>
      <Navbar className="color-nav" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className="firstdevis">
            <a className="" href="/">
              <img className="mylog " src={mylogo} width="63px" alt="" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 seconddevis"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="pil pila" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="pil pila" href="/">
                Annonces
              </Nav.Link>

              <Nav.Link className="pil pila" href="/">
                About Us
              </Nav.Link>
              <Nav.Link className="pil pila" href="/">
                Pricing
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              {/*<Nav.Link className="pil  pilaouch" href="/">
                <div className="mycadr">Se connecter</div>
              </Nav.Link>
              <Nav.Link className="pil mycadr" href="/">
                <div className="moncadra">
                  <p className="">Publier annonce</p>
                </div>
              </Nav.Link>*/}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/*<nav className="poss possaa">
      <div className="myMenu">
        <div className="firstmenu">
          <a className="pila pil_push" href="/">
            <img className="mylog" src={mylogo} width="80px" alt="" />
          </a>
        </div>

        <div className="secondmenu" id="navbarNav">
          <div className="menuleft">
            <ul className="">
              <li className="">
                <a className="pil pila" href="/">
                  Home
                </a>
              </li>
              <li className="">
                <a className="pil pila" href="/">
                  Annonces
                </a>
              </li>
              <li className="">
                <a className="pil pila" href="/">
                  About us
                </a>
              </li>
              <li className="">
                <a className="pil pila" href="/">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="menuright">
            <ul>
              <li className="Speciall">
                <a className="pil mycadr pila" href="/">
                  Se connecter
                </a>
              </li>
              <li>
                <a className="pil mycadr" href="/">
                  <div className="moncadra">
                    <p className="contentCadr">Publier annonce</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </nav>*/}
    </div>
  );
}

export default Menu2;
