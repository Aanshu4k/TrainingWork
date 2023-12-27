import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./Home";
import Products from "./Products";
import ContactUs from "./ContactUs";
import './NavBar.css';

const NavBar = () => {
  return (
    <Router>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        className="mynavbar"
      >
        <Container>
          <Navbar.Brand as={Link} to="/Home" style={{color:'orange'}}>
            <h5 className="webpage-name">GROCERY STORE</h5>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Home">
                <b className="nav-btn">HOME</b>
              </Nav.Link>
              <Nav.Link as={Link} to="/Products">
                <b className="nav-btn">PRODUCTS</b>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/ContactUs">
                <b className="nav-btn">CONTACT US</b>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ marginTop: "70px" }}>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default NavBar;
