import React from "react";
import { NavLink, Switch, Route, Link, useHistory } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/logo.png"
import login from "../images/login.png";

function Header (){

    return (
        <Navbar collapseOnSelect expand="lg" className="color-navbar">
            <img className="logo" src={logo} alt="instage-logo"/>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="link-list">
                <Nav.Link as={Link} to="/home" href="/home" className="left-link">Hiring</Nav.Link>
                <Nav.Link as={Link} to="/home" href="/home">Resources</Nav.Link>
                <Nav.Link as={Link} to="/home" href="/home">Simulations</Nav.Link>
                <Nav.Link as={Link} to="/home" href="/home">Support</Nav.Link>
                <Nav.Link as={Link} to="/home" href="/home">Pricing</Nav.Link>
                <Nav.Link as={Link} to="/home" href="/home">Try it</Nav.Link>
                <img className="login-icon" src={login} alt="login-icon" />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;