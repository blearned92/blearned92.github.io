import { useNavigate } from "react-router-dom";
import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Sprite from '../../images/Sprite.png';
import "./NavBar.scss";

function NavBar() {
  let expand = "md";
  return (
    <>
      <Navbar bg="dark" variant="dark" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand className="title" href="#home">
              <img
                alt="logo"
                src={Sprite}
                width="30"
                height="30"
                className="d-inline-block align-middle logo"
              />{' '}
              Brandon Learned
            </Navbar.Brand>
            <Navbar.Toggle><FontAwesomeIcon icon={faBars}/></Navbar.Toggle>
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="dark nav-head">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="dark">
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#">About Me</Nav.Link>
                  <Nav.Link href="#">Technologies</Nav.Link>
                  <Nav.Link href="#">Projects</Nav.Link>
                  <Nav.Link href="#">Contact Me</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default NavBar;
