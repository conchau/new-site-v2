import { React, useState, useEffect } from "react";
import { NavLink, Switch, Route, Link, useHistory } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/logo.png"
import phone from "../images/phone.png";
import profile from "../images/profile.png";
import headset from "../images/headset.png";

function Header (){

    const [pos, setPos] = useState("top")

    useEffect (()=>{
        document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 5){
               setPos("moved")
            } else {
               setPos("top")
            }
        })
    },[])

    const [activeLink, setActiveLink] = useState("/");

    return (
        <div>
            {pos === "top" && (
                <div className="contact-bar">
                    {/* <a href="https://www.instage.io/login" className="contact-bar-container right-padding">
                            <img className="contact-bar-icon" src={profile} alt="profile-icon" />
                            <p>Login</p>
                    </a> */}
                    <a href="https://help.instage.io" className="contact-bar-container">
                            <img className="contact-bar-icon" src={headset} alt="support-icon" />
                            <p>Support</p>
                    </a>
                    <a href="tel:+9052428669" className="contact-bar-container">
                            <img className="contact-bar-icon" src={phone} alt="phone-icon" />
                            <p>Contact Sales: 905-242-8669</p>
                    </a>
                </div>
            )}
            <Navbar collapseOnSelect expand="xl" className="color-navbar">
                <a className="logo" to="/" href="/" eventKey="/">
                    <img src={logo} alt="instage-logo"/>
                </a>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav
                        className="link-list"
                        activeKey={activeLink}
                        onSelect={(selectedKey) => setActiveLink(selectedKey)}
                    >
                    {/* REMOVED THE "HREF" AND "TO" PROPERTIES FOR MULTIPLE PAGES */}
                    <Nav.Link as={Link} to="/" href="/" eventKey="/">Higher Ed</Nav.Link>
                    <Nav.Link as={Link} to="/" eventKey="/highschool" className="two">High School</Nav.Link>
                    <Nav.Link as={Link} to="/" eventKey="/corporate" className="three">Corporate</Nav.Link>
                    <Nav.Link as={Link} to="/" eventKey="resources" className="four">Resources</Nav.Link>
                    <Nav.Link as={Link} to="/demo" href="/demo" eventKey="/demo">Pricing</Nav.Link>
                    <Nav.Link as={Link} to="/demo" href="/demo" eventKey="/demo" className="cta-btn-header">Schedule Private Demo</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {/* <button className="cta-btn-header">Schedule Private Demo</button> */}
            </Navbar>
        </div>
    )
}

export default Header;