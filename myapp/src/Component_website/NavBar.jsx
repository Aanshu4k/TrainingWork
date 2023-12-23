import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './Home';
import Products from './Products';
import ContactUs from './ContactUs';

const NavBar = () => {
  return (
    <Router>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container style={{ }}>
          <Navbar.Brand as={Link} to="/Home">E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Home">Home</Nav.Link>
              <Nav.Link as={Link} to="/Products">Products</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/ContactUs">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default NavBar;
