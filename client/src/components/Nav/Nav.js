import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
import Auth from "../../utils/auth";
import Example from '../Modal';
import Hamburger from '../Hamburger'
export default function Navigation({ currentPage, handlePageChange }) {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }
    
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <nav>
            {Auth.loggedIn() ? (
                <Navbar className="navbar container-fluid" expand="lg">
                    <Container className="navbar-internal">
                        <Navbar.Brand className="super-internal">Home</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="super-internal" id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className="super-internal" onClick={() => handlePageChange("Home")}>Home</Nav.Link>
                                <Nav.Link className="super-internal" onClick={() => handlePageChange("Profile")}>My Profile</Nav.Link>
                                <Nav.Link className="super-internal" onClick={() => handlePageChange("Adoption")}>Adoptable Dinosaurs</Nav.Link>
                                <Nav.Link className="super-internal" onClick={() => handlePageChange("Shop")}>Shop</Nav.Link>
                                <Nav.Link className="super-internal" onClick={() => handlePageChange("Cart")}>Cart</Nav.Link>
                                <a href="/" onClick={logout}>
                                    Logout
                                </a>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            ) : (
                <Navbar className="navbar" expand="lg">
                    <Container className="navbar-internal">
                        <Navbar.Brand className="super-internal">Home</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="super-internal" id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className="super-internal" onClick={() => handlePageChange("Home")}>Home</Nav.Link>
                                <Nav.Link className="super-internal" onClick={() => handlePageChange("Adoption")}>Adoptable Dinosaurs</Nav.Link>
                                <Nav.Link className="super-internal" onClick={() => handlePageChange("Login")}><Example /></Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )}

            <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
                </div>
                
                {/* add any additional nav styles here */}
                {/* <style jsx>{`
                @media screen and (max-width: 980px) {
                    .nav-row ul {
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                }
                    .dynamic-nav {
                        padding-top: ${hamburgerOpen ? '40px' : '20px'};
                        padding-bottom: ${hamburgerOpen ? '20px' : '20px'};
                }
                `}</style> */}
        </nav>

    )
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        document.getElementById("navbar").style.background = "#501e27";
    } else {

        document.getElementById("navbar").style.background = "none";
    }
}
