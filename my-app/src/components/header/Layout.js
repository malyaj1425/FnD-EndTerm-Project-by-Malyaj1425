import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Header.css';
import { FaHouseUser } from 'react-icons/fa';
import { FaUserAstronaut } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
import Footer from "./Footer";




const Layout = ({size}) => {
  const navigation = useNavigate();
  function hide() {
    navigation("/items");
  }
  function hide1() {
    navigation("/best");
  }
  function hide2() {
    navigation("/offer");
  }
  function hide3() {
    navigation("/daily");
  }
  function home() {
    navigation("/");
  }
  function rate() {
    navigation("/rating");
  }
  function feed() {
    navigation("/feedback");
  }
  
  return (
    
    <>
    <Navbar collapseOnSelect expand="lg" sticky="top" id="navbars">
      <Container>
        <Navbar.Brand href="" onClick={home} id="brand">Falkreath's Inn</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
        <Nav.Link href="#deets" onClick={hide}>Shop All</Nav.Link>
        <Nav.Link href="#deets" onClick={hide1}>Offers</Nav.Link>
        <Nav.Link href="#deets" onClick={hide2}>Best Sellers</Nav.Link>
        <Nav.Link href="#deets" onClick={hide3}>Daily Need</Nav.Link>
          </Nav>
          <Nav></Nav>
        <Nav></Nav>
        <Nav></Nav>
        <Nav></Nav>
        <Nav></Nav>
          <Nav className="justify-content-end">
          <Nav className="me-auto">

          <Link to="/"><Nav.Link href="#features"><FaHouseUser size='30px'/></Nav.Link></Link>
          <Link to="/login"><Nav.Link href="#pricing"><FaUserAstronaut size='30px'/></Nav.Link></Link>
          <Link to="/search"><Nav.Link href="#pricing"><FaSearch size='30px'/></Nav.Link></Link>
          <Link to="/cart" style={{}}><Nav.Link href="#pricing">
            <div className="cart">
              <FaCartPlus size='30px'/>
              <span style={{color:"black"}}>
                {size}
              </span>
            </div>
          </Nav.Link></Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" onClick={feed}>Feedback</NavDropdown.Item>
              <NavDropdown.Divider />
              <Link to="/adminlogin"><NavDropdown.Item href="#action/3.4" id="lgn">
              Login as Admin
              </NavDropdown.Item></Link>
            </NavDropdown>
          </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  <Outlet/>
  <Footer/>
  </>
  )
};
// project by malyaj singh 2010991425 g22 chitkara

export default Layout;