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
                    <div className="contact-bar-container">
                        <img className="contact-bar-icon" src={profile} alt="profile-icon" />
                        <p>Login</p>
                    </div>
                    <div className="contact-bar-container">
                        <img className="contact-bar-icon" src={headset} alt="support-icon" />
                        <p>Support</p>
                    </div>
                    <div className="contact-bar-container">
                        <img className="contact-bar-icon" src={phone} alt="phone-icon" />
                        <p>Contact Sales: 221-223-2031</p>
                    </div>
                </div>
            )}
            <Navbar collapseOnSelect expand="xl" className="color-navbar">
                <img className="logo" src={logo} alt="instage-logo"/>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav
                        className="link-list"
                        activeKey={activeLink}
                        onSelect={(selectedKey) => setActiveLink(selectedKey)}
                    >
                    <Nav.Link as={Link} to="/" href="/" eventKey="/">Higher Ed</Nav.Link>
                    <Nav.Link as={Link} to="/k-12" href="/k-12" eventKey="/k-12" className="two">K-12</Nav.Link>
                    <Nav.Link as={Link} to="/corporate" href="/corporate" eventKey="/corporate" className="three">Corporate</Nav.Link>
                    <Nav.Link as={Link} to="/resources" href="/resources" eventKey="resources" className="four">Resources</Nav.Link>
                    <Nav.Link as={Link} to="/pricing" href="/pricing" eventKey="/pricing">Pricing</Nav.Link>
                    <Nav.Link as={Link} to="/schedule-demo" href="/schedule-demo" eventKey="/schedule-demo" className="cta-btn-header">Schedule Private Demo</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {/* <button className="cta-btn-header">Schedule Private Demo</button> */}
            </Navbar>
        </div>
    )
}

export default Header;