import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.scss";
import 'bootstrap/dist/css/bootstrap.min.css';



function NavBar() {
  let expand = "md";
  
  return (
    <>
      <Navbar bg="dark" variant="dark" expand={expand} className="mb-3 fixed">
          <Container fluid>
            <Navbar.Brand className="title" href="#home">
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
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="dark">
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about-me">About Me</Nav.Link>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                  <Nav.Link href="#contact-me">Contact Me</Nav.Link>
                  <Nav.Link className='resume' href='resume.pdf'>Resume</Nav.Link>
                  </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default NavBar;
