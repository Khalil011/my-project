import React from "react";
import {Navbar,Nav} from "react-bootstrap";
import './Navbar.css';
import image from '../../logo.png';
import {FaFacebookF,FaInstagram,FaLinkedinIn,FaTwitter} from "react-icons/fa";

const navbar = () => {
  return(
    <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="#home" style={{margin:'20px',color:'rgb(290,0,77)'}}><h1><img style={{height:'50%',width:'50%'}} src={image}/></h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="nav-link" href="">Home</Nav.Link>
          <Nav.Link className="nav-link"  href="">About</Nav.Link>
          <Nav.Link className="nav-link"  href="">Service</Nav.Link>
          <Nav.Link className="nav-link" href="">Portfolio</Nav.Link>
          <Nav.Link className="nav-link"  href="">Blog</Nav.Link>
          <Nav.Link className="nav-link"  href="">Contact</Nav.Link>
        </Nav>
        <Nav className="mr-auto second">
          <Nav.Link className="nav-link" href=""><FaFacebookF/></Nav.Link>
          <Nav.Link className="nav-link"  href=""><FaInstagram/></Nav.Link>
          <Nav.Link className="nav-link" href=""><FaLinkedinIn/></Nav.Link>
          <Nav.Link className="nav-link"  href=""><FaTwitter/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navbar;
